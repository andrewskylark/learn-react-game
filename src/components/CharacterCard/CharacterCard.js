import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import PropTypes from 'prop-types';

import { ReactComponent as HeartSvg } from './assets/heart.svg'

import st from './CharacterCard.module.scss';
import Heading from '../Heading';
import Text from '../Text';

const CharacterCard = (props) => {
    const { id, thumb, charName, humanName, descr, isLike, onLikeClick } = props;//деструктуризация пропсов

    const handleLikeClick = () => {
        onLikeClick && onLikeClick(id);// if onLikeClick = true execute onLikeClick(id)
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
                            className={cn(st.like, { [st.active]: isLike })}>
                            <HeartSvg />
                        </div>
                        <div className={st.readBio}>
                            <Link to={`/characters/${id}`}
                            >Read bio</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

CharacterCard.defaultProps = {
    isLike: false,
}

CharacterCard.propTypes = {
    id: PropTypes.number,
    thumb: PropTypes.string,
    charName: PropTypes.string,
    humanName: PropTypes.string,
    descr: PropTypes.string,
    isLike: PropTypes.bool,
    onLikeClick: PropTypes.func,
}

export default CharacterCard;