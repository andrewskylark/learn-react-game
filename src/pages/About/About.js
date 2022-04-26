import PropTypes from 'prop-types';
import cn from 'classnames';

import st from './About.module.scss'

// import Heading from '../../components/Heading';
import Container from '../../components/Container';
// import Text from '../../components/Text';
// import Button from '../../components/Button';
// import { BIO } from '../../consts/BIO';

const About = ({ id, onBackClick }) => {
    return (
        <section
            className={cn(st.root)}>
            <Container>

            </Container>
        </section>
    );
};

About.propTypes = {
    id: PropTypes.number,
    isShownBio: PropTypes.bool,
    onBackClick: PropTypes.func,
}

export default About;