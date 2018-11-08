import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
//Update button
// import UpdateBtn from "../../components/UpdateBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import {Input, TextArea, FormBtn } from "../../components/Form";

// import {Select} from "../../components/Form";
import "./Members.css";
  // <UpdateBtn onClick={() => this.updateMember(member._id)}>
// import Dropdown from '../../components/Dropdown';
// import Timestamp from 'react-timestamp';
// onClick={() => this.this.updateMember(member._id)}
import Footer from '../../components/Footer';
import ModalMember from '../../components/ModalMember';
import { Button, Form, FormGroup, Label } from 'reactstrap';



class Members extends Component {

  state = {
    members: [],
    member:"",
    payment: "",
    reason:"",
    description: "",
    id:""
  }
 

  componentDidMount() {
    this.loadMembers();
  }

  loadMembers = () => {
    API.getMembers()
      .then(res =>
        this.setState({ members: res.data, member: "", payment: "",reason: "", description: "" })
      )
      .catch(err => console.log(err));
  };
  onHandleChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};
  deleteMember = id => {
    API.deleteMember(id)
      .then(res => this.loadMembers())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleUpdate = event => {
    console.log(event);
    this.setState({
      id: event
    });
  };
  handleFormSubmit = event => {
    event.preventDefault();
    console.log('here')
    if (this.state.member && this.state.payment) {
      API.saveMember({
        member: this.state.member,
        payment: this.state.payment,
        reason: this.state.reason,
        description: this.state.description
      })
        .then(res => this.loadMembers())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
      <Container fluid>
    
        <Row>

          <Col size="md-6" >
            <Jumbotron>
              <h1>Members Login Form</h1>
            </Jumbotron>
            <Form>
        <FormGroup>    
          <Label for="member">Full Name</Label>
          <Input type="text" name="member" placeholder="Enter Full Name" 
          onChange={this.handleInputChange} 
          value={this.state.member}/>      
        </FormGroup>

        <FormGroup>    
          <Label for="payment">Payment Amount</Label>
          <Input type="number" name="payment" placeholder="Enter payment amount" 
          onChange={this.handleInputChange}
          value={this.state.payment}/>
        </FormGroup>
        
        <FormGroup>    
          <Label for="reason">Reason </Label>
          <Input type="text" name="reason" placeholder="Enter Reason" 
          onChange={this.handleInputChange}
          value={this.state.reason}/>
        </FormGroup>

        {/* <FormGroup>
          <Label for="Select">Select Item Type</Label>
          <Input type="select" name="type" onChange={this.handleChange} value={this.state.type}>
           <option></option>
            <option>Membership</option>
            <option>Donation</option>
          </Input>
        </FormGroup> */}

        <FormGroup>    
          <Label for="description">Description</Label>
          <Input type="text" name="description" placeholder="Enter payment description" 
          onChange={this.handleInputChange}
          value={this.state.description}/>
        </FormGroup>

       <FormBtn
                disabled={!(this.state.payment && this.state.member)}
                onClick={this.handleFormSubmit}
              >
                Submit
              </FormBtn>
      </Form>

          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Members</h1>
            </Jumbotron>
            {this.state.members.length ? (
              <List>
                {this.state.members.map(member => (
                  <ListItem key={member._id}>
                    <Link to={"/members/" + member._id}>
                      <strong>
                        {member.member}
                      </strong>
                    </Link>
               
                    <DeleteBtn onClick={() => this.deleteMember(member._id)} />  
                    <ModalMember itemId={member._id} member={member.member} payment={member.payment} reason={member.reason} description={member.description} />
                   
                    
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Member(s) to Display</h3>
            )}
          </Col>

        </Row>
      </Container>
        <Footer/>
        </div>

    );
  }
}

export default Members;
