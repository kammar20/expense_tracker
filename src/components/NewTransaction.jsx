import { useExpense } from '../context/ExpenseContext';

export default function NewTransaction() {
  const { newTransactionInput, handleTransactionInput, handleAllTransaction } =
    useExpense();
  //   console.log(newTransactionInput);
  return (
    <div className="w-[350px] bg-white rounded-md px-5 py-8">
      {/* Amount */}
      <div className="mb-5">
        <label htmlFor="amount" className="block text-xl mb-1">
          Amount
        </label>
        <input
          onChange={handleTransactionInput}
          value={newTransactionInput.amount}
          type="number"
          name="amount"
          id="amount"
          className="w-full px-3 py-1 border-2 bg-transparent text-lg"
        />
      </div>

      {/* Description */}
      <div className="mb-5">
        <label htmlFor="desc" className="block text-xl mb-1">
          Description
        </label>
        <input
          onChange={handleTransactionInput}
          value={newTransactionInput.desc}
          type="text"
          name="desc"
          id="desc"
          className="w-full px-3 py-1  border-2 bg-transparent text-lg"
        />
      </div>

      {/* Radio */}
      <div className="flex gap-10 mb-8">
        <div>
          <input
            onChange={handleTransactionInput}
            checked={newTransactionInput.amountType === 'income'}
            type="radio"
            name="amountType"
            id="income"
            value="income"
            className="w-[15px] h-[15px]"
          />
          <label htmlFor="income" className="text-xl ml-1">
            Income
          </label>
        </div>
        <div>
          <input
            onChange={handleTransactionInput}
            checked={newTransactionInput.amountType === 'expense'}
            type="radio"
            name="amountType"
            id="expense"
            value="expense"
            className="w-[15px] h-[15px]"
          />
          <label htmlFor="expense" className="text-xl ml-1">
            Expense
          </label>
        </div>
      </div>

      {/* Button */}
      <div>
        <button
          onClick={handleAllTransaction}
          className="bg-blue-500 active:bg-blue-600 transition-all px-4 py-1.5 text-xl rounded-md"
        >
          Add Transaction
        </button>
      </div>
    </div>
  );
}
