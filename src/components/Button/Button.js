import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import st from './Button.module.scss'

const Button = ({ text, btnStyle, className, handleBtnClick }) => {

    return (
        <button
            onClick={handleBtnClick}
            className={
                cn(
                    st.root,
                    className,
                    st[`${btnStyle}`],
                    // { [st.reversed]: reversed }
                )}>

            {text}
        </button>
    );
};

Button.defaultProps = {
    btnStyle: null,
}

Button.propTypes = {
    text: PropTypes.string,
    btnStyle: PropTypes.string,
    className: PropTypes.string,
    onBtnClick: PropTypes.func,
}

export default Button;