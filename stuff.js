
function getValue() {
    fetch('http://andmebaas.stat.ee/sdmx-json/data/PA633/58.3.1/all?startTime=2014&endTime=2014')
    .then(response => {
        return response.json()
    })
    .then(data => {
        var hourly = data.dataSets[0].series;
        hourly = hourly[Object.keys(hourly)[0]]
        hourly = hourly[Object.keys(hourly)[1]]
        hourly = hourly[0]
        hourly = hourly[0]
        return hourly

    })
}
//window.onload = getValue

function setOcupation () {
    var id = document.get
}

