// --------------------------------------------------------------------------------------
// ---
// ---
// ---
// --------------------------------------------------------------------------------------
// --- Copyright (c) 2015 Nils Hartmann (http://nilshartmann.net).
// -------------------------------------------------------------------------------------

class Header extends React.Component {
	render() {
		return <h1 className="grey-text text-darken-1">{this.props.text}</h1>;
	}
}

//var Header = React.createClass({
//	render: function () {
//		return (
//			<h1 className="grey-text text-darken-1">{this.props.text}</h1>
//		);
//	}
//});
//
//var HomePage = React.createClass({
//	render: function () {
//		return (
//			<div>
//				<Header text="org.eclipse.osgi.equinox"/>
//			</div>
//		);
//	}
//});
//
React.render(
	<Header text='org.eclipse.osgi.equinox' />,
	document.getElementById('homepage')
);