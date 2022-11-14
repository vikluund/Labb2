
// fetch('https://date.nager.at/api/v3/publicholidays/2025/SE')

//   .then((response) => response.json())

//   .then((result) => {

//     console.log(result)

//   })


// Get everything from DOM
// Get Input

let result = document.getElementById('result');

// Submit button

let button = document.querySelector('#submitButton');



function country() {
  let url = 'https://date.nager.at/api/v3/publicholidays/2022/'+country;
  let getCountry = document.querySelector('#country');
  let country = getCountry.value;

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
