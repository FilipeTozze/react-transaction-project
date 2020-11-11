import React, { useEffect, useState } from "react";
import {useHistory} from 'react-router-dom';

import LabelValue from "../../../components/LabelValue";
import { getTransactions } from "../../../services/TransactionService";
import ItemList from "./ItemList";
import StatusBar from "../../../components/StatusBar";
import Button from "../../../components/Button";

import {
  TransactionsInfo,
  TransactionItems,
} from "./styles";
import { ContainerG, ContentG } from "../../../styles/GlobalStyles";

function ListTransactions() {
  const [transactions, setTransaction] = useState([]);
  const [totalTransaction, setTotalTransaction] = useState(0);
  const history = useHistory();

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
        dtTransaction={item.date}
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

  function newTransaction(){
    console.log("chegou na função")
    history.push('/newTransaction');
  }

  return (
    <ContainerG>
      <ContentG>
        <StatusBar name="Figma" date="9:04 AM" />
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
        <Button onSubmit={newTransaction} showAddIcon="true"  label="Criar Nova Transação"  />
      </ContentG>
    </ContainerG>
  );
}

export default ListTransactions;
