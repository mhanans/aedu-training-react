import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

interface RootState {
  count: number;
}

const ReduxCounter: React.FC = () => {
  const count = useSelector((state: RootState) => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <p>Redux Count: {count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Add</button>
    </div>
  );
};

export default ReduxCounter;