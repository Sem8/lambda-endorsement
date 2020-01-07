// basic promise

// const myPromise = new Promise((resolve, reject) => {
//     console.log('Start of the promise executor fn()');
//     setTimeout(() => {
//         // resolve('this took 2 seconds');     // won't return anything except: Promise { <pending>}
//         // console.log('2 seconds have passed');   // prints as very last statement
//         const weather = 'toronto is cold';
//         // return weather;
//         // resolve(weather);
//         reject(weather);
//     }, 2000);
//     console.log('The end of the promise')
// }).then((resolvedValue) => {
//     console.log(resolvedValue);
// }).catch(rejectedValue => {
//     console.log('rejected: ', rejectedValue);
// })

// console.log(myPromise);

// Promises with API calls

const axios = require("axios");

const apikey = "6486085a849f33ab16d294ebe45ac73d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

// console.log('start the request');

// let url = `${apiUrl}?q=${"toronto"}&APPID=${apikey}&units=metric`;
// const torontoPromise = axios.get(url);
// url = `${apiUrl}?q=${"los angeles"}&APPID=${apikey}&units=metric`;
// const laPromise = axios.get(url);
// url = `${apiUrl}?q=${"miami"}&APPID=${apikey}&units=metric`;
// const miamiPromise = axios.get(url);
// url = `${apiUrl}?q=${"houston"}&APPID=${apikey}&units=metric`;
// const houstonPromise = axios.get(url);

// Promise All
// Promise.all([torontoPromise, laPromise, miamiPromise, houstonPromise]).then((values) => {
// values.map((city) => {
//         const jsonBody = city.data;
//         console.log(jsonBody.main.temp);
//     })
// }).catch(err => console.log(err));

// const weatherRequestPromise = axios.get(url);

// // console.log(weatherRequestPromise);  // returns ugly long Json data with lots of obscure methods
// let torontoWeather;
// weatherRequestPromise.then(response => {
//     // console.log(data.data.main.temp);
//     const jsonBody = response.data;
//     torontoWeather = jsonBody.main.temp;
//     // console.log('Toronto');
//     // console.log(torontoWeather);
//     return torontoWeather;
// }).then((torontoWeatherII) => {
//     console.log('Toronto');
//     console.log(torontoWeatherII);

//     // let's call weather with LA
//     url = `${apiUrl}?q=${"los angeles"}&APPID=${apikey}&units=metric`;
//     return axios.get(url);
// }).then((laPromise) => {
//     const jsonBody = laPromise.data;
//     const laWeather = jsonBody.main.temp;
//     console.log('LA');
//     console.log(laWeather);
// });
// // catch(error => {
// //     console.log(error.response.status);
// // });

// console.log(weatherRequestPromise);

// Make above Promise code more DRY
// console.log("start the request");
// const getWeather = city => {
//   let url = `${apiUrl}?q=${city}&APPID=${apikey}&units=metric`;

//   axios.get(url).then(response => {
//       const jsonBody = response.data;
//       const weather = jsonBody.main.temp;
//       return weather;
//     }).then(weatherII => {
//       console.log(city);
//       console.log(weatherII);
//     });
// };

// getWeather('toronto');
// getWeather('los angeles');
// getWeather('miami');


// Async/Await

// Any function with async attached will return a promise
console.log("start the request");
const getWeather = async city => {
  let url = `${apiUrl}?q=${city}&APPID=${apikey}&units=metric`;

  // await Promise - await expects there's a promise right after it and wait for this promise to get resolved or rejected
  // equivalent to .then()
  const response = await axios.get(url);
  // await has guaranteed that Promise has been resolved
  const jsonBody = response.data;
  const weather = jsonBody.main.temp;
  // console.log(city);
  // console.log(weather);
  // return response;
  return weather;  // Doesn't work won't return toronto weather, function won't end
};


/* Same way to write above async/await code but with Promise */
// const getWeather = new Promise(() => {
//     let url = `${apiUrl}?q=${city}&APPID=${apikey}&units=metric`;
//     return (axios.get(url));
//   }).then((response) => {
//     const jsonBody = response.data;
//     const weather = jsonBody.main.temp;
//     console.log(city);
//     console.log(weather);
//     // return response;
//     // return weather;
//   });

// getWeather('toronto');
// getWeather('los angeles');
// getWeather('miami');

const compareWeather = async () => {
    // let torontoWeather;
    // let laWeather;
    // let miamiWeather;

    // getWeather('toronto').then(res => {
    //     torontoWeather = res;
    // });
    // getWeather('los angeles').then(res => {
    //     laWeather = res;
    // });
    // getWeather('miami').then(res => {
    //     miamiWeather = res;
    // });

    let torontoWeather = await getWeather('toronto');
    let laWeather = await getWeather('los angeles');
    let miamiWeather = await getWeather('miami');
    console.log(torontoWeather, laWeather, miamiWeather);
    
};

compareWeather();
