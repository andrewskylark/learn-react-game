import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import st from './Button.module.scss'

const Button = ({ children, btnStyle, className, handleBtnClick }) => {

    return (
        <button
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
}

Button.propTypes = {
    children: PropTypes.node,
    btnStyle: PropTypes.string,
    className: PropTypes.string,
    onBtnClick: PropTypes.func,
}

export default Button;