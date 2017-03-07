var React = require('react');

var WeatherMsg = ({temp, location}) => {  
  return (
    <h2> It is {temp} in {location}!</h2>
  );
}

module.exports = WeatherMsg;
