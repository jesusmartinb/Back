const NodeGeocoder = require('node-geocoder');

const options = {
    provider: 'google',
    apiKey: 'AIzaSyALrejSQ9BfSzSSfpnOqgw30eyTQ2vGm3o' // for Mapquest, OpenCage, Google Premier
};
const geocoder = NodeGeocoder(options);
  

module.exports = {
    geocoder
};