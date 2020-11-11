import React from "react";
import {useHistory} from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";

import { Container, Content, Icon, Label, ContentIcon } from "./styles";

function Header({ title }) {

  const history = useHistory();

  function backToTransactionList(){
    history.push('/listTransaction');
  }

  return (
    <Container>
      <Content>
        <ContentIcon>
          <Icon onClick={backToTransactionList}>
            <FaArrowLeft />
          </Icon>
        </ContentIcon>
        <Label>{title}</Label>
      </Content>
    </Container>
  );
}

export default Header;
