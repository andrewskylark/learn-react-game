import st from './Heading.module.css';

const Heading = (props) => {
    const { title } = props;//деструктуризация пропсов
    return (
        <h1 className={st.root}>
            {title}
        </h1>
    )
}

export default Heading;