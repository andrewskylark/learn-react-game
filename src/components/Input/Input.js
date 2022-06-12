import PropTypes from 'prop-types';

const Input = ({ type, id, label, name, children, required = true, inputRef }) => {
    return (
        <>
            <input 
            type={type} 
            id={`#${id}`} 
            name={name} 
            required={required ? "required" : null}
            ref={inputRef && inputRef}
            />
            <label htmlFor={`#${id}`}>{label}</label>
            {children}
        </>
    );
};

Input.propTypes = {
    type: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    required: PropTypes.bool,
    children: PropTypes.node,
}

export default Input;