import './App.scss';

function App() {
  return (
    <div className='app'>
      <div className='left-box'>
        <div className='navigation'>
          <btn className='openSearch-btn'>Search for places</btn>
          <div className='current-location'>
            <span className='material-icons current-location__icon'>
              my_location_outlined
            </span>
          </div>
        </div>
        <div className='current-weather'>
          <div className='current-weather__img-box'>
            <img
              className='current-weather__img'
              src='https://www.metaweather.com/static/img/weather/png/sn.png'
              alt='current weather'
            />
          </div>
          <div className='current-weather__temperature'>
            <span>15</span>
            <span className='symbol'>&#8451;</span>
          </div>
          <div className='current-weather__state'>
            <span>Shower</span>
          </div>
          <div className='current-weather__info'>
            <p className='current-weather__date'>
              Today • <span>Fri,5 Jun</span>
            </p>
            <p className='current-weather__location'>
              <span class='material-icons'>location_on</span> Ho Chi Minh City
            </p>
          </div>
        </div>
        <div className='search'>
          <div className='search__close-btn'>
            <span class='material-icons'>close</span>
          </div>
          <form className='search__form'>
            <div className='search__input-box'>
              <span class='material-icons search__icon'>search</span>
              <input
                type='text'
                className='search__input'
                placeholder='search location'
              />
            </div>
            <button className='search__btn'>Search</button>
          </form>
        </div>
      </div>
      <div className='right-box'>Right</div>
    </div>
  );
}

export default App;
