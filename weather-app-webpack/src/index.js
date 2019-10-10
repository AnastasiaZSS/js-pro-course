import css from '../public/style.css';
import getWeather from './getWeatherFunc';
import  form  from './searchForm';
import  { searchHistoryTable, fillTable } from './historyTable';
import getMyLocation from './getMyLocation';
import  { addMyHistory, getCurrentHistoryData, clearMyHistory } from './searchHistory';
import setLocation from './map'

const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.prepend(wrapper);

wrapper.append(form);

const main = document.createElement('div');
main.classList.add('main');
wrapper.append(main);

const mapEl = document.querySelector('#map');
main.append(mapEl);
 
const myWeather = document.createElement('div');
myWeather.classList.add('my-weather');
main.append(myWeather);

const myWeatherBtns = document.createElement('div');
myWeatherBtns.classList.add('my-weather-buttons');
myWeather.append(myWeatherBtns);

const getMyWeatherBtn = document.createElement('button');
getMyWeatherBtn.classList.add('get-my-weather');
getMyWeatherBtn.classList.add('btn');
getMyWeatherBtn.textContent = 'Get the weather in my town';
myWeatherBtns.append(getMyWeatherBtn);

const searchHistoryBtn = document.createElement('button');
searchHistoryBtn.classList.add('search-history');
searchHistoryBtn.classList.add('btn');
searchHistoryBtn.textContent = 'Search history';
myWeatherBtns.append(searchHistoryBtn);

const clearSearchHistoryBtn = document.createElement('button');
clearSearchHistoryBtn.classList.add('clear-search-history');
clearSearchHistoryBtn.classList.add('btn');
clearSearchHistoryBtn.textContent = 'Clear history';
myWeatherBtns.append(clearSearchHistoryBtn);

myWeather.append(searchHistoryTable);

getMyWeatherBtn.addEventListener('click', async function (e) {
  e.preventDefault();
  try {
    const myCoords = await getMyLocation();
    const {
      current:
          { 
            weather_icons,
            weather_descriptions, 
            temperature, wind_speed
          },
          location: { 
            country, 
            name,
            lon, 
            lat }
          } = await getWeather(myCoords);
    addMyHistory ({ country, name, temperature, wind_speed, description: weather_descriptions[0]});
    setLocation (lat, lon, `${name}: ${temperature}&deg<img src="${weather_icons[0]}">`); 
    const currentHistory = getCurrentHistoryData();
    fillTable(currentHistory)
  } catch (err) {
    console.log(err)
  }
});

searchHistoryBtn.addEventListener('click', function () {
  searchHistoryTable.classList.toggle('active')
  searchHistoryBtn.classList.toggle('active');
});

clearSearchHistoryBtn.addEventListener('click', clearMyHistory); 

