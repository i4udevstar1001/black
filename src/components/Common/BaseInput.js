import React, { useState } from "react";
// reactstrap components
import { 
    FormGroup, 
    InputGroup,
    Input, Label 
} from "reactstrap";


const BaseInput = ({
    id, value, label, type, placehol, req, rows
}) => {
    const [val, setVal] = useState(value);
    const [valErr, setValErr] = useState(0);

    const onValidationCheck = () => {
        if( val === '' ) {
            if( req )
                setValErr(1);
            else
                setValErr(0);
        } else {
            if( type !== 'email' ) {
                setValErr(0);
            } else if( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(val) ) {
                setValErr(0);
            } else
                setValErr(2);
        }
    }
  return (
    <FormGroup>
        <InputGroup className="input-group-merge input-group-alternative">
            <Label for={id}>{label}</Label>
            <Input
                id={id}
                placeholder={placehol}
                type={type}
                value={val}
                onBlur={onValidationCheck}
                required={req}
                rows={rows}
                onChange={(e) => {setVal(e.target.value)}}
            />
            {valErr === 1 ? <p className="help-block-error">{label} cannot be blank.</p> : null}
            {valErr === 2 ? <p className="help-block-error">{label} is not a valid email address.</p> : null}
        </InputGroup>
    </FormGroup>
  );
};

export default BaseInput;
