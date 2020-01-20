const request = require("request");

const apikey = "6486085a849f33ab16d294ebe45ac73d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
let url = `${apiUrl}?q=${"toronto"}&APPID=${apikey}&units=metric`;

/* Unknown whether LA or Toronto weather will return first. It's arbitrary */
console.log('Start the request');
// const weather = request(url);   // returns a long ugly json data
// console.log(weather);
let torontoWeather;
let laWeather;
request(url, (error, response, body) => {
    console.log('this is third');
    // console.log(body);
    const jsonBody = JSON.parse(body);
    // const torontoWeather = jsonBody.main.temp;
    torontoWeather = jsonBody.main.temp;
    console.log('Toronto');
    console.log(torontoWeather); // If LA weather returns first, will log both LA and Toronto weathers
    console.log(laWeather);     // will say undefined if Toronto weather returns from server first
});

url = `${apiUrl}?q=${'los angeles'}&APPID=${ apikey }&units=metric`;
request(url, (error, response, body) => {
    console.log('this is third');
    // console.log(body);
    const jsonBody = JSON.parse(body);
    // const laWeather = jsonBody.main.temp;
    laWeather = jsonBody.main.temp;
    console.log('LA');
    console.log(laWeather);
    console.log(torontoWeather);    // will say undefined if LA weather returns from server first
});
console.log('written after weather is fetched, but second');    // happens 2nd instead of third b/c of callback from weather api server


/* Now we'll always finish with Toronto, then make another request for LA weather then finish with LA weather */
/* But creates callback hell */
console.log("Start the request");
let torontoWeather;
let laWeather;

setTimeout(() => {
  console.log('Happens after 2 seconds');
}, 2000);

request(url, (error, response, body) => {
  console.log("this is third");
  // console.log(body);
  const jsonBody = JSON.parse(body);
  // const torontoWeather = jsonBody.main.temp;
  torontoWeather = jsonBody.main.temp;
  console.log("Toronto");
  console.log(torontoWeather); // If LA weather returns first, will log both LA and Toronto weathers

  // fetch LA weather here
  url = `${apiUrl}?q=${"los angeles"}&APPID=${apikey}&units=metric`;
  request(url, (error, response, body) => {
    console.log("this is third");
    // console.log(body);
    const jsonBody = JSON.parse(body);
    // const laWeather = jsonBody.main.temp;
    laWeather = jsonBody.main.temp;
    console.log("LA");
    console.log(laWeather);
    console.log(torontoWeather); // will say undefined if LA weather returns from server first

    // fetch Miami weather here
    url = `${apiUrl}?q=${"miami"}&APPID=${apikey}&units=metric`;
    request(url, (error, response, body) => {
      console.log("this is third");
      // console.log(body);
      const jsonBody = JSON.parse(body);
      // const laWeather = jsonBody.main.temp;
      miamiWeather = jsonBody.main.temp;
      console.log("Miami");
      console.log(miamiWeather);
      console.log(torontoWeather); // will say undefined if LA weather returns from server first

      // fetch Houston weather here
      url = `${apiUrl}?q=${"houston"}&APPID=${apikey}&units=metric`;
      request(url, (error, response, body) => {
        console.log("this is third");
        // console.log(body);
        const jsonBody = JSON.parse(body);
        // const laWeather = jsonBody.main.temp;
        houstonWeather = jsonBody.main.temp;
        console.log("Houston");
        console.log(houstonWeather);
        console.log(torontoWeather); // will say undefined if LA weather returns from server first
      });
    });
  });
});

console.log("written after weather is fetched, but second"); // happens 2nd instead of third b/c of callback from weather api server
console.log(laWeather);
console.log(torontoWeather);
