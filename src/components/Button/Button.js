import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import st from './Button.module.scss'

const Button = (props) => {
    const { text, reversed, className, handleBtnClick } = props;

    return (
        <button
            onClick={handleBtnClick}
            className={
                cn(st.root,
                className,
                { [st.reversed]: reversed })}>
            {text}
            
        </button>
    );
};

Button.defaultProps = {
    reversed: false,
}

Button.propTypes = {
    text: PropTypes.string,
    reversed: PropTypes.bool,
    className: PropTypes.string,
    onBtnClick: PropTypes.func,
}

export default Button;