import PropTypes from 'prop-types';
import React from 'react';
// React.forwardRef((props, ref) => {}) using just ref could be unstable
const Input = React.forwardRef((props, ref) => {

    const { type, id, label, name, children, required = true } = props;
    
    return (
        <>
            <input
                type={type}
                id={`#${id}`}
                name={name}
                required={required ? "required" : null}
                // ref={inputRef && inputRef}
                ref={ref}
            />
            <label htmlFor={`#${id}`}>{label}</label>
            {children}
        </>
    );
});

Input.propTypes = {
    type: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    required: PropTypes.bool,
    children: PropTypes.node,
}

export default Input;