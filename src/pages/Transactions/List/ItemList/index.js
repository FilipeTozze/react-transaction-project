import React from "react";

import {
  Container,
  UserName,
  Name,
  Data,
  InfoTransction,
  Status,
  Value,
} from "./styles";

function ItemList({ name, dtTransaction, status, value }) {
  const FormatValue = (value) => {
    let valueFormated = value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    });
    return valueFormated;
  };


  return (
    <Container>
      <UserName>
        <Name>{name}</Name>
        <Data>{dtTransaction}</Data>
      </UserName>
      <InfoTransction>
        <Status>{status}</Status>
        <Value>{FormatValue(value)}</Value>
      </InfoTransction>
    </Container>
  );
}

export default ItemList;
