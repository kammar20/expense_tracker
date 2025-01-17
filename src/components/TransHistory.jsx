import { useExpense } from '../context/ExpenseContext';
import { formatCurrency } from '../utility/CurrencyFormat';
export default function TransHistory() {
  const { allTransaction } = useExpense();

  const formatDate = (timestamp) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short', // Abbreviated month name (e.g., "Dec")
      day: 'numeric', // Day of the month
      year: 'numeric', // Full year
      hour: 'numeric', // Hour
      minute: 'numeric', // Minute
      second: 'numeric', // Second
      hour12: true, // 12-hour format with AM/PM
    }).format(new Date(timestamp));
  };

  return (
    <div className="w-[450px] bg-white rounded-md px-5 py-8">
      <h1 className="text-3xl mb-10">Transaction History</h1>
      <main className="h-[300px] px-4 overflow-y-auto flex flex-col gap-4">
        {allTransaction.length !== 0 ? (
          allTransaction.map((trans) => (
            <div
              key={trans.id}
              className="bg-zinc-100 flex justify-between items-center p-2 rounded"
            >
              <div>
                <h2 className="text-xl ">{trans.desc}</h2>
                <span className="text-sm font-medium">
                  {formatDate(trans.id)}
                </span>
              </div>
              <p
                className={`text-xl font-medium ${
                  trans.amountType === 'expense'
                    ? 'text-red-500'
                    : 'text-green-500'
                }`}
              >
                {formatCurrency(trans.amount)}
              </p>
            </div>
          ))
        ) : (
          <p>No Transaction Found!!</p>
        )}
      </main>
    </div>
  );
}
