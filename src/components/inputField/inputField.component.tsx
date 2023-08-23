import React from "react";
import {FormGroup,FormField,FormLabel} from"./inputFields.styles";
import { InputHTMLAttributes } from "react";
interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
function FormInput({ label, ...otherProps }:FormInputProps) {
  return (
    <FormGroup className="form__group field">
      <FormField {...otherProps} className="form__field" placeholder="Name" />
      <FormLabel htmlFor="name" className="form__label">
        {label}
      </FormLabel>
    </FormGroup>
  );
}

export default FormInput;
