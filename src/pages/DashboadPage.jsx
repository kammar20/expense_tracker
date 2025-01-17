import { useEffect } from 'react';
import Card from '../components/Card';
import NewTransaction from '../components/NewTransaction';
import { useExpense } from '../context/ExpenseContext';
import { useState } from 'react';
import TransHistory from '../components/TransHistory';

export default function DashboadPage() {
  const { allTransaction } = useExpense();
  // const { fullname, budget } = JSON.parse(localStorage.getItem('userDetail'));

  // Local storage
  const fullname = localStorage.getItem('fullname');
  const budget = JSON.parse(localStorage.getItem('budget'));

  // state for
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalExpense = allTransaction
      .filter((trans) => trans.amountType === 'expense')
      .reduce((acc, crr) => acc + Number(crr.amount), 0);

    const totalIncome = allTransaction
      .filter((trans) => trans.amountType === 'income')
      .reduce((acc, crr) => acc + Number(crr.amount), 0);

    const totalBalance = Number(budget) + totalIncome - totalExpense;

    // local storeage setting budget

    setTotal(totalBalance);
    setExpense(totalExpense);
    setIncome(totalIncome);
  }, [allTransaction]);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-10 bg-blue-100 ">
      <h1 className="text-5xl text-neutral-900">Welcome {fullname}</h1>

      {/* Container */}
      <div className="flex gap-20">
        {/* Box */}
        <div className="flex flex-col gap-5">
          <Card name={'Your Balance'} value={total} code={'total'} />
          <Card name={'Total Expense'} value={expense} code={'expense'} />
          <Card name={'Total Income'} value={income} code={'income'} />
        </div>

        {/* Transaction Input */}
        <NewTransaction />

        {/* Transaction History */}
        <TransHistory />
      </div>
    </div>
  );
}
