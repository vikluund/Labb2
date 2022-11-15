// fetch('https://avancera.app/cities/')
//   .then(response => response.json())
//   .then(result => {
//     console.log(result)
//   })


// fetch('https://avancera.app/cities/', {
//   body: '{ "name": "hej", "population": 123 }',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   method: 'POST'
// })
//   .then(response => response.json())
//   .then(result => {
//     console.log(result)
//   })

//   fetch('https://avancera.app/cities/3bdd9040-9ca5-486a-a146-dc3bf4408cb5', {
//   body: '{ "id": "3bdd9040-9ca5-486a-a146-dc3bf4408cb5", "name": "hej", "population": 1000 }',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   method: 'PUT'
// })
//   .then(response => {
//     console.log(response)
//   })

fetch('https://api.openbrewerydb.org/breweries')
.then((response) => response.json())
.then((result) => {
  const ctx = document.getElementById('myChart').getContext('2d');
  const data = [],
  labels = [];

  for(let n = 0; n < result.length; n++) {
    const holiday = result[n]

    data.push(holiday.phone)
    labels.push(holiday.name)
  }
  // console.log('data', data);
  // console.log('labels', labels);

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Phone Number',
        data: data,
        borderWidth: 1,
        backgroundColor: 'rgba(0, 0, 256, 0.1)'
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

})
