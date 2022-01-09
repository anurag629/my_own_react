class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hi Inside </h1>
                <Machine s1="X" s2="Y" s3="Z" />
                <Machine s1="X" s2="X" s3="X" />
                <Machine s1="X" s2="X" s3="Y" />
                <Machine s1="Z" s2="Z" s3="Z" />
            </div>
        );
    }
}

ReactDOM.render(<App />,
    document.getElementById("root"));