const searchHistoryTable = document.createElement('table');
const searchHistoryTableBody = document.createElement('tbody');
searchHistoryTable.classList.add('search-history-table');
searchHistoryTable.innerHTML = '<thead><tr><th>City</th><th>Country</th><th>t, &degC</th><th>wind speed, m/s</th><th>description</th></tr></thead>';
searchHistoryTable.append(searchHistoryTableBody);

function fillTable (data) {
  searchHistoryTableBody.innerHTML = '';
  data.forEach(obj => {
    let tr = `<tr><td>${obj.name}</td><td>${obj.country}</td><td>${obj.temperature}</td><td>${obj.wind_speed}</td><td>${obj.description}</td></tr>`;
    searchHistoryTableBody.innerHTML += tr;
  })
}

export { searchHistoryTable, fillTable };