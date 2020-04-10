// THIS GETS ME ONE USERS ACCOUNT WITH ALL REPOS IN JSON.
function getAccount() {
    const data_list = [];
    // Add user name to change accounts - Figure out how to loop over a list of students
    const url = `https://api.github.com/users/Carlock1609/repos?type=owner`

    axios.get(url)
    .then(request => {
        data_list.push(request.data[12].pushed_at)
    })
    .catch(error => console.log(error))
    return data_list;
}
// This is returning an object
let get_pushed_data = getAccount();


// for(let i = 0; i < get_pushed_data.length; i++) {
//     console.log(get_pushed_data[i])
// }

// console.log(get_pushed_data)
// const pushed_date = document.querySelectorAll('#pushed_date')

// for(let i = 0; i < pushed_date.length; i++) {
//     pushed_date.innerHTML = get_pushed_data;
// }
// JSON.stringify(get_pushed_data)
// let new_data = get_pushed_data.pop()
// console.log(new_data)
// for(let i of get_pushed_data) {
//     console.log(i)
// }


// let new_data = JSON.parse(get_pushed_data)
// console.log(new_data)

// (function() {
//     const url = "https://jsonplaceholder.typicode.com/posts/"
//     axios.get(url)
//     .then(request => console.log(request.data))
//     .catch(error => console.log(error))
// })()

//CHUCK NORRIS JOKES
// (function() {
//     const url = "https://api.icndb.com/jokes/random"
//     axios.get(url, {
//         params: {
//             limitTo: "[nerdy]",
//         }
//     })
//     .then(request => console.log(request.data))
//     .catch(error => console.log(error))
// })()


// VERSION 1 DONE
// let quote = document.querySelector("#quote")
// let footer = document.querySelector("footer")
// let reset = document.querySelector("a")

// function findData() {
//     (function() {
//         const url = "https://favqs.com/api/qotd"
//         axios.get(url)
//             .then(request =>  getData(request))
//             .catch(error => console.log(error))
//     })()
// }

// function getData(request) {
//     quote.textContent = request.data.quote.body
//     footer.textContent = request.data.quote.author
// }

// findData()
// reset.addEventListener("click", function() {
//     findData()
// })


// let quotes = []
// let authors = []
// let div = document.getElementById("quote")
// let footer = document.querySelector("footer")
// let start = document.querySelector("a")

// function getData(userInput) {
//     const url = 'https://favqs.com/api/quotes?filter=' + userInput
    
//     axios.get(url, {
//         headers: {
//             'Authorization': `Token token="ADD API KEY HERE"`
//         }
//     })
//     .then(request => {
//         getBody(request)
//     })
//     .catch(error => console.log(error))
// } 

// function getBody(request) {
//     for(let quote of request.data.quotes) {
//         let addBody = quote.body
//         let addAuthor = quote.author
//         authors.push(addAuthor)
//         quotes.push(addBody)
    
//     }
//     let x = Math.floor(Math.random() * quotes.length)
//     div.textContent = quotes[x]
//     footer.textContent = authors[x]

// }

// start.addEventListener("click", function() {
//     let userInput = prompt("Enter in a WORD to get related QUOTES.")
//     getData(userInput)
// })

// DONT COMMIT API KEYS

// // map
// let mymap = L.map('mapid', {
//     worldCopyJump: true,
// })
// .setView([0, 0], 3);

// L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${keyMapbox}`, {
// attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
// maxZoom: 18,
// id: 'mapbox/streets-v11',
// accessToken: "your.mapbox.access.token"
// }).addTo(mymap);

// // figure out what fetch is?
// function getData() {
// const url = 'https://jsonplaceholder.typicode.com/users'

// axios.get(url)
// .then(request => 
//     getLists(request))

// .catch(error => console.log(error))
// } 

// // WEATHER API FEATURE
// // function getWeatherData(lat, lon) {
// //     const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${keyWeatherAPI}`

// //     axios.get(url)
// //     .then(request => {
// //         console.log(request.data.main.temp)
// //     })
// //     .catch(error => console.log(error))
// // }

// // JSONPLACEHOLDER EXAMPLES
// function getLists(request) {
// let coord = []
// for(let ele of request.data) {
//     let addCoord = [ele.address.geo.lat, ele.address.geo.lng]
//     let addName = ele.name
//     let addStreet = ele.address.street
//     let addSuite = ele.address.suite
//     let addCity = ele.address.city
//     let addZipcode = ele.address.zipcode
//     let addEmail = ele.email
//     let addUsername = ele.username

//     let marker = L.marker(addCoord).addTo(mymap);
//         marker.bindPopup(`
//             ${addName}<br><br>
//             ${addStreet}<br><br>
//             ${addSuite}<br><br>
//             ${addCity}<br><br>
//             ${addZipcode}
//             `);
//     coord.push(addCoord)

//     let newList = document.querySelector("ul");
//     let newEle = document.createElement("li");

//     newEle.appendChild(document.createTextNode(`Name: ${addName} | Username: ${addUsername} | Email: ${addEmail}`));
//     newList.appendChild(newEle);
// }

// }

// function main() {
// getData()
// }
// main()
