import React from 'react';
import cn from 'classnames';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

import Container from '../../components/Container';
import Heading from '../../components/Heading';
import Text from '../../components/Text';
import Button from '../../components/Button';
import { BIO } from '../../consts/BIO';
import { ReactComponent as LinkIcon } from './assets/link_icon.svg';

import st from './Biography.module.scss'

const Biography = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    let character = BIO[id];

    if (!BIO[id]) {
        //если карта не найдена рендерит пустой компонент и вызывает navigate под капотом
        alert("card not found")
        return <Navigate to="/characters" replace />
    }
    const handleBackClick = () => {
        navigate(-1); //go to prev page
    }

    setTimeout(() => {
        let titleScrollTo = document.getElementById(window.location.hash);

        titleScrollTo && titleScrollTo.scrollIntoView({
            block: 'center',
            behavior: 'smooth'
        });
    }, 3000)

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
                    character.map((item, i) => {
                        let node;
                        let lvl;
                        let anchorLink;

                        switch (item.type) {
                            case 'h1':
                                lvl = item.type.replace(/[^0-9.]/g, '');
                                node =
                                    <Heading lvl={parseInt(lvl, 10)}>
                                        {item.text}
                                    </Heading>
                                break;

                            case 'h2':
                                lvl = item.type.replace(/[^0-9.]/g, '');
                                anchorLink = item.text.replace(/\s/g, '_');

                                node =
                                    <Heading lvl={parseInt(lvl, 10)}>
                                        {item.text}
                                        <a href={`#${anchorLink}`} id={`#${anchorLink}`}>
                                            <LinkIcon />
                                        </a>
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