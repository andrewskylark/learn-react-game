import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types'

import st from './Heading.module.scss';

const Heading = (props) => {
    const { children, lvl = 1 , className} = props;//деструктуризация пропсов
    const el = `h${lvl}`;
    
    return React.createElement(el, {
        className: cn(st.root, st[`lvl${lvl}`], className)
    }, children)

}

Heading.propTypes = {
    lvl: PropTypes.oneOf([1, 2, 3, 4, 5]),
    className: PropTypes.string,
    children: PropTypes.node
}
export default Heading;