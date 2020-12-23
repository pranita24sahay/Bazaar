import React,{Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody,Form, FormGroup, Input, Label } from 'reactstrap';


class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }
      handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();

    }
    render() {

        return(
            <div>
                <Button outline  className="bg-white" onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} fade={false}>
                <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                        <FormGroup>
                            <Label htmlFor="username">Username</Label>
                            <Input type="text" id="username" name="username"innerRef={(input) => this.username = input} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <Input type="password" id="password" name="password"innerRef={(input) => this.password = input}  />
                        </FormGroup>
                        <FormGroup check>
                        <div className="col-sm-1">
                                <Input type="checkbox" name="remember"innerRef={(input) => this.remember = input}  />
                                </div>
                            <Label check>
                                
                                <div className="col-sm-6 offset-sm-1">
                                <p>Remember Me</p></div>
                            </Label>
                        </FormGroup>
                        <Button type="submit" value="submit" color="primary">Login</Button>
                    </Form>
                </ModalBody>
            </Modal>
            </div>
        );
    }
}


export default Header;