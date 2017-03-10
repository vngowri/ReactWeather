var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
      return (
        <div>
          <h1 className="text-center page-title"> Examples</h1>
          <p>Here are few example locations to try out:</p>
          <ol>
            <li>
              <Link to="/?location=dallas">Dallas, TX
              </Link>
            </li>
            <li>
              <Link to="/?location=rio">Rio, Brazil</Link>
            </li>
          </ol>
        </div>
    );
}

module.exports = Examples;
