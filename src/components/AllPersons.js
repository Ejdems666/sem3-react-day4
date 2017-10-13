import React, {Component} from "react"

export default class AllPersons extends Component {
    constructor(props) {
        super(props);
        this.state = {persons: []}
        this.onEdit = this.onEdit.bind(this);
    }

    // personUpdater = (data) => {
    //     this.setState({persons: data});
    // }

    personUpdater = (data) => {
        this.setState({persons: this.state.persons.concat(data)});
    }

    onEdit(e) {
        e.preventDefault();
    }

    componentDidMount() {
        //Make sure you understand this part
        const facade = this.props.facade;
        facade.setPersonsObserver(this.personUpdater);
    }

    render() {
        return (
            <div>
                <table className="table">
                    <tbody>
                    {this.state.persons.map((person) =>
                        <tr key={person.id}>
                            <td>{person.name}</td>
                            <td>{person.age}</td>
                            <td>{person.gender}</td>
                            <td>{person.email}</td>
                            <td>(<a href="" onClick={this.onEdit} id={person.id}>edit</a>)</td>
                        </tr>
                    )}
                    </tbody>
                </table>
                <p>Please make me show all persons here in a table</p>
                <p>And update me when new are added </p>
            </div>
        )
    }
}