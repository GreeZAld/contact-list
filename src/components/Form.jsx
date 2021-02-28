import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Input from './Input';
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
        // <form onSubmit="return false" className="contact-form">
        //   <label>
        //     <TextField type="string" label={formConfig.label} value={this.props.value.name} name="Name" onChange={this.handleChange} />
        //     <TextField label="Phone Number" value={this.props.value.phone} name="Phone" onChange={this.handleChange} />
        //   </label>
        //   <Button color="primary" variant="contained" type="button" className="form-submit-button" onClick={this.props.onSubmit}>Add contact</Button>
        // </form>
        <form>
          {formConfig.map(item => {
            console.log(item)
            return <Input name={item.name} label={item.label} type={item.type} required={item.required} error={item.error} />
          })}
        </form>
      );
    }
  }

  export default NameForm;
