var source = $('#display-template').html();
var template = Handlebars.compile(source);

$(document).ready(function() {
  let request = new XMLHttpRequest();
  request.open('GET', 'http://api.spitcast.com/api/county/spots/san-diego/', true);
  request.responseType = 'text';
  var data = JSON.parse(this.responseText);
  console.log("spot:", data.spot_name);
  var context = {
    "beach" : data.spot_name,
    "temp" : data.temp,
    "swellDirection" : data.swell,
    //"minBH" : data.
    //"maxBH" :
    "tide" : data.tide,
    "windSpeed" : data.wind,
    "windDirection" : data.wind
  }
});
