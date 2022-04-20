import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import st from './Button.module.scss'

const Button = (props) => {
    const { text, reversed } = props;

    const handleBtnClick = () => {
        alert('click')
    }

    return (
        <button
        onClick={handleBtnClick}
        className={cn(st.root, {[st.reversed]: reversed})}>
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
}

export default Button;