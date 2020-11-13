export const formatCPF = (cpf) => {
  return cpf
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
};

export const formatCreditCard = (creditCard) => {
  return creditCard
    .replace(/\D/g, "")
    .replace(/(\d{4})(\d)/, "$1 $2")
    .replace(/(\d{4})(\d)/, "$1 $2")
    .replace(/(\d{4})(\d)/, "$1 $2")
    .replace(/(\d{4})(\d)/, "$1 $2");
};

export const formatCreditCardExpirationDate = (expirationDate) => {
  return expirationDate.replace(/\D/g, "").replace(/(\d{2})(\d)/, "$1/$2");
};

export const formatCurrency = (amount) => {

  let valueTransform = amount.replace(/,/g, "");
  let newValue = valueTransform;

  if (valueTransform.length > 2) {
    let descimal = valueTransform.slice(-2);
    newValue = `${valueTransform.substr(
      0,
      valueTransform.length - 2
    )},${descimal}`;
  }

  return newValue;
};
