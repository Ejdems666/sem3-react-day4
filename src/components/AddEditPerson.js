import React, {Component} from "react"

export default class AddEditPerson extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;

      this.setState({
          [name]: value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.facade.addPerson(this.state);
  }

  render() {
    return (
      <div>
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label className="control-label col-sm-3">Id:</label>
            <div className="col-sm-9">
              <input onChange={this.handleInputChange} className="form-control" readOnly id="id" name="id" />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3" htmlFor="name">Name:</label>
            <div className="col-sm-9">
              <input onChange={this.handleInputChange} className="form-control" id="name" name="name" placeholder="Enter Name" />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3" htmlFor="age">Age:</label>
            <div className="col-sm-9">
              <input onChange={this.handleInputChange} type="number" className="form-control" name="age" id="age" placeholder="Enter age" />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3" htmlFor="email">Email:</label>
            <div className="col-sm-9">
              <input onChange={this.handleInputChange} type="email" className="form-control" id="email" name="email" placeholder="Enter email" />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3" htmlFor="pwd">Gender:</label>
            <div className="col-sm-9">
              <input onChange={this.handleInputChange} className="form-control" id="gender" name="gender" placeholder="Enter Gender" />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-3 col-sm-9">
              <button type="submit" className="btn btn-default">Submit</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}