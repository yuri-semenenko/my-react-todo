import React from 'react';
import MyInput from './UI/MyInput';
import MySelect from './UI/MySelect';

const ToDoFilter = ({filter, setFilter}) => {
  return (
    <section>
      <MyInput
        placeholder="Поиск..."
        value={filter.query}
        onChange={event => setFilter({...filter, query: event.target.value})}
      />
      <MySelect
        defaultValue="Сортировать по"
        options={[
          {name: "По имени", value: "title"},
          {name: "По важности", value: "priority"}
        ]}
        value={filter.sort}
        change={selectedMethod => setFilter({...filter, sort: selectedMethod})}
      />
    </section>
  );
};

export default ToDoFilter;
