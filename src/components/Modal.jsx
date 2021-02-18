import React from 'react';
import Button from '@material-ui/core/Button';
import NameForm from './Form';

function Modal(props) {
    if(!props.show) {
        return <Button color="primary" variant="contained" type="button" className="add-new-button" onClick={props.toggleModal}>Add contact</Button>
    }
    return (
        <div className="modal">
            <div className="modal-content">
                <NameForm
                    value={props.value}
                    handleNameChange={props.handleNameChange}
                    handlePhoneChange={props.handlePhoneChange}
                    onSubmit={props.onSubmit}
                />
                <Button color="default" onClick={props.toggleModal}>close</Button>
            </div>
        </div>
    )
}

export default Modal;
