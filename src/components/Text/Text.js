import React from 'react';
import cN from 'classnames';
import PropTypes from 'prop-types';
import Container from '../Container';

import st from './Text.module.css';

const Text = (props) => {
    const { el, strong, italic, disabled, children, className } = props;//деструктуризация пропсов

    const textNode = React.createElement(el, {
        className: cN(st.root, 
            {[st.strong]:strong}, 
            {[st.italic]:italic}, 
            {[st.disabled]:disabled},  
            className)
    }, children)

    return (
        <Container>
            { textNode}
        </Container>
    )

}

Text.defaultProps = {
    strong: false,
    italic: false,
    disabled: false,
    className: null,
}

Text.propTypes = {
    el: PropTypes.oneOf(['div', 'p', 'span']).isRequired,
    strong: PropTypes.bool,
    italic: PropTypes.bool,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node
}

export default Text;