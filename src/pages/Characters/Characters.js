import { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Container from '../../components/Container';
import Heading from '../../components/Heading';
import CharacterCard from '../../components/CharacterCard';
// import CHARACTERS from '../../consts/CHARACTERS';
import { LikesContext } from '../LikesProvider/LikesProvider';

import st from './Characters.module.scss'

const Characters = () => {
 
    const { likedCards, setLikedCards } = useContext(LikesContext);
    const [characters, setCharacters] = useState(likedCards);
    
    console.log(likedCards)

    const handleLikeClick = (id) => {

        setCharacters(prevState => prevState.map((card) => {
            if (card.id === id) {
                card.isLike = !card.isLike;
            }
            return card;
        }))
    }

    useEffect(() => {
        setLikedCards(characters);
    }, [characters]);


    return (
        <section className={st.root}>
            <Container>
                <div className={st.cardTitle}>
                    <Heading underline>
                        Marvel Cards
                    </Heading>
                </div>
                <div className={st.cardWrapper}>
                    {
                        likedCards.map((item) => {
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
                                />
                            )
                        })
                    }
                </div>
            </Container>
        </section>
    );
};

Characters.propTypes = {
    id: PropTypes.number,
}

export default Characters;