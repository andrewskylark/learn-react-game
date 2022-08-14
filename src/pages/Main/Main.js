import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Container from '../../components/Container';
import Slider from '../../components/Slider';
import Heading from '../../components/Heading';
import CharacterCard from '../../components/CharacterCard';

import st from './Main.module.scss'
import { cardsDataSelector, cardsErrorSelector, cardsIdCardSelector, cardsIsLoadingSelector, fetchCharactersAsync, like } from '../../store/cardsSlice';
import Text from '../../components/Text';
// import useFetch from '../../hooks/useFetch';

const Main = () => {
    // const [data, isLoading, error] = useFetch('http://localhost:4000/characters'); //self made hook gets data from server json
    const data = useSelector(cardsDataSelector);
    const isLoading = useSelector(cardsIsLoadingSelector);
    const error = useSelector(cardsErrorSelector)
    const cardsIdSelector = useSelector(cardsIdCardSelector);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCharactersAsync());
    }, []);
    // useEffect(() => {
    //     const cardsStorage = window.localStorage.getItem('cards') ?
    //         JSON.parse(window.localStorage.getItem('cards')) :
    //         characters;
    //     setCharacters(cardsStorage);
    // }, [])

    // useEffect(() => {
    //     setLikedCards(characters);
    //     window.localStorage.setItem('cards', JSON.stringify(characters));
    // }, [characters]);

    const handleLikeClick = (id) => {
        dispatch(like(id));
        // setCharacters(prevState => prevState.map((card) => {
        //     if (card.id === id) {
        //         card.isLike = !card.isLike;
        //     }
        //     return card;
        // }));
    }

    return (
        <>
            <Slider />
            <section className={st.cardSection}>
                <Container>
                    <div className={st.cardTitle}>
                        <Heading underline>
                            Marvel Cards
                        </Heading>
                        <Heading lvl={2}>
                            Choose your best five
                        </Heading>
                    </div>
                    <div className={st.cardWrapper}>
                        {
                            isLoading && <Heading>Loading...</Heading>
                        }
                        {
                            error && <Text>{error}</Text>
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
                                        isLike={cardsIdSelector[item.id]}
                                        onLikeClick={handleLikeClick}
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

Main.propTypes = {
    id: PropTypes.number,
}

export default Main;