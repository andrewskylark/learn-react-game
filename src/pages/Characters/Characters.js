import { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { cardsIdCardSelector, like } from '../../store/cardsSlice';

import Container from '../../components/Container';
import Heading from '../../components/Heading';
import CharacterCard from '../../components/CharacterCard';
import { LikesContext } from '../../context/LikesContext/LikesContext';
import useFetch from '../../hooks/useFetch';

import st from './Characters.module.scss'

const Characters = () => {
    const { likedCards, setLikedCards } = useContext(LikesContext);

    const [data, isLoading, error] = useFetch('http://localhost:4000/characters'); //self made hook gets data from server json

    const cardsIdSelector = useSelector(cardsIdCardSelector);
    const dispatch = useDispatch();
    const [characters, setCharacters] = useState(likedCards);
    const handleLikeClick = (id) => {
        dispatch(like(id));
        // setCharacters(prevState => prevState.map((card) => {
        //     if (card.id === id) {
        //         card.isLike = !card.isLike;
        //     }
        //     return card;
        // }))
    }

    // useEffect(() => {
    //     setLikedCards(characters);
    // }, [characters]);

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
                        isLoading && <Heading>Loading...</Heading>
                    }
                    {
                      data !== null && data.map((item) => {
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