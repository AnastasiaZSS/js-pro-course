const getWeather = require('./getWeatherFunc');

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

form.appendChild(span);
form.appendChild(input);
form.appendChild(submitBtn);
form.appendChild(errorMessage);

input.addEventListener('input', function () {
    if (this.classList.contains('red')) {
        this.classList.remove('red');
    }
    errorMessage.innerHTML = '';
})

form.addEventListener('submit', async function(e) {
    
    e.preventDefault();

    let cityName = input.value;

    if (!cityName) {
        input.classList.add('red');
        errorMessage.innerHTML = 'type a city';
        return;
    }

    getWeather(cityName);

});

module.exports = { form, errorMessage }