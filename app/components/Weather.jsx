var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMsg = require('WeatherMsg');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    }
  },
  handleSearch: function(location) {
    var that = this;    
    this.setState({isLoading: true});
    openWeatherMap.getTemp(location).then(function(temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function(errMsg) {
      alert('City not found');
      that.setState({
        isLoading: false
      });
    });
  },
  render: function() {
    var {isLoading, location, temp} = this.state;
    function renderMsg() {
      if ( isLoading) {
        return <h3> Fetching Weather...</h3>
      } else if (temp && location) {
        return <WeatherMsg location={location} temp={temp}/>
      }
    }
    return (
      <div>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMsg()}
      </div>
    );
  }
});

module.exports = Weather;
