import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { useParams } from 'react-router-dom';

import Container from '../../components/Container';
import Heading from '../../components/Heading';
import Text from '../../components/Text';
import Button from '../../components/Button';
import { BIO } from '../../consts/BIO';

import st from './Biography.module.scss'

const Biography = ({ onBackClick }) => {
    const { id } = useParams();
    let character = BIO[id];

    const handleBackClick = () => {
        onBackClick && onBackClick(id);
    }

    return (
        <>
            <section
                className={cn(st.root)}>
                <Container>
                    <Button
                        btnStyle="inversed"
                        className={st.btnBack}
                        handleBtnClick={handleBackClick}
                    >Go Back
                    </Button>
                    {
                        character.map((item, i) => {
                            let node;

                            switch (item.type) {
                                case 'h1':
                                case 'h2':
                                    let lvl = item.type.replace(/[^0-9.]/g, '');
                                    node = <Heading lvl={parseInt(lvl, 10)}>{item.text}</Heading>
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
        </>
    );
};

Biography.propTypes = {
    onBackClick: PropTypes.func,
}

export default Biography;