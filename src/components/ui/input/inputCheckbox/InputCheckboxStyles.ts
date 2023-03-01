import styled from "styled-components";

export const InputCheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;

  input[type="checkbox"] {
    display: none;
  }
  
  label {
    display: inline-block;
    vertical-align: middle;
    margin-right: 15px;
  }
  
  
  .custom-checkbox-wrap .label {
    position: relative;
    top: 2px;
  }
  
  /* Checkbox #2 */
  .custom-checkbox-wrap input[type="checkbox"] + .custom-checkbox,
  .custom-checkbox-wrap input[type="checkbox"] + .custom-checkbox:after,
  .custom-checkbox-wrap input[type="checkbox"]:checked + .custom-checkbox
  .custom-checkbox-wrap input[type="checkbox"]:checked + .custom-checkbox:after {
    -webkit-transition: 1s;
    -moz-transition: 1s;
    -o-transition: 1s;
    transition: 1s;
  }
  
  .custom-checkbox-wrap input[type="checkbox"] + .custom-checkbox {
    position: relative;
    height: 20px;
    width: 20px;
    border: 2px solid;
    border-color: var(--grey-900);
    border-radius: var(--border-radius-small);
  }
  
  .custom-checkbox-wrap input[type="checkbox"] + .custom-checkbox:after {
    background: none;
    position: absolute;
    content: "";
    height: 10px;
    width: 10px;
    top: 3px;left: 3px;
    border-radius: var(--border-radius-large)
  }
  
  .custom-checkbox-wrap input[type="checkbox"]:checked + .custom-checkbox {
    border-color: var(--grey-900);
  }
  
  .custom-checkbox-wrap input[type="checkbox"]:checked + .custom-checkbox:after {
    background: var(--grey-900);
  }

  span{
    font: var(--body-3);
  }
`