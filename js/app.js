// --------------------------------------------------------------------------------------
// ---
// ---
// ---
// --------------------------------------------------------------------------------------
// --- Copyright (c) 2015 Nils Hartmann (http://nilshartmann.net).
// -------------------------------------------------------------------------------------

var Header = React.createClass({
	render: function () {
		return (
			<h1 className="title">{this.props.text}</h1>
		);
	}
});

var HomePage = React.createClass({
	render: function () {
		return (
			<div>
				<Header text="Employee Directory"/>
			</div>
		);
	}
});

React.render(
	<HomePage />,
	document.getElementById('homepage')
);