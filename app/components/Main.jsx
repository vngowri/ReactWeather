var React = require('react');
var Nav = require('Nav');


var Main = (props) => {
    return (
      <div>
        <Nav/>
        <h3> Main Component</h3>
        {props.children}
      </div>
    );
}
module.exports = Main;
