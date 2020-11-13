import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import LabelValue from "../../../components/LabelValue";
import { getTransactions } from "../../../services/TransactionService";
import ItemList from "./ItemList";
import StatusBar from "../../../components/StatusBar";
import Button from "../../../components/Button";
import { TransactionsInfo, TransactionItems } from "./styles";
import { ContainerG, ContentG } from "../../../styles/GlobalStyles";
import {
  changeLoad,
  getTransactionsAction,
} from "../../../stores/actions/transactions";
import Loading from "../../../components/Loading";

function ListTransactions() {
  const [totalTransaction, setTotalTransaction] = useState(0);
  const history = useHistory();
  const dispatch = useDispatch();
  const transactions = useSelector((state) => state.transactions);
  const { listTransactions, loading } = transactions;

  useEffect(() => {
    if (listTransactions.length === 0) {
      dispatch(changeLoad());
      getTransactions()
        .then((list) => {
          dispatch(getTransactionsAction(list));
          dispatch(changeLoad());
          let totalFromStore = list.reduce(
            (accumulator, currentValue) => {
              return (accumulator =
                parseFloat(accumulator) + parseFloat(currentValue.amount));
            },
            [0]
          );
          setTotalTransaction(totalFromStore);
        })
        .catch((e) => dispatch(changeLoad()));
    } else {
      let total = listTransactions.reduce(
        (accumulator, currentValue) => {
          return (accumulator =
            parseFloat(accumulator) + parseFloat(currentValue.amount));
        },
        [0]
      );
      setTotalTransaction(total);
    }
  }, []);

  const RenderItem = () => {
    return listTransactions.map((item, index) => (
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

  function newTransaction() {
    history.push("/newTransaction");
  }

  return (
    <ContainerG>
      <ContentG>
        <StatusBar name="Figma" date="9:04 AM" />
        {loading && <Loading />}
        <TransactionsInfo>
          <LabelValue
            label="Número de transações"
            value={listTransactions.length}
          />
          <LabelValue
            label="Valor Total"
            value={FormatValue(totalTransaction)}
          />
        </TransactionsInfo>
        <TransactionItems>{RenderItem()}</TransactionItems>
        <Button
          onSubmit={newTransaction}
          showAddIcon="true"
          label="Criar Nova Transação"
        />
      </ContentG>
    </ContainerG>
  );
}

export default ListTransactions;
