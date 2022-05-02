import Heading from '../../components/Heading';
import gif from './assets/gif-marvel.gif';

import st from './NotFound.module.scss';

const NotFound = () => {
    return (
        <section className={st.root}>
            <Heading>
                404
            </Heading>
            <img src={gif} alt="marvel gif" />
        </section>
    );
};

export default NotFound;