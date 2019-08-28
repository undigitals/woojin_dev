import styled from "styled-components";

export default styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 13px;
  cursor: pointer;
  font-size: ${props => props.font_size};
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  /* Hide the browser's default checkbox */
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom checkbox */
  .checkmark {
    margin: ${props => props.margin};
    position: absolute;
    top: 0;
    left: 0;
    height: ${props => props.height};
    width: ${props => props.width};
    background-color: #eee;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* On mouse-over, add a grey background color */
  :hover input ~ .checkmark {
    background-color: #ccc;
  }

  /* When the checkbox is checked, add a blue background */
  input:checked ~ .checkmark {
    background-color: #30e646;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .checkmark:after {
    width: 4px;
    height: 9px;
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    background-color: #30e646;
  }
`;
