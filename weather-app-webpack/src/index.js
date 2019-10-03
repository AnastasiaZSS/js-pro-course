import css from '../public/style.css';

const script = document.querySelector('script');

const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.insertBefore(wrapper, script);

const main = document.createElement('div');
main.classList.add('main');
wrapper.appendChild(main);

const mapEl = document.createElement('div');
mapEl.setAttribute('id', 'map');
main.appendChild(mapEl);

const { form } = require('./searchForm');
const { searchHistoryTable, fillTable } = require('./historyTable')
const getMyWeather = require('./myWeather');
const { clearMyHistory } = require('./searchHistory')
 
wrapper.insertBefore(form, main);

const myWeather = document.createElement('div');
myWeather.classList.add('my-weather');
main.appendChild(myWeather);

const myWeatherBtns = document.createElement('div');
myWeatherBtns.classList.add('my-weather-buttons');
myWeather.appendChild(myWeatherBtns);

const getMyWeatherBtn = document.createElement('button');
getMyWeatherBtn.classList.add('get-my-weather');
getMyWeatherBtn.classList.add('btn');
getMyWeatherBtn.textContent = 'Get the weather in my town';
myWeatherBtns.appendChild(getMyWeatherBtn);

const searchHistoryBtn = document.createElement('button');
searchHistoryBtn.classList.add('search-history');
searchHistoryBtn.classList.add('btn');
searchHistoryBtn.textContent = 'Search history';
myWeatherBtns.appendChild(searchHistoryBtn);

const clearSearchHistoryBtn = document.createElement('button');
clearSearchHistoryBtn.classList.add('clear-search-history');
clearSearchHistoryBtn.classList.add('btn');
clearSearchHistoryBtn.textContent = 'Clear history';
myWeatherBtns.appendChild(clearSearchHistoryBtn);

myWeather.appendChild(searchHistoryTable);

getMyWeatherBtn.addEventListener('click', function (e) {
  e.preventDefault();
  getMyWeather();
});

searchHistoryBtn.addEventListener('click', function () {
  searchHistoryTable.classList.toggle('active')
  searchHistoryBtn.classList.toggle('active');
});

clearSearchHistoryBtn.addEventListener('click', clearMyHistory); 
