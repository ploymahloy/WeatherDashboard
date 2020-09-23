var APIKey = "0cab6337530678cba09e0300bc133675";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

var Seattle = 5809844;
var Dallas = 4684888;
var Charleston = 4574324;

var city = $("#search").val();

$(document).ready(function() {
  $(".search-btn").click(function(){
    var input = $("#search").val();
    console.log(input);
    searchCity(input);
    $(`<button class="city">${input}</button>`).appendTo("nav");
  });
  $(".search-btn").click(function(){
    console.log("icon-test");
    $("#icon").attr("src", "http://openweathermap.org/img/wn/10d@2x.png");
  });

  function searchCity(input) {
    $.ajax({
          url: "https://api.openweathermap.org/data/2.5/weather?q=" + input + "&appid=0cab6337530678cba09e0300bc133675",
          method: "GET"
        }).then(function(response) {
            console.log(response)
            if (history.indexOf(input) === -1) {
              history.push(input);
              window.localStorage.setItem("history", JSON.stringify(history));
            }
    });
  }
    const history = JSON.parse(window.localStorage.getItem("history")) || [];
})

// localstorage