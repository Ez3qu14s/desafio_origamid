import React from 'react';

const Radio = ({ id, options, onChange, value }) => {
  return (
    <div>
      {options.map((item) => (
        <label style={{ display: 'block' }}>
          <input
            id={id}
            type="radio"
            value={item}
            checked={item === value}
            onChange={onChange}
          />
          {item}
        </label>
      ))}
    </div>
  );
};

export default Radio;
