import { createContext, useContext, useState } from 'react';

const ExpenseContext = createContext();
export const useExpense = () => {
  return useContext(ExpenseContext);
};

export const ExpenseProvider = ({ children }) => {
  /// Login Page Context
  const [loginInput, setLoginInput] = useState({
    fullname: '',
    budget: '',
  });

  // Update input value on change
  function handleLoginInput(e) {
    const { name, value } = e.target;

    if (name === 'budget') {
      //   const numericValue = value.replaceAll(/[^0-9]/g, '');
      //   setLoginInput({ ...loginInput, [name]: numericValue });

      if (/^\d*$/.test(value)) {
        setLoginInput({ ...loginInput, [name]: value }); // Update only if the value is numeric or empty
      }
    } else {
      setLoginInput({ ...loginInput, [name]: value });
    }
  }

  // Trim the white space before saving the input value
  function handleLoginBlur(e) {
    const { name, value } = e.target;

    if (name === 'fullname') {
      setLoginInput({ ...loginInput, [name]: value.trim() });
    }
  }

  /// Dashboad Context
  const [newTransactionInput, setNewTransactionInput] = useState({
    amount: '',
    desc: '',
    amountType: '',
  });

  function handleTransactionInput(e) {
    const { name, value } = e.target;

    if (name === 'amount') {
      if (/^\d*$/.test(value)) {
        setNewTransactionInput({ ...newTransactionInput, [name]: value });
      }
    } else {
      setNewTransactionInput({ ...newTransactionInput, [name]: value });
    }
  }
  // All Transaction
  const [allTransaction, setAllTransacton] = useState([]);

  function handleAllTransaction() {
    if (
      newTransactionInput.desc.trim() === '' ||
      newTransactionInput.amountType === '' ||
      newTransactionInput.amount <= 0
    ) {
      alert('Please Enter Correct Value');
      return;
    }
    setAllTransacton([
      ...allTransaction,
      {
        ...newTransactionInput,
        desc: newTransactionInput.desc.trim(),
        id: Date.now(),
      },
    ]);

    setNewTransactionInput({
      amount: '',
      desc: '',
      amountType: '',
    });
  }

  console.log(allTransaction);
  return (
    <ExpenseContext.Provider
      value={{
        loginInput,
        handleLoginInput,
        handleLoginBlur,
        newTransactionInput,
        handleTransactionInput,
        handleAllTransaction,
        allTransaction,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};
