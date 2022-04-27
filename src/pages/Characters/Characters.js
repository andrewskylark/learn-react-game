import PropTypes from 'prop-types';
import { useState } from 'react';
// import cn from 'classnames';

import Container from '../../components/Container';
import Heading from '../../components/Heading';
import CharacterCard from '../../components/CharacterCard';
import CHARACTERS from '../../consts/CHARACTERS';

import st from './Characters.module.scss'

const Characters = () => {
    const [characters, setCharacters] = useState(CHARACTERS);
    const [id, setId] = useState(null);

    const handleLikeClick = (id) => {

        setCharacters(prevState => prevState.map((card) => {
            if (card.id === id) {
                card.isLike = !card.isLike;
            }
            return card;
        }))
    }
    const handleBioClick = (id) => {
        setId(id)
    }

    return (
        <>
            <section className={st.cardSection}>
                <Container>
                    <div className={st.cardTitle}>
                        <Heading underline>
                            Marvel Cards
                        </Heading>
                    </div>
                    <div className={st.cardWrapper}>
                        {
                            characters.map((item) => {
                                return (
                                    <CharacterCard
                                        key={item.id}
                                        id={item.id}
                                        charName={item.name}
                                        humanName={item.humanName}
                                        thumb={item.thumbnail.path}
                                        descr={item.description}
                                        isLike={item.isLike}
                                        onLikeClick={handleLikeClick}
                                        onBioClick={handleBioClick}
                                    />
                                )
                            })
                        }
                    </div>
                </Container>
            </section>
        </>
    );
};

Characters.propTypes = {
    id: PropTypes.number,
    isShownBio: PropTypes.bool,
    onBackClick: PropTypes.func,
}

export default Characters;