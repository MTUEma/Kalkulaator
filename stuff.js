var i = 0
var hourly
var ocupation
var button
var selectedOcupationId
var total = 0

function getData() {
    fetch('http://andmebaas.stat.ee/sdmx-json/data/PA633/DBL213+DBL401+DBL415+57+58+70+DBL77+DBL85+DBL113+DBL114+DBL120+DBL245+DBL248+DBL252+DBL275+DBL285+DBL302+DBL313+DBL315+DBL343+DBL359+DBL272.3.1/all?startTime=2014&endTime=2014')
    .then(response => {
        return response.json()
    })
    .then(data => {
        const scroll = document.getElementById('scroll')
        var hourly = data.dataSets[0].series;
        var ocupation = data.structure
        ocupation = ocupation[Object.keys(ocupation)[3]]
        ocupation = ocupation[Object.keys(ocupation)[0]]
        ocupation = ocupation[0]
        ocupation = ocupation[Object.keys(ocupation)[3]]
        //console.log(scroll)
        hourly = Object.values(hourly)
        hourly.forEach(hourly => {            
            i = i+1
            var idCluster = ocupation[i]
            id = idCluster[Object.keys(idCluster)[0]]
            var name = idCluster[Object.keys(idCluster)[1]]
            //console.log(name)

            var button = document.getElementById(id)

            if (!button) {
                return
            }


            hourly = hourly[Object.keys(hourly)[1]]
            hourly = hourly[Object.keys(hourly)[0]]
            hourly = hourly[0]

            button.value = hourly
            button.name = name
            
            //console.log(button)
            //console.log(hourly)
        });

        ocupation.forEach(t => {
            
            ocupation = ocupation[Object.keys(ocupation)[0]]
            //console.log(t)
            //console.log(i)
        })
    })
}
window.onload = getData


function setOcupation(hourly, id) {
    var hrs = document.getElementById('hrs')
    hourly = parseFloat(hourly)
    hourly = hourly.toFixed(2)
    hrs.setAttribute("value", hourly)
    console.log(hourly)
    hrs.innerHTML = hourly + " €/h"
    
    if (button == undefined) {
        button = document.getElementById(id)
    }
    
    window.button.style.backgroundColor = "#FFFCE7"
    button = document.getElementById(id)
    button.style.backgroundColor = "#8AE1FC"

    selectedOcupationId = id

}



function calculate() {
    var getHoursValue = document.getElementById('hours').value
    var getPay = document.getElementById('hrs').getAttribute('value')
    var pay = parseFloat(getPay)
    var hours = parseFloat(getHoursValue)
    var sallary = pay * hours
    sallary = sallary.toFixed(2)
    console.log(sallary)

    var workPay = document.getElementById('total_amount')
    workPay.innerHTML = sallary + ' €'

    workPay.setAttribute('value', sallary)

}


function add() {
    calculate()
    var sallary = document.getElementById('total_amount').getAttribute('value')
    var getTotal = document.getElementById('total')
    sallary = parseFloat(sallary)
    total =  total + sallary
    console.log(total)

    getTotal.innerHTML = 'Kokku: ' + total.toFixed(2) + ' €'
    
    console.log(sallary)
    console.log(selectedOcupationId)
    

}