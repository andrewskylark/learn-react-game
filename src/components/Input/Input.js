import PropTypes from 'prop-types';

const Input = ({ type, id, label, children, required = true, inputRef }) => {

    return (
        <>
            <input type={type} id={`#${id}`} 
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
    required: PropTypes.bool,
    children: PropTypes.node,
}

export default Input;