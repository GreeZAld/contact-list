import React from 'react';
import ContactList from './ContactList';
import Modal from './Modal';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            conts: [],
            newName: "",
            newPhone: "",
            id: 0,
            show: false
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal(event) {
        this.setState(prevState => {
            return {
                show: !prevState.show
            }
        });
        this.setState({ newName: "", newPhone: "" });
        event.preventDefault();
      }

    handleNameChange(event) {
        this.setState({newName: event.target.value});
      }

    handlePhoneChange(event) {
        this.setState({newPhone: event.target.value});
      }

    handleSubmit(event) {
        this.setState(prevState => {
            return {
                id: prevState.id + 1,
                show: !prevState.show
            }
        });
        let newContacts = this.state.conts.concat({ name: this.state.newName, phone: this.state.newPhone, id: this.state.id });
        this.setState({ conts: newContacts});
        this.setState({ newName: "", newPhone: "" });
        console.log(this.state.show);
        event.preventDefault();
    }

    handleDelete = itemId => {
        let updatedConts = this.state.conts.filter(item => item.id !== itemId);
        this.setState({ conts: updatedConts });
        console.log(itemId);
    }

    render() {
        return (
            <div className="main-wrapper">
                <ContactList conts={this.state.conts} onDelete={this.handleDelete} />
                <Modal show={this.state.show} toggleModal={this.toggleModal}
                    value={{name: this.state.newName, phone: this.state.newPhone}}
                    handleNameChange={this.handleNameChange}
                    handlePhoneChange={this.handlePhoneChange}
                    onSubmit={this.handleSubmit}
                />
            </div>
        )
    }
}

export default Home;
