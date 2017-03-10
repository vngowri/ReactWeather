var React = require('react');

// var About = React.createClass({
//   render: function() {
//
//   }
// });

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is a weather application built on React. I have built this
        for a complete webapp React developer</p>
      <p>
        Here are some of the tools I have used.
        <ul>
          <li>
            <a href="https://facebook.github.io/react">React</a> - This was the javascript framework used.
          </li>
          <li>
            <a href="http://Openweathermap.org">Open Weather Map</a> I use Open weather map to search by city name
          </li>
        </ul>
      </p>
    </div>
  );
}
module.exports = About;
