import st from './Container.module.css';
import cN from 'classnames';

const Container = (props) => {
    const { children, className } = props;

    return (
        <div className={cN(st.root, className)}>
            { children }
        </div>
    )
}

export default Container;