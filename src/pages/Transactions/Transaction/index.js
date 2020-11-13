import React, { useRef } from "react";
import { Form } from "@unform/web";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

import Header from "../../../components/Header";
import StatusBar from "../../../components/StatusBar";
import { ContainerG, ContentG } from "../../../styles/GlobalStyles";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { Container, Content, Row } from "./styles";
import { saveTransactions } from "../../../services/TransactionService";
import {
  changeLoad,
  newTransactionAction,
} from "../../../stores/actions/transactions";
import { useHistory } from "react-router-dom";
import { formatCPF, formatCreditCard, formatCreditCardExpirationDate, formatCurrency } from "../../../utils/mask";

function Transaction() {
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const history = useHistory();

  async function handleSubmit(data) {
    try {
      dispatch(changeLoad());
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        credit_card_holder_name: Yup.string()
          .min(5, "O nome deve ter no minimo 5 caracteres")
          .required("Nome é obrigatório"),
        buyer_document: Yup.string()
          .min(14, "O cpf deve ter no minimo 11 caracteres")
          .max(14, "O cpf deve ter no máximo 11 caracteres")
          .required("CPF é obrigatório"),
        credit_card_number: Yup.string()
          .min(19, "O n° do cartão deve ter no minimo 16 caracteres")
          .max(19, "O n° do cartão deve ter no máximo 16 caracteres")
          .required("N° do cartão é obrigatório"),
        credit_card_expiration_date: Yup.string()
          .min(7, "A data deve ter no minimo 6 caracteres")
          .max(7, "A data deve ter no máximo 6 caracteres")
          .required("Data do cartão é obrigatório"),
        credit_card_cvv: Yup.string()
          .min(3, "O CVV deve ter no minimo 3 caracteres")
          .max(3, "O CVV deve ter no máximo 3 caracteres")
          .required("CVV é obrigatório"),
        amount: Yup.string().required("Valor da transação é obrigatório"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const newDate = new Date();
      const dateTransaction = `${newDate.toLocaleDateString()} : ${newDate
        .toLocaleTimeString()
        .substr(0, 5)}`;

      data.date = dateTransaction;
      data.amount = parseFloat(data.amount.replace(",","."));

      saveTransactions(data)
        .then((newTransaction) => {
          dispatch(newTransactionAction(newTransaction));
          dispatch(changeLoad());
          history.goBack();
          return toast.success("Transação criada com sucesso", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        })
        .catch((e) => {
          dispatch(changeLoad());
          return toast.error("Erro ao criar nova transação", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        });
    } catch (err) {
      dispatch(changeLoad());
      const validationErrors = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });

        formRef.current?.setErrors(validationErrors);
      }
    }
  }

  return (
    <ContainerG>
      <ContentG>
        <StatusBar name="Figma" date="9:04 AM" />
        <Header title="Nova Transação" />
        <Container>
          <Content>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <Input
                name="credit_card_holder_name"
                label="Nome da pessoa compradora"
                required={true}
                type="text"
              />

              <Input
                name="buyer_document"
                label="CPF"
                type="text"
                mask={formatCPF}
                maxLength="14"
                required={true}
              />

              <Input
                name="credit_card_number"
                label="N° do cartão"
                type="text"
                mask={formatCreditCard}
                maxLength="19"
                required={true}
              />
              <Row>
                <Input
                  width="65%"
                  name="credit_card_expiration_date"
                  label="Data de expiração"
                  type="text"
                  mask={formatCreditCardExpirationDate}
                  maxLength="7"
                  required={true}
                />

                <Input
                  width="33%"
                  name="credit_card_cvv"
                  label="CVV"
                  type="text"
                  maxLength="3"
                  required={true}
                />
              </Row>
              <Input
                name="amount"
                label="Valor da transação"
                type="text"
                mask={formatCurrency}
                required={true}
              />

              <Button
                disabled={false}
                showAddIcon={false}               
                onSubmit={() => formRef.current?.submitForm()}
                label="Criar Transação"
              />
            </Form>
          </Content>
        </Container>
      </ContentG>
    </ContainerG>
  );
}

export default Transaction;
