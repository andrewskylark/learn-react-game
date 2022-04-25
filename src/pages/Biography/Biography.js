import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import st from './Biography.module.scss'

import Text from '../../components/Text';
import Heading from '../../components/Heading';
import Button from '../../components/Button';
import Container from '../../components/Container';
import { BIO } from './BIO';

const Biography = ({ id, onBackClick }) => {
    let character = BIO[id];

    const handleBackClick = () => {
        onBackClick(id);
    }

    return (
        <section
            className={cn(st.root)}>
            <Container>
                <Button
                    text="Go Back" btnStyle="inversed"
                    className={st.btnBack}
                    handleBtnClick={handleBackClick}
                />
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
    );
};

// Biography.defaultProps = {
//     reversed: false,
// }

Biography.propTypes = {
    id: PropTypes.number,
    isShownBio: PropTypes.bool,
    onBackClick: PropTypes.func,
}

export default Biography;