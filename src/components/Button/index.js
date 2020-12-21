import React from "react";
import { ButtonStyled } from "./styled";
import PropTypes from "prop-types";

const Button = (props) => {
  const onClickButton = () => {
    if (props.disabled) return;
    props.onClick && props.onClick();
  }

  return(
    <ButtonStyled
      id={props.id}
      onClick={onClickButton}
      outlined={props.outlined}
      disabled={props.disabled}
      size={props.size}
    >
      { props.children }
    </ButtonStyled>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  outlined: PropTypes.bool,
  disabled: PropTypes.bool,
  size: PropTypes.object
};

Button.defaultProps = {
  onClick: () => {},
  outlined: false,
  disabled: false,
  size: {}
};

export default Button;