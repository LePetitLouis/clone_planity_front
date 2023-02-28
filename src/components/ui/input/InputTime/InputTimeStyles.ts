import styled from "styled-components";

export const InputTimeContainer = styled.div`
  &.for_form{
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 8px 0;
    height: 80px;
  }
  input{
    background: #fff;
    border: none;
    border-bottom: 2px solid var(--grey-500);;
    display: block;
    margin-bottom: 0.625em;
    margin-top: 0.3em;
    outline-offset: 3px;
    &:before{
      content: attr(placeholder) !important;
      color: #aaa;
      font-style: italic;
      font-size: 0.9em;
    }
  }
`