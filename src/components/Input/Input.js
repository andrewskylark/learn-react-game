import PropTypes from 'prop-types';

const Input = ({ type, id, label, children, required = true }) => {
    return (
        <>
            <input type={type} id={`#${id}`} required={required ? "required" : null} />
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