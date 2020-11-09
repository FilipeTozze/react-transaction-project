import React from "react";
import { MdAddCircle } from "react-icons/md";

import { Container, Icon, Label, Content } from "./styles";

function Button({ showAddIcon, label }) {
  return (
    <Container>
      <Content>
        <Icon>
          <MdAddCircle />
        </Icon>
        <Label>{label}</Label>
      </Content>
    </Container>
  );
}

export default Button;
