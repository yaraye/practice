import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      member: {}
    };
  }

//   componentDidMount() {
//     axios.get('/api/member/'+this.props.match.params.id)
//       .then(res => {
//         this.setState({ member: res.data });
//         console.log(this.state.member);
//       });
//   }

  onChange = (e) => {
    const state = this.state.member
    state[e.target.name] = e.target.value;
    this.setState({member:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const {member, payment, reason, description} = this.state.member;
    axios.put('/api/member/'+this.props.match.params.id, { member, payment, reason, description})

      .then((result) => {
        this.props.history.push("/show/"+this.props.match.params.id)
      });
  }

  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-payment">
              EDIT member
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to={`/show/${this.state.member._id}`}><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span> member List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label for="member">Full Name:</label>
                <input type="text" className="form-control" name="member" value={this.state.member} onChange={this.onChange} placeholder="member" />
              </div>
              <div className="form-group">
                <label for="payment">Payment Amount:</label>
                <input type="text" className="form-control" name="payment" value={this.state.member.payment} onChange={this.onChange} placeholder="payment" />
              </div>
              <div className="form-group">
                <label for="reason">reason:</label>
                <input type="text" className="form-control" name="reason" value={this.state.member.reason} onChange={this.onChange} placeholder="reason" />
              </div>
              <div className="form-group">
                <label for="description">Description:</label>
                <input type="text" className="form-control" name="description" value={this.state.member.description} onChange={this.onChange} placeholder="Description" />
              </div>
              
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;