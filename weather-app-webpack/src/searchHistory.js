let { fillTable } = require('./historyTable');
let myHistoryData = [];
(function init () {
    if (localStorage.getItem('myHistoryData')) {
    myHistoryData = JSON.parse(localStorage.getItem('myHistoryData'));
    }
    fillTable(myHistoryData);
})();

function clearMyHistory () {
    localStorage.removeItem('myHistoryData');
    myHistoryData = [];
    console.log(myHistoryData);
    fillTable(myHistoryData);
}

function addMyHistory (newItem) {
    checkUniqueKey(myHistoryData, newItem);
    localStorage.setItem('myHistoryData', JSON.stringify(myHistoryData));
    console.log(myHistoryData)
    fillTable(myHistoryData);
}

function checkUniqueKey (arr, newItem) {
    let needToPush = true;
    arr.forEach((item, i) => {
        if (item.name === newItem.name) {
        arr.splice(i, 1, newItem);
        needToPush = false;
        }
    });
    if (needToPush) {
        arr.push(newItem);
    }
};

module.exports = { addMyHistory, myHistoryData, clearMyHistory };