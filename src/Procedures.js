import React, { Component } from 'react';

class Procedures extends Component {
    render() {
        const proceduresList = this.props.procedures.map((p, idx) => {
            return <li key={idx}>{p}</li>
        });
        // console.log(this.props.procedures)
        return (
            <div>
                <h1>Procedures</h1>
                {proceduresList}
            </div>
        )
    }
}

export default Procedures;