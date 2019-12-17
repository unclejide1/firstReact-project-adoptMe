 //code will go here 
const Pet = () => {
    return React.createElement("div", {}, [
        React.createElement("h1",{}, "luna"),
        React.createElement("h2",{}, "Dog"),
        React.createElement("h1",{}, "Havanese"),
    ]);
}



 const App = () => {
    return React.createElement(
        "div",
        {id: "something-important"},
        [
            React.createElement("h1", {id: "something"}, "Adopt Me!"),
            React.createElement(Pet),
            React.createElement(Pet),
            React.createElement(Pet),
        ]
    );
}
ReactDOM.render(React.createElement(App), document.getElementById("root"));