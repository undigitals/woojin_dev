import styled from "styled-components";

const Button = styled.button`
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  background: ${props => props.background};
  border: ${props => props.border};
  font-size: ${props => props.font_size};
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.42;
  letter-spacing: 0.2px;
  text-align: center;
  color: ${props => props.color};
  display: flex;
  align-items: center;
  justify-content: space-around;
  outline: 0;
  cursor: pointer;

  img {
    width: 20px;
    height: 21px;
  }

  img.checked {
    width: 14px;
    height: 11px;
  }

  div {
    width: 35%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 20px;
      height: 21px;
    }
  }
`;

const Component = (props) => {
  return (
    <Button {...props} disabled={props.disabled}>
      {props.isChecked ? <img src="/static/img/tick.png" className="checked" width="14" height="11" /> : props.value || props.children}
    </Button>
  )
}

export default Component