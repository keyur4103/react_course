import React from 'react';

class Mycmp extends React.Component {
    state = {
        first: "loading..",
        second: "loading..",
        third: "loading..",
        fourth: "loading..",
        finished: "loading done..",
    };

    constructor() {
        super();
        setTimeout(() => {
            this.setState({ first: "done.." });
        }, 1000);
        setTimeout(() => {
            this.setState({ second: "done.." });
        }, 2000);
        setTimeout(() => {
            this.setState({ third: "done.." });
        }, 3000);
        setTimeout(() => {
            this.setState((state) =>({
                ...state,
                fourth : state.finished,
                first : "100%",
                second : "100%",
                third : "100%"
            }));
        },4000);
    }

    render() {
        return (
            <ul>
                {Object.keys(this.state)
                    .filter((key) => key !== "finished")
                    .map((key) => (
                        <li key={key}>
                            <p>
                                {key} : {this.state[key]}
                            </p>
                        </li>
                    ))}
            </ul>
        );
    }
}

export default Mycmp;
