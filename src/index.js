const form = document.getElementById('form')

form.addEventListener('submit', (event) => {
  event.preventDefault()

  const emailValue = document.getElementById("email").value
  const passwordValue = document.getElementById("password").value

  fetch("https://reqres.in/api/register", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({"email": emailValue, "password": passwordValue})
  })
    .then(response => response.json())
    .then((data) => {
      console.log(data)
    })

})



const search = document.querySelector('#search')
const results = document.getElementById('results')
const nameInput = document.getElementById('movie-name')

search.addEventListener('submit', (event) => {
  event.preventDefault();

  const movieName = nameInput.value
  const url = `https://www.omdbapi.com/?apikey=adf1f2d7&s=${movieName}`

  fetch(url)
    .then(response => response.json())
    .then((data) => {
      results.innerHTML = ''
      data.Search.forEach((movie) => {
        // console.log(movie.Title)

        const result = `<li>
                          <img src='${movie.Poster}' class='small-img'>
                          <p>${movie.Title} (${movie.Year})</p>
                        </li>`

        results.insertAdjacentHTML('beforeend', result)
      })
    })
})







// const fullname = (first, last) => {
//   return `${first} ${last}`
// }

// def fullname(first, last)
//   "${first} #{last}"
// end
