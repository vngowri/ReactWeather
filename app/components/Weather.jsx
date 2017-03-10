var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMsg = require('WeatherMsg');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false,
      errorMessage: undefined
    }
  },
  handleSearch: function(location) {
    var that = this;
    this.setState({
      isLoading: true,
      errorMessage: undefined
    });
    openWeatherMap.getTemp(location).then(function(temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function(errMsg) {
      that.setState({
        isLoading: false,
        errorMessage: errMsg
      });
    });
  },
  render: function() {
    var {isLoading, location, temp, errorMessage} = this.state;
    function renderMsg() {
      if ( isLoading) {
        return <h3 className="text-center"> Fetching Weather...</h3>
      } else if (temp && location) {
        return <WeatherMsg location={location} temp={temp}/>
      }
    }

    function renderError() {
      if ( typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }
    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMsg()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
