import React from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { decrement, increment, reset, update10 } from '../../app/features/counter/counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()
  return (
    <div className='pt-5 text-center'>
      <h2 className='py-3'>Counter app : {count}</h2>
      <div className='space-x-3'>
        <button onClick={() => {dispatch(increment())}} className='px-2 py-1 border rounded-lg'>Increment </button>
        <button onClick={() => {dispatch(decrement())}} className='px-2 py-1 border rounded-lg'>Decrement </button>
        <button onClick={() => {dispatch(reset())}} className='px-2 py-1 border rounded-lg'>Reset </button>
        <button onClick={() => {dispatch(update10(10))}} className='px-2 py-1 border rounded-lg'>Update 10 </button>
      </div>
    </div >
  );
};

export default Counter;