var APIKey = "0cab6337530678cba09e0300bc133675";
var city = $("#search").val();

$(document).ready(function() {
  $(".search-btn").click(function(){
    var input = $("#search").val();
    console.log(input);
    searchCity(input);
    $(`<button class="city" onclick="searchCity(${input})">${input}</button>`).appendTo("nav");
  });

  function searchCity(input) {
    $.ajax({
          url: "https://api.openweathermap.org/data/2.5/weather?q=" + input + "&appid=" + APIKey,
          method: "GET"
        }).then(function(response) {
            console.log(response);
            if (history.indexOf(input) === -1) {
              history.push(input);
              window.localStorage.setItem("history", JSON.stringify(history));
            }
          $("#city").html("<h3>" + response.name + " Weather Details</h3>");  
          $("#icon").attr("src", `http://openweathermap.org/img/wn/` + response.weather[0].icon + `@2x.png`);
          $(".temp").text("Temperature (F): " + Math.round((response.main.temp - 273.15) * 1.80 + 32) + "℉");
          $(".humidity").text("Humidity: " + response.main.humidity);
          $(".wind-speed").text("Wind Speed: " + response.wind.speed);
    $.ajax({
            url: "https://api.openweathermap.org/data/2.5/uvi?lat=" + response.coord.lat + "&lon=" + response.coord.lon + "&appid=" + APIKey,
            method: "GET"
          }).then(function(response) {
            console.log(response);
            $(".uv-index").text("UV Index: " + response.value);
            if (response.value < 5.01) {
              $(".uv-index").css("background-color", "#07F200");
            }
            else if (response.value > 8.99) {
              $(".uv-index").css("background-color", "red");
            }
            else {
              $(".uv-index").css("background-color", "yellow");
            }
    });
    $.ajax({  
          url: "https://api.openweathermap.org/data/2.5/forecast?q=" + input + "&appid=" + APIKey,
            method: "GET"
          }).then(function(response) {
            console.log(response);
            $("#day-1").html(
              "Date:" + response.list[0].dt_txt + "<br>" +
              "<img id='day-1-icon'>" + "<br>" +
              "Temp: " + Math.round((response.list[0].main.temp - 273.15) * 1.80 + 32) + "℉" + "<br>" +
              "Humidity: " + response.list[0].main.humidity
              );
            $("#day-1-icon").attr("src", "http://openweathermap.org/img/wn/" + `${response.list[0].weather[0].icon}` + "@2x.png");
            $("#day-2").html(
              "Date:" + response.list[0].dt_txt + "<br>" +
              "<img id='day-2-icon'>" + "<br>" +
              "Temp: " + Math.round((response.list[0].main.temp - 273.15) * 1.80 + 32) + "℉" + "<br>" +
              "Humidity: " + response.list[0].main.humidity
              );
            $("#day-2-icon").attr("src", "http://openweathermap.org/img/wn/" + `${response.list[1].weather[0].icon}` + "@2x.png");
            $("#day-3").html(
              "Date:" + response.list[0].dt_txt + "<br>" +
              "<img id='day-3-icon'>" + "<br>" +
              "Temp: " + Math.round((response.list[0].main.temp - 273.15) * 1.80 + 32) + "℉" + "<br>" +
              "Humidity: " + response.list[0].main.humidity
              );
            $("#day-3-icon").attr("src", "http://openweathermap.org/img/wn/" + `${response.list[2].weather[0].icon}` + "@2x.png");
              $("#day-4").html(
              "Date:" + response.list[0].dt_txt + "<br>" +
              "<img id='day-4-icon'>" + "<br>" +
              "Temp: " + Math.round((response.list[0].main.temp - 273.15) * 1.80 + 32) + "℉" + "<br>" +
              "Humidity: " + response.list[0].main.humidity
              );
            $("#day-4-icon").attr("src", "http://openweathermap.org/img/wn/" + `${response.list[3].weather[0].icon}` + "@2x.png");
            $("#day-5").html(
              "Date:" + response.list[0].dt_txt + "<br>" +
              "<img id='day-5-icon'>" + "<br>" +
              "Temp: " + Math.round((response.list[0].main.temp - 273.15) * 1.80 + 32) + "<br>" +
              "Humidity: " + response.list[0].main.humidity
              );
            $("#day-5-icon").attr("src", "http://openweathermap.org/img/wn/" + `${response.list[4].weather[0].icon}` + "@2x.png");
          });
      });
    }
    const history = JSON.parse(window.localStorage.getItem("history")) || [];
})