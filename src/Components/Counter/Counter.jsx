import { useContext } from 'react';
import counterContext from '../../Context/store/counterContext';
import Button from '../UI/Button';

const Counter = () => {
  const { counter, increment, decrement, increment10, decrement10, reset } =
    useContext(counterContext);

  return (
    <div className="container max-w-[460px] h-[380px] mx-auto p-10 bg-gray-600 rounded-xl">
      <h1 className="text-5xl text-white">Counter</h1>
      <div className="my-[30px]">
        <p className="text-4xl text-white">{counter}</p>
      </div>
      <div className="grid grid-cols-2 gap-[20px] mb-[20px]">
        <Button onFunction={increment} title={'INC'} />
        <Button onFunction={decrement} title={'DEC'} />
        <Button onFunction={increment10} title={'INC10'} />
        <Button onFunction={decrement10} title={'DEC10'} />
      </div>
      <div>
        <Button onFunction={reset} title={'RESET'} />
      </div>
    </div>
  );
};

export default Counter;
