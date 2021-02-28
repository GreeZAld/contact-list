import React, { useState } from 'react';

function Input(props) {

    const [error, setError] = useState("");

    return(
        <div>
            <label>
                {props.label}
                <input
                    type={props.type}
                    id={props.name}
                    name={props.name}
                    onChange={(e) => {
                        if(e.target.value.length < 1) {
                            setError(props.error)
                        }
                        else {
                            setError("")
                        }
                    }}
                />
                {props.required ? '*' : null}
            </label>
            <p>{error}</p>
        </div>
    )
}

export default Input;
