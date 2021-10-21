import { useCallback } from 'react';
import { useEffect, useState } from 'react';
import { getDataByWoeid, getDataByCoords, getDataByCity } from './apis';
import './App.scss';
import Main from './components/Main/Main';
import SideBar from './components/sideBar/SideBar';
import Spinner from './components/UI/Spinner';
import { getCurrentPosition } from './Utils/index';

function App() {
  const [data, setData] = useState({
    search: false,
    data: [],
    location: 'Tokyo',
    input: '',
    woeid: 1118370,
    activeScale: 'celcius',
    filteredSearch: [],
    error: false,
    loading: false,
  });

  const fetchDataWithWoeid = useCallback((woeid) => {
    getDataByWoeid(woeid).then((res) => {
      setData((prevState) => {
        return {
          ...prevState,
          data: res.data.consolidated_weather,
          location: res.data.title,
        };
      });
    });
  }, []);

  const fetchDataWithLongLat = useCallback(
    (latitude, longitude) => {
      getDataByCoords(latitude, longitude).then((res) => {
        const data = res.data[0];
        return fetchDataWithWoeid(data.woeid);
      });
    },
    [fetchDataWithWoeid]
  );

  const fetchCoordinate = useCallback(async () => {
    try {
      const { coords } = await getCurrentPosition();
      const { latitude, longitude } = coords;
      fetchDataWithLongLat(latitude.toFixed(2), longitude.toFixed(2));
    } catch (err) {
      alert(err.message);
      console.log(err);
    }
  }, [fetchDataWithLongLat]);

  useEffect(() => {
    setData((prevState) => {
      return { ...prevState, loading: true };
    });

    getDataByWoeid(data.woeid).then((res) => {
      setData((prevState) => {
        return {
          ...prevState,
          loading: false,
          data: res.data.consolidated_weather,
          location: res.data.title,
        };
      });
    });

    fetchCoordinate();
  }, [data.woeid, fetchCoordinate]);

  const handleSearchOpenClicked = () => {
    setData((prevState) => {
      return { ...prevState, search: true };
    });
  };

  const handleSearchCloseClicked = () => {
    setData((prevState) => {
      return { ...prevState, search: false };
    });
  };

  const handleInputChange = (e) => {
    setData((prevState) => {
      return { ...prevState, input: e.target.value };
    });
  };

  const handleSearch = () => {
    if (data.input.trim() === '') {
      alert('Empty input');
      return;
    }
    setData((prevState) => {
      return { ...prevState, loading: true };
    });

    getDataByCity(data.input)
      .then((res) => {
        if (res.data.length) {
          setData((prevState) => {
            return {
              ...prevState,
              loading: false,
              filteredSearch: [...res.data],
              error: false,
            };
          });
        } else {
          setData((prevState) => {
            return { ...prevState, error: true };
          });
        }
      })
      .catch((err) => {
        alert(err.message);
        console.log(err.message);
      });
  };

  const handleGetWeather = (id) => {
    setData((prevState) => {
      return { ...prevState, search: false, input: '', filteredSearch: [] };
    });

    fetchDataWithWoeid(id);
  };

  const handleGetTempScale = (scale) => {
    if (scale) {
      setData((prevState) => {
        return { ...prevState, activeScale: 'celcius' };
      });
    } else {
      setData((prevState) => {
        return { ...prevState, activeScale: 'farenheit' };
      });
    }
  };

  const handleRequestGetCurLocation = () => fetchCoordinate();

  return (
    <div className='app'>
      {data.loading && !data.data[0] ? (
        <Spinner />
      ) : (
        <>
          <SideBar
            open={handleSearchOpenClicked}
            close={handleSearchCloseClicked}
            search={data.search}
            data={data.data[0]}
            location={data.location}
            handleInputChange={handleInputChange}
            handleSearch={handleSearch}
            input={data.input}
            filteredSearch={data.filteredSearch}
            error={data.error}
            handleGetWeather={handleGetWeather}
            tempScale={data.activeScale}
            request={handleRequestGetCurLocation}
          />
          <Main
            highlight={data.data[0]}
            data={data.data}
            getScale={handleGetTempScale}
            tempScale={data.activeScale}
          />
        </>
      )}
    </div>
  );
}

export default App;
