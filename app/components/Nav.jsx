var React = require ('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
	return (
		<div className="top-bar">
			<div className="top-bar-left">
				<ul className="menu">
					<li className="menu-text">React Clock Application</li>
					<li>
						<IndexLink to="/" activeClassName="active">Timer</IndexLink>
					</li>
					<li>
						<Link to="/countdown" activeClassName="active">Countdown</Link>
					</li>
				</ul>
			</div>
			<div className="top-bar-right">
				<ul className="menu">
					<li className="menu-text">Made by</li>
					<li className="menu-text">
						<a href="https://github.com/Leksarus" target="_blank">Kamil Nawrocki</a>	
					</li>
				</ul>
			</div>
		</div>
	);
}

module.exports = Nav;