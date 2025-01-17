import { useNavigate } from 'react-router-dom';
import { useExpense } from '../context/ExpenseContext';
import { useState } from 'react';

export default function LoginPage() {
  const { loginInput, handleLoginInput, handleLoginBlur } = useExpense();

  const [isError, setIsError] = useState('');

  const navigateTo = useNavigate();

  //   to Remove error message
  function handleFocus() {
    if (isError) setIsError('');
  }

  function handleLoginSubmit() {
    const fullName = loginInput.fullname.trim();
    const budget = Number(loginInput.budget);

    if (fullName === '' || budget <= 0) {
      setIsError('Please provide a valid name and budget greater than zero.');
      return;
    }
    setIsError('');
    localStorage.setItem('fullname', loginInput.fullname);
    localStorage.setItem('budget', JSON.stringify(loginInput.budget));
    navigateTo('dashboad');
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-r from-neutral-200 to-neutral-300  ">
      <h1 className="text-5xl mb-5  text-neutral-900">Welcome</h1>

      {/* Form Container */}
      <div className="w-[400px] bg-neutral-100  px-8 py-10 mb-5 rounded-md">
        {/* Full Name */}
        <div className="mb-5">
          <label htmlFor="fullname" className="block text-xl mb-1">
            Full Name
          </label>
          <input
            onChange={handleLoginInput}
            onBlur={handleLoginBlur}
            onFocus={handleFocus}
            value={loginInput.fullname}
            type="text"
            name="fullname"
            id="fullname"
            className="border-2 w-full bg-transparent border-blue-400 focus:border-2 focus:border-blue-800 outline-none px-2 py-1.5 text-xl"
          />
        </div>

        {/* Total Amount Budget */}
        <div className="mb-10">
          <label htmlFor="budget" className="block text-xl mb-1">
            Budget
          </label>
          <input
            onChange={handleLoginInput}
            value={loginInput.budget}
            onFocus={handleFocus}
            type="number"
            name="budget"
            id="budget"
            min={1}
            className="border-2 w-full bg-transparent border-blue-400 focus:border-2 focus:border-blue-800 outline-none px-2 py-1.5 text-xl"
          />
        </div>

        {/* Button */}
        <div>
          <button
            onClick={handleLoginSubmit}
            className={`bg-gradient-to-r  from-cyan-500 to-blue-500 active:from-cyan-600 active:to-blue-600 
            transition-all text-xl px-4 py-1 rounded`}
          >
            Start Tracking
          </button>
        </div>
      </div>

      {/* Error Message */}
      {isError && <p className="text-lg text-red-700">{isError}</p>}
    </div>
  );
}
