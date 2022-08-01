import React, { useState } from 'react';
import { useTodosDispatch } from '../contexts/TodosContext';

function TodoForm() {
  const [value, setValue] = useState('');
  const dispatch = useTodosDispatch();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({
      type: 'CREATE',
      text: value
    });
    setValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={value}
        placeholder="What is your next big move"
        onChange={e => setValue(e.target.value)}
      />
      <button style={{padding:"10px"}}>Create next big todo</button>
    </form>
  );
}

export default TodoForm;
