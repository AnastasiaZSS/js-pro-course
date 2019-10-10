import  { fillTable } from './historyTable';
import  { addMyHistory, getCurrentHistoryData } from './searchHistory';
import getWeather from './getWeatherFunc';
import setLocation from './map'

const form = document.createElement('form');

const input = document.createElement('input');
input.classList.add('field');
input.setAttribute('placeholder', 'city');
input.setAttribute('type', 'text');

const submitBtn = document.createElement('input');
submitBtn.classList.add('btn');
submitBtn.setAttribute('type', 'submit');
submitBtn.setAttribute('value', 'find');

const span = document.createElement('span');
span.textContent = 'Type a city';

const errorMessage = document.createElement('div');
errorMessage.classList.add('error-message');

form.append(span);
form.append(input);
form.append(submitBtn);
form.append(errorMessage);

input.addEventListener('input', function () {
    if (this.classList.contains('red')) {
        this.classList.remove('red');
    }
    errorMessage.innerHTML = '';
})

form.addEventListener('submit', async function(e) {
    
    e.preventDefault();
  
    let cityName = input.value;
  
    if (cityName) {
      try {
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
              } =  await getWeather(cityName);
              console.log(name);
        addMyHistory ({ country, name, temperature, wind_speed, description: weather_descriptions[0]})
        setLocation (lat, lon, `${name}: ${temperature}&deg<img src="${weather_icons[0]}">`); 
        const currentHistory = getCurrentHistoryData();
        fillTable(currentHistory)
      } catch {
        errorMessage.innerHTML = 'incorrect city name';
      }
    } else {
      input.classList.add('red');
      errorMessage.innerHTML = 'type a city';
    }
  });
  

export default form;