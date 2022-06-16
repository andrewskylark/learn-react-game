import PropTypes from 'prop-types';
import React, { useState } from 'react';
import cn from 'classnames';
import st from './Input.module.scss'
// React.forwardRef((props, ref) => {}) using just ref could be unstable
const Input = React.forwardRef((props, ref) => {
    const { type, id, label, name, children, required = true, className, defaultValue, inputStyle, onChange} = props;

    const [value, setValue] = useState(defaultValue ? defaultValue : '');

    const handleChange = (evt) => {
        setValue(evt.target.value);
        onChange && onChange(evt);
    }

    return (
        <div className={cn(st.root, className, st[`${inputStyle}`])}>
            <input
                type={type}
                id={id}
                name={name}
                required={required ? "required" : null}
                ref={ref}
                value={value ?? ''}
                onChange={handleChange}
            />
            <label className={cn({ [st.valid]: value.length > 0 })} htmlFor={id}>{label}</label>
            <div className={st.bar}></div>
            {children}
        </div>
    );
});

Input.propTypes = {
    type: PropTypes.oneOf(['text', 'email', 'password']),
    id: PropTypes.string,
    label: PropTypes.string.isRequired,
    name: PropTypes.string,
    defaultValue: PropTypes.string,
    required: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    inputStyle: PropTypes.string,
    onChange: PropTypes.func,
}

export default Input;