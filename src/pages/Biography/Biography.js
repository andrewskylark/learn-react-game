import React from 'react';
import cn from 'classnames';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

import Container from '../../components/Container';
import Heading from '../../components/Heading';
import Text from '../../components/Text';
import Button from '../../components/Button';
import { BIO } from '../../consts/BIO';
import useFetch from '../../hooks/useFetch';

import st from './Biography.module.scss'

const Biography = () => {
    const { id } = useParams();
    const [data, isLoading, error] = useFetch(`http://localhost:4000/bio/${id}`); //self made hook gets data from server json

    const navigate = useNavigate();

    if (!BIO[id]) {
        //если карта не найдена рендерит пустой компонент и вызывает navigate под капотом
        alert("card not found")
        return <Navigate to="/characters" replace />
    }
    const handleBackClick = () => {
        navigate(-1); //go to prev page
    }

    return (

        <section className={cn(st.root)}>
            <Container>
                <Button
                    btnStyle="inversed"
                    className={st.btnBack}
                    handleBtnClick={handleBackClick}
                >Go Back
                </Button>
                {
                    isLoading && <Heading>Loading...</Heading>
                }
                {
                    error && <Text>{error}</Text>
                }
                {
                    data !== null && data.text.map((item, i) => {
                        let node;

                        switch (item.type) {
                            case 'h1':
                            case 'h2':

                                node =
                                    <Heading
                                        lvl={parseInt(item.type.replace(/[^0-9.]/g, ''), 10)}
                                        anchorLink={`#${item.text.replace(/\s/g, '_')}`}
                                    >
                                        {item.text}
                                    </Heading>
                                break;

                            case 'paragraph':
                                node = <Text>{item.text}</Text>
                                break;

                            case 'img':
                                node = <img src={item.src} alt={`изображение к биографии персонажа`}></img>
                                break;

                            default:
                                break;
                        }

                        return (
                            <React.Fragment key={i}>
                                {node}
                            </React.Fragment>
                        )
                    })
                }
            </Container>
        </section>
    );
};

export default Biography;