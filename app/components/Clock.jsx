var React = require('react');

var Clock = React.createClass({
	getDefaultProps: function() {
		totalSeconds: 0
	},
	propTypes: {
		totalSeconds: React.PropTypes.number
	},
	formatSeconds: function(totalSeconds) {
		var minutes = Math.floor(totalSeconds/60);
		var seconds = totalSeconds % 60;

		var formatted = ((arr) => {
			arr.forEach((el, index, array) => {
				if (el < 10) {
					el = '0' + el;
				}
				array[index] = el;
			});
			return arr;
		})([minutes, seconds]).join(':');
		return formatted;
	},

	render: function() {
		var {totalSeconds} = this.props;

		return (
			<div className="clock">
				<span className="clock-text">
					{this.formatSeconds(totalSeconds)}
				</span>
			</div>
		)
	}
});

module.exports = Clock;