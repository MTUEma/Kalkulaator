var hourly
var button

function setOcupation(id) {
    fetch('http://andmebaas.stat.ee/sdmx-json/data/PA633/'+ id +'.3.1/all?startTime=2014&endTime=2014')
    .then(response => {
        if (button == undefined) {
            button = document.getElementById(id)
        }
        window.button.style.backgroundColor = "#FFFCE7"
        button = document.getElementById(id)
        button.style.backgroundColor = "#8AE1FC"
        return response.json()
    })
    .then(data => {
        var hourly = data.dataSets[0].series;
        hourly = hourly[Object.keys(hourly)[0]]
        hourly = hourly[Object.keys(hourly)[1]]
        hourly = hourly[0]
        hourly = hourly[0].toFixed(2)
        
        var hrs = document.getElementById("hrs")

        hrs.innerHTML = hourly
        console.log(id)

    })
}
//window.onload = getValue

//document.getElementsByClassName("job").addEventListener("click", setOcupation(this.id))



