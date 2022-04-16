import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Container from '../Container';

import st from './Text.module.scss';

const Text = (props) => {
    const { el, strong, italic, disabled, children, className } = props;//деструктуризация пропсов

    const textNode = React.createElement(el, {
        className: cn(
            { [st.strong]: strong },
            { [st.italic]: italic },
            { [st.disabled]: disabled },
            className)
    }, children)

    return (
        <section className={st.root}>
            <Container>
                {textNode}
            </Container>
        </section>
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