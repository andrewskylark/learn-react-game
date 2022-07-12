import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import st from './Button.module.scss'

const Button = ({ children, btnStyle, disabled, className, handleBtnClick }) => {

    return (
        <button
        disabled={disabled}
            className={
                cn(
                    st.root,
                    className,
                    st[`${btnStyle}`],
                )}
            onClick={handleBtnClick}
        >
            {children}
        </button>
    );
};

Button.defaultProps = {
    btnStyle: null,
    disabled: false
}

Button.propTypes = {
    children: PropTypes.node,
    btnStyle: PropTypes.string,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    onBtnClick: PropTypes.func,
}

export default Button;