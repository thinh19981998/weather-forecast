// fetch user location
export function getCurrentPosition(location = {}) {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, location);
  });
}

const dayArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat'];
const monthArr = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];

export function formatDate(d) {
  const dt = new Date(d);

  const day = dayArr[dt.getUTCDay()];
  const date = dt.getUTCDate();
  const month = monthArr[dt.getUTCMonth()];

  return `${day}, ${date} ${month}`;
}

/* Functionality to get convert celcius to farenheight */
export const convertToFarenheight = (temp) => {
  return Math.floor(temp * 1.8 + 32);
};
