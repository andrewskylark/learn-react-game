import React from 'react';
import { useState } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import { ReactComponent as HeartSvg } from './assets/heart.svg'

import st from './CharacterCard.module.scss';
import Heading from '../Heading';
import Text from '../Text';

const CharacterCard = (props) => {
    const { id, thumb, charName, humanName, descr } = props;//деструктуризация пропсов
    const [active, setActive] = useState(false);
    const handleLikeClick = () => {
        console.log('click');
        setActive(prevState => !prevState);
    }

    return (
        <div className={st.root}>
            <div className={st.root}>
                <img src={thumb}
                    alt={charName} className={st.cardImage} />
                <div className={st.cardDetails}>
                    <Heading className={st.cardName} lvl={2}>
                        {charName}
                    </Heading>
                    <Heading className={st.cardHumanName} lvl={3}>
                        {humanName}
                    </Heading>
                    <Text className={st.cardDescription}>
                        {descr}
                    </Text>

                    <div className={st.cardMeta}>
                        <div
                            onClick={handleLikeClick}
                            className={cn(st.like, { [st.active]: active })}>
                            <HeartSvg />
                        </div>
                        <div className={st.readBio}>
                            <a href="!#">Read bio</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

// Character.defaultProps = {
//     strong: false,
//     italic: false,
//     disabled: false,
//     className: null,
// }

CharacterCard.propTypes = {
    id: PropTypes.number,
    thumb: PropTypes.string,
    charName: PropTypes.string,
    humanName: PropTypes.string,
    descr: PropTypes.string,
}

export default CharacterCard;