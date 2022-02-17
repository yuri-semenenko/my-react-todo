import React from 'react';
import classes from './MySelect.module.css';

const MySelect = ({options, value, defaultValue = "Выберите вариант", change}) => {
  return (
    <select className={classes.customSelect} value={value} onChange={event => change(event.target.value)}>
      <option disabled value="">{defaultValue}</option>
      {options.map((option) =>
        <option key={option.value} value={option.value}>{option.name}</option>
      )}
    </select>
  );
};

export default MySelect;
