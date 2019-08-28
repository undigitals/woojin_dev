import styled from 'styled-components'

const Input = styled.input`
  width: ${props=>props.width};
  height: ${props=>props.height};
  padding: 20px 19px;
  border: 0.5px solid ${props => props.warning ? '#ffb511' : props.value ? '#eee' : 'rgb(230,230,230)' };
  object-fit: contain;
  background-color: ${props => props.value ? '#FAFAFA' : '#fff'};
  font-size: 14px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.95;
  letter-spacing: 0.3px;
  text-align: left;
  color: #1a1a1a;
  margin-bottom: 20px;
  cursor: text;

  ::placeholder{
    color: #a4a4a4;
  }

  :focus {
    outline: 0;
    border-color: #30e646;
  }
`

Input.Message = styled.div`
  color: #ffb511;
  margin-top: -10px;
  margin-left: 20px;
  margin-bottom: 20px;
  align-self: stretch;
`

export default Input
