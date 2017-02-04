var React = require('react');

var CountdownForm = React.createClass ({
	onSubmit: function(e) {
		e.preventDefault();
		var strSeconds = this.refs.seconds.value;

		if (strSeconds.match(/^[0-9]*$/) && strSeconds !== "") {
			this.refs.error.innerHTML = '';
			this.refs.seconds.value = '';
			this.props.onSetCountdown(parseInt(strSeconds, 10));
		} else if (this.refs.error.innerHTML !== "") {
			this.refs.error.innerHTML = 'Please enter proper value. Only numbers allowed';
		} else {
			this.refs.error.innerHTML = 'Please enter number in text area.';
		}
	},
	render: function() {
		return (
			<div>
				<form ref="form" onSubmit={this.onSubmit} className="countdown_form small-centered medium-6 large-4 centered">
					<input type="text" ref="seconds" placeholder="Enter time in seconds" />
					<div className="error" ref="error"></div>
					<button className="button expanded">Start</button>
				</form>
			</div>
		)
	}
});

module.exports = CountdownForm;