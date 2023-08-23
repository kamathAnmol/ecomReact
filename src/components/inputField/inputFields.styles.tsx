import styled from "styled-components";

export const FormGroup = styled.div`
  position: relative;
  padding: 20px 0 0;
  width: 100%;
  max-width: 300px;
`;

export const FormField = styled.input`
  font-family: inherit;
  width: 100%;
  border: none;
  border-bottom: 2px solid #9b9b9b;
  outline: 0;
  font-size: 17px;
  color: #000000;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
  
  &::placeholder {
    color: transparent;
  }
  
  &:placeholder-shown ~.form__label {
    font-size: 17px;
    cursor: text;
    top: 20px;
  }
  
  &:focus {
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, #116399, #38caef);
    border-image-slice: 1;
  }
  
  &:focus ~ .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 17px;
    color: #38caef;
    font-weight: 700;
  }
  
  &:required,
  &:invalid {
    box-shadow: none;
  }
`;

export const FormLabel = styled.label`
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 17px;
  color: #9b9b9b;
  pointer-events: none;
`;