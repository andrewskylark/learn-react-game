import st from './Contacts.module.scss'

import Container from '../../components/Container';
import Heading from '../../components/Heading';
import Text from '../../components/Text';

const Contacts = () => {
    return (
        <>
            <section
                className={st.root}>
                <Container>
                    <Heading>Contacts:</Heading>
                    <Heading lvl={2}>
                        Learning React.js with <a href="https://it-course.online/">Zar Zakharov</a>
                    </Heading>
                    <Text>
                        My contacts: coming soon
                    </Text>

                </Container>
            </section>
        </>
    );
};

export default Contacts;