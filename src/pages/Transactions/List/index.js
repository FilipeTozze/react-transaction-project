import React, { useEffect, useState } from "react";
import LabelValue from "../../../components/LabelValue";
import { getTransactions } from "../../../services/TransactionService";
import ItemList from "./ItemList";

import {
  Container,
  Content,
  TransactionsInfo,
  TransactionItems,
} from "./styles";

function ListTransactions() {
  const [transactions, setTransaction] = useState([]);
  const [totalTransaction, setTotalTransaction] = useState(0);

  useEffect(() => {
    getTransactions().then((listTransactions) => {
      setTransaction(listTransactions);
      let total = listTransactions.reduce(
        (accumulator, currentValue) => {
          return (accumulator =
            parseFloat(accumulator) + parseFloat(currentValue.amount));
        },
        [0]
      );
      setTotalTransaction(total);
    });
  }, []);

  const RenderItem = () => {
    return transactions.map((item, index) => (
      <ItemList
        key={index}
        name={item.credit_card_holder_name}
        dtTransaction="12312512312"
        status={item.status}
        value={item.amount}
      />
    ));
  };

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
      <Content>
        <TransactionsInfo>
          <LabelValue
            label="Número de transações"
            value={transactions.length}
          />
          <LabelValue
            label="Valor Total"
            value={FormatValue(totalTransaction)}
          />
        </TransactionsInfo>
        <TransactionItems>{RenderItem()}</TransactionItems>
      </Content>
    </Container>
  );
}

export default ListTransactions;
