import { formatCurrency } from '../utility/CurrencyFormat';

export default function Card({ name, value, code }) {
  const backgroundColors = {
    total: 'bg-blue-700',
    expense: 'bg-red-600',
    income: 'bg-green-600',
  };
  const bgColor = backgroundColors[code] || 'bg-gray-500';

  const person = {
    firstName: 'Ammar',
  };

  console.log(person.age);

  return (
    <>
      <div
        className={`w-[250px] flex flex-col justify-center items-center px-8 py-7 rounded-md ${bgColor}`}
      >
        <h1 className="text-2xl text-neutral-100 mb-3">{name}</h1>
        <span className="text-5xl text-neutral-50">
          {formatCurrency(value)}
        </span>
      </div>
    </>
  );
}
