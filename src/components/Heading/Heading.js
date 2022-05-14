import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types'

import st from './Heading.module.scss';

import { ReactComponent as LinkIcon } from './assets/link_icon.svg';

const Heading = (props) => {
    const { children, lvl = 1, className, underline, anchorLink } = props;//деструктуризация пропсов
    const el = `h${lvl}`;

    return React.createElement(el, {
        className: cn(
            st.root,
            st[`lvl${lvl}`],
            className,
            { [st.underline]: underline }
        )
    }, children,
        anchorLink ? 
        <a href={anchorLink} id={anchorLink}>
            <LinkIcon />
        </a> 
        : null
    )

}

Heading.defaultProps = {
    underline: false,
}

Heading.propTypes = {
    lvl: PropTypes.oneOf([1, 2, 3, 4, 5]),
    className: PropTypes.string,
    children: PropTypes.node,
    underline: PropTypes.bool,
    anchorLink: PropTypes.string,
}
export default Heading;