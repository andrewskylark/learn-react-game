import st from './Container.module.scss';
import cn from 'classnames';

const Container = (props) => {
    const { children, className } = props;

    return (
        <div className={cn(st.root, className)}>
            { children }
        </div>
    )
}

export default Container;