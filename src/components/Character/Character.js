import React from 'react';
// import cn from 'classnames';
import PropTypes from 'prop-types';

import { ReactComponent as HeartSvg } from './assets/heart.svg'

import st from './Character.module.scss';
import Heading from '../Heading';
import Text from '../Text';

const CHARACTER = {
    id: 1011334,
    name: 'Spider-Man',
    description: 'Bitten by a radioactive spider, Peter Parker’s arachnid abilities give him amazing powers he uses to help others, while his personal life continues to offer plenty of obstacles.',
    thumbnail: {
        path: 'https://firebasestorage.googleapis.com/v0/b/it-course-84ddd.appspot.com/o/marvel-game%2Fspider-man.png?alt=media&token=8ff4b083-81ed-449f-823c-c79110735d1b'
    },
    humanName: 'Peter Parker',
    isLike: false,
  };

const Character = (props) => {
    const { thumb, name, humanName, description } = CHARACTER;//деструктуризация пропсов

    return (
        <div className={st.root}>
            <div className={st.root}>
                <img src={CHARACTER.thumbnail.path}
                    alt={name} className={st.cardImage} />
                <div className={st.cardDetails}>
                    <Heading className={st.cardName} lvl={2}>
                        {name}
                    </Heading>
                    <Heading className={st.cardHumanName} lvl={3}>
                        {humanName}
                    </Heading>
                    <Text className={st.cardDescription}>
                        {description}
                    </Text>

                    <div className={st.cardMeta}>
                        <div className={st.like}>
                            <HeartSvg />
                        </div>
                        <div className={st.readBio}>
                            <a href="!#">Read bio</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

// Character.defaultProps = {
//     strong: false,
//     italic: false,
//     disabled: false,
//     className: null,
// }

// Character.propTypes = {
//     el: PropTypes.oneOf(['div', 'p', 'span']).isRequired,
//     strong: PropTypes.bool,
//     italic: PropTypes.bool,
//     disabled: PropTypes.bool,
//     className: PropTypes.string,
//     children: PropTypes.node
// }

export default Character;