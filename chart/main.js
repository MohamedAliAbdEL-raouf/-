let usersData;
async function getDataFromApi() {
    fetch('http://localhost:3000/alluser')
        .then(response => response.json())
        .then(data => {
            usersData = data
            console.log(usersData.firstAge);
            questionOne()
            questionTwo()
            age()
        })   
}
getDataFromApi()
function questionOne(){
    var chartExist = Chart.getChart("myChartOne"); // <canvas> id
    if (chartExist != undefined){ 
      chartExist.destroy();
    }
    else{
        
    const ctx = document.getElementById('myChartOne').getContext('2d');
    const myChartOne1 = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['نعم', 'لا', 'احيانا'],
            datasets: [{
                label: 'السؤال الاول',
                data: [usersData.yes, usersData.no, usersData.someTimes],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
    
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
    
                ],
                borderWidth: 1
            }]
        },
        options: {
            resposive: true
        }
    });

}
}

function questionTwo(){
    var chartExist = Chart.getChart("bar"); // <canvas> id
    if (chartExist != undefined){ 
      chartExist.destroy();
    }else{    const ctxTwo = document.getElementById('bar').getContext('2d');
    const myChartTwo = new Chart(ctxTwo, {
        type: 'bar',
        data: {
            labels: ['يقولون كلام ايجابي فقط', 'يفكرون في حل المشكله', 'ياجلون حل المشكله'],
            datasets: [{
                label: 'السؤال الثاني',
                data: [usersData.one, usersData.two, usersData.three],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
    
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
    
                ],
                borderWidth: 1
            }]
        },
        options: {
            resposive: true
        }
    });}

}

function age(){
    var chartExist = Chart.getChart("age"); // <canvas> id
    if (chartExist != undefined){ 
      chartExist.destroy();
    }else{    const ctxage = document.getElementById('age').getContext('2d');
    const age = new Chart(ctxage, {
        type: 'bar',
        data: {
            labels: ['العمر بين 18 - 25', 'العمر بين 26 - 40', 'العمر بين 41 - 65'],
            datasets: [{
                label: 'السن',
                data: [usersData.firstAge, usersData.secondAge, usersData.thirdAge],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
    
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
    
                ],
                borderWidth: 1
            }]
        },
        options: {
            resposive: true
        }
    });}

}
