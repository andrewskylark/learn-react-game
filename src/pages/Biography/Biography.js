import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import st from './Biography.module.scss'
import Button from '../../components/Button';

const Biography = (props) => {
    const { id, onBackClick, isShown } = props;

    const handleBackClick = () => {
        console.log('back click Bio isShown:' + isShown)
        onBackClick(isShown);
    }

    return (
        <section
            className={cn(st.root)}>
            <Button
                text="Go Back" reversed
                handleBtnClick={handleBackClick}
            />
            BIO
            <p>{ id }</p>
            
        </section>
    );
};

// Biography.defaultProps = {
//     reversed: false,
// }

Biography.propTypes = {
    id: PropTypes.number,
    isShown: PropTypes.bool,
    onBackClick: PropTypes.func,
}

export default Biography;