import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import st from './Biography.module.scss'

import Text from '../../components/Text';
import Heading from '../../components/Heading';
import Button from '../../components/Button';
import Container from '../../components/Container';
import { BIO } from './BIO';

const Biography = (props) => {
    const { id, onBackClick, isShownBio } = props;
    let character = BIO[id];

    const handleBackClick = () => {
        onBackClick(isShownBio);
    }

    return (
        <section
            className={cn(st.root)}>
            <Container>
                <Button
                    text="Go Back" reversed
                    className="btnBack"
                    handleBtnClick={handleBackClick}
                />
                {
                    character.map((item, i) => {
                        let node;

                        switch (item.type) {
                            case 'h1':
                                node = <Heading>{item.text}</Heading>
                                break;

                            case 'h2':
                                node = <Heading lvl={2}>{item.text}</Heading>
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