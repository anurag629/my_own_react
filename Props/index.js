class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Greetings!</h1>
                <Hello to="Anurag" from="Aman" />
                <Hello to="Asad" from="Ankur" />

            </div>
        );
    }
}

ReactDOM.render(<App />,
    document.getElementById("root"));