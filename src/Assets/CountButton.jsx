import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, additems } from '../store/cartSlicer';

const CountButton = ({ data }) => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cartSlice.items);

  // Memoize count extraction
  const count = useMemo(() => {
    const item = items.find(item => item.id === data.id);
    return item?.quantity || 0;
  }, [items, data.id]);

  const containerClass = `
    absolute -bottom-2 left-[60%] w-[100px] rounded-md 
    border border-zinc-400 shadow-md bg-zinc-100 
    text-center font-bold text-2xl text-green-600 capitalize
  `;

  return (
    <div>
      {count === 0 ? (
        <button onClick={() => dispatch(additems(data))} className={containerClass}>
          Add
        </button>
      ) : (
        <div className={`flex items-center justify-between px-2 ${containerClass}`}>
          <button onClick={() => dispatch(decrement(data))} className="px-2">-</button>
          <span>{count}</span>
          <button onClick={() => dispatch(increment(data))} className="px-2">+</button>
        </div>
      )}
    </div>
  );
};

export default CountButton;
