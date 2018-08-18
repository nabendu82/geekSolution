import React from 'react';
import PropTypes from 'prop-types'

const renderStyles = {
    fontSize: '1.5rem',
    height: '40px',
    fontWeight: '400',
    width: '100%',
    padding: '6px 12px'
  };

const Select = (props) => (
    <select
        name={ props.name }
        value={ props.selectedOption }
        onChange={ props.controlFunc }
        className="form-select"
        style={ renderStyles }>
        <option value="">{props.placeholder}</option>
        {props.options.map(opt => {
            return (
                <option
                    key={ opt }
                    value={ opt }>{opt}</option>
            );
        })}
    </select>
);

Select.propTypes = {  
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  selectedOption: PropTypes.string,
  controlFunc: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};

export default Select; 