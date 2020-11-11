import React from "react";
import { MdAddCircle } from "react-icons/md";

import { Container, Icon, Label, Content, Btn } from "./styles";

function Button({ showAddIcon, label, onSubmit, disabled }) {
  return (
    <Container disabled={disabled} onClick={() => onSubmit()}>
      <Btn disabled={disabled} >
        <Content>
          {showAddIcon && (
            <Icon>
              <MdAddCircle />
            </Icon>
          )}
          <Label>{label}</Label>
        </Content>
      </Btn>
    </Container>
  );
}

export default Button;
