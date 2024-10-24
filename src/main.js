import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import marsPhotos from './js/mars';
import 'animate.css';

// console.log(process.env.API_KEY)
function getElements(response){
    if (response.photos){
        $('.img1').html(`<img src = ${response.photos[0].img_src} style="height:500px; width:600px;">`);
    }
    else {
        $('.showErrors').text(`There was an error: ${response.message}`);
      }
}
function getSecondElements(response){
    if (response.photos){
        $('.img2').html(`<img src = ${response.photos[0].img_src} style="height:500px; width:600px;">`);
    }
    else {
        $('.showErrors').text(`There was an error: ${response.message}`);
      }
}

function picutreOfTheDay(response){
    if (response){
        $('.date').html(` ${response.date} `);
        $('.explanation').html(` ${response.explanation} `);
        $(".picture").html(`<img src = ${response.hdurl} style="height:100vh; width:1240px;">`)
    }
    else{
        $('.showErrors').text(`There was an error: ${response.message}`);
    }

}
function getWeather(response){
    if(response){
    $('.min-temp').html(` <span> The minimum temperature is ${response.min_temp}k </span>`);
    $('.max-temp').html(`<span> The maximum temperature is ${response.max_temp}k </span> `);
    $ ('.pressure').html(`<span> The pressure is ${response.pressure}Pa </span>`);
    $('.condition').html(`<span> The weather right now is ${response.atmo_opacity} </span>`);
    $('.sunrise').html(`<span> The time for sunrise is ${response.sunrise}am </span>`);

    $('.sunset').html(`<span> The time for sunset is ${response.sunset} </span>`);
    } else {
        $('.showErrors').text(`There was an error: ${response.message}`);
    }
}
$(document).ready(function(){
    marsPhotos.getWeather()
    .then(function(response){
        getWeather(response)
    })
    marsPhotos.roverPicture()
    .then(function(response){
        getElements(response)
    })
    marsPhotos.secondRoverPicture()
    .then(function(response){
        getSecondElements(response)
    })
    marsPhotos.picutreOfTheDay()
    .then(function(response){
        picutreOfTheDay(response)
    })

})