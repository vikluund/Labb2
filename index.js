
// fetch('https://date.nager.at/api/v3/publicholidays/2025/SE')

//   .then((response) => response.json())

//   .then((result) => {

//     console.log(result)

//   })


// Get everything from DOM
// Get Input

let result = document.getElementById('results');

// Submit button

let button = document.querySelector('#btn');





function country() {

  let selectCountry = document.querySelector('#country');
  let country = selectCountry.value;

  let url = 'https://date.nager.at/api/v3/publicholidays/2022/'+ country;



  fetch(url)
  .then(response => response.json())
  .then((data) => {
    data.forEach(holiday => {
      result.innerHTML += `

      <div class="result">
      <table class="table">
      <thead>
        <tr>
          <th>Holiday</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>${holiday.name}</td>
          <td>${holiday.date}</td>
        </tr>
      </tbody>
      </table>
      </div>

      `
    })
  })
}

button.addEventListener('click', event => {
  event.preventDefault();
  country();
});

let selectCountry = document.querySelector('#country');
selectCountry.addEventListener('input', () => {

  result.innerHTML = ``
});


fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
.then((response) => response.json())
.then((result) => {
  const ctx = document.getElementById('myChart').getContext('2d');
  const data = [],
  labels = [];

  for(let n = 0; n < result.length; n++) {
    const holiday = result[n]

    data.push(holiday.Population)
    labels.push(holiday.Year)
  }
  console.log('data', data);
  console.log('labels', labels);
})


  // CHART JS

  // const ctx = document.getElementById('myChart');

  // new Chart(ctx, {
  //   type: 'bar',
  //   data: {
  //     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  //     datasets: [{
  //       label: '# of Votes',
  //       data: [12, 19, 3, 5, 2, 3],
  //       borderWidth: 1
  //     }]
  //   },
  //   options: {
  //     scales: {
  //       y: {
  //         beginAtZero: true
  //       }
  //     }
  //   }
  // });
