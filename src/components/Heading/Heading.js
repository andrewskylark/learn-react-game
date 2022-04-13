import React from 'react';
import cN from 'classnames';

import st from './Heading.module.css';

const Heading = (props) => {
    const { children, lvl = 1 , className} = props;//деструктуризация пропсов
    const el = `h${lvl}`;
    
    return React.createElement(el, {
        className: cN(st.root, st[`lvl${lvl}`], className)
    }, children)

}

export default Heading;