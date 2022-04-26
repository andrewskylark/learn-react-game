import cn from 'classnames';

import st from './About.module.scss'

import Container from '../../components/Container';

const About = () => {
    return (
        <>
            <section
                className={cn(st.root)}>
                <Container>
                    ABOUT
                </Container>
            </section>
        </>
    );
};

export default About;