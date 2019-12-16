const Pet = ({name, animal, breed}) => {
	return React.createElement("div", {} ,[
		React.createElement("h1", {}, name),
		React.createElement("h2", {}, animal),
		React.createElement("h2", {}, breed),
	]);
};

const App = () => {
	return React.createElement(
		"div",
		{},
		[
			React.createElement("h1", {}, "Adopt Me!"),
			React.createElement(Pet, {"name": "Luna", "animal": "Dog", "breed": "German Shorthaired Pointer"}),
			React.createElement(Pet, {"name": "Pumba", "animal": "Dog", "breed": "Poodle"}),
			React.createElement(Pet, {"name": "Missy", "animal": "Cat", "breed": "A dumb one"})
		]
	);
};

ReactDOM.render(
	React.createElement(App),
	document.getElementById("root")
)