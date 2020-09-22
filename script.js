var APIKey = "0cab6337530678cba09e0300bc133675";
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?id=" + "5809844" + "&APPID=" + APIKey;

var Seattle = 5809844;
var Dallas = 4684888;
var Charleston = 4574324;



$.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        console.log(response)
});