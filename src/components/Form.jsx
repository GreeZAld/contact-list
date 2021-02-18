import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import formConfig from '../formConfig/formConfig.json';

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
      if(event.target.name === "Name") {
        this.props.handleNameChange(event);
      }
      else if(event.target.name === "Phone") {
        this.props.handlePhoneChange(event);
      }
    }

    render() {
      return (
        <form onSubmit="return false" className="contact-form">
          <label>
            <TextField type="string" label="Name" value={this.props.value.name} name="Name" onChange={this.handleChange} />
            <TextField label="Phone Number" value={this.props.value.phone} name="Phone" onChange={this.handleChange} />
          </label>
          <Button color="primary" variant="contained" type="button" className="form-submit-button" onClick={this.props.onSubmit}>Add contact</Button>
        </form>
      );
    }
  }

  export default NameForm;
