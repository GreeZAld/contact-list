import React from 'react';
import Button from '@material-ui/core/Button';

function ContactList(props) {
    return (
        <div>
            {props.conts.map(item => {
                    return (
                    <ul>
                        <h3>Contact{props.conts.indexOf(item)+1}</h3>
                        <li>{item.name}<br/>{item.phone}</li>
                        <Button color="secondary" variant="contained" type="button" className="form-submit-button" onClick={() => props.onDelete(item.id)}>Delete</Button>
                    </ul>
                    )
                })}
        </div>
    )
}


export default ContactList;
