import React from 'react';
import PropTypes from 'prop-types'
import { FlexRevRadio } from '../StyledComponents'

const RadioGroup = (props) => (
    <FlexRevRadio>
        {props.options.map(opt => {
            return (
                <label key={ opt.name } style={ { color: opt.total_no > 0 ? 'black' : 'grey' } } >
                    <input
                        className="form-checkbox"
                        name={ props.setName }
                        onChange={ props.controlFunc }
                        value={ opt.name }
                        checked={ props.selectedOptions.indexOf(opt.name) > -1 }
                        disabled={ opt.total_no < 1 }
                        type={ props.type } /> {opt.name} ({opt.total_no})
                </label>
            );
        })}

    </FlexRevRadio>
);

RadioGroup.propTypes = {  
  type: PropTypes.string.isRequired,
  setName: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  selectedOptions: PropTypes.array,
  controlFunc: PropTypes.func.isRequired
};

export default RadioGroup;