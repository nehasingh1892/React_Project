/*
var Search = React.createClass({
    getInitialState: function() {
        return { showResults: false };
    },
    onClick: function() {
        this.setState({ showResults: true });
    },
    render: function() {
        return (
            <div>
                <input type="submit" value="Search" onClick={this.onClick} />
                { this.state.showResults ? <Results /> : null }
            </div>
        );
    }
});

var Results = React.createClass({
    render: function() {
        return (
            <div id="results" className="search-results">
                Some Results
            </div>
        );
    }
});

ReactDOM.render( <Search /> , document.getElementById('container'));
}*/

import React from 'react';
import './checkstatus.css';

export default class CheckStatus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: this.props.todoText};

        this.handleChange = this.handleChange.bind(this);
        this.showTodo = this.showTodo.bind(this);
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    showTodo(todo) {
        this.props.showTodo(todo);
        this.setState({value: ''});

    }

    render() {
        return (
            <div>
               <button className="btn btn-primary margin-right10 width100" onClick={(e) => this.showTodo(this.state.value)}>All</button>
                <button className="btn btn-primary width100" onClick={() => this.showTodo(this.state.value)}>Completed</button>
            </div>
        );
    }
}

