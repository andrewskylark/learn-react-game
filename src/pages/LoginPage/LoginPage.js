import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';

import logo from './assets/logo.png';
import { ReactComponent as ToggleIcon } from './assets/icon-pen.svg';
import Heading from '../../components/Heading';
import Input from '../../components/Input/Input';
import Button from '../../components/Button';

import st from './LoginPage.module.scss';
import Text from '../../components/Text/Text';

const LoginPage = () => {
    const [active, setActive] = useState(false);
    const [errShown, setErrShown] = useState(false);
    const [form, setForm] = useState({});

    const signinRef = useRef(null);
    const signupRef = useRef(null);

    useEffect(() => {
        //focus form input on Load
        window.addEventListener('load', () => {
            signinRef.current && signinRef.current.focus();
        }, {// EventListener has options; this once - no need to remove Listener 
            once: true,
        })
    }, []);

    const handleToggleClick = () => {
        setForm({});
        setActive(prevState => !prevState);
        //sets focus in signup email, timeout for animation of popup to appear
        setTimeout(() => {
            signupRef.current && signupRef.current.focus();
        }, 1000)
    }
    const handleCloseClick = () => {
        setActive(prevState => !prevState);
        signinRef.current && signinRef.current.focus();
    }
    const handleChangeForm = (evt) => {
        setForm(prevState => ({
            ...prevState,
            [evt.target.name]: evt.target.value,
        }))
    }
    const handleSubmitForm = (evt) => {
        evt.preventDefault();

        if (form.repeatPassword && form.repeatPassword !== form.password) {
            setErrShown(true);
        } else {
            console.log(form);
            evt.target.reset();//resets current form
            setForm({})
            setErrShown(false);
        }
    }
    
    return (
        <section className={st.root}>
            <div className={st['header-logo']}>
                <img src={logo} alt="Logo" />
            </div>
            <div className={cn(st.container, { [st.active]: active })}>
                <div className={st.card}></div>
                <div className={st.card}>
                    <Heading className={st.title}>Login</Heading>

                    <form onChange={handleChangeForm} onSubmit={handleSubmitForm}>
                        <Input type='email' id='email' label='Email' name='email' ref={signinRef} emptyForm={form}>
                        </Input>
                        <Input type='password' id='password' label='Password' name='password' emptyForm={form}>
                        </Input>
                        <div className={st['button-container']}>
                            <Button btnStyle='card'><span>Go</span></Button>
                        </div>
                    </form>
                </div>

                <div className={cn(st.card, st.alt)}>
                    <div className={cn(st.toggle, { [st.active]: active })} onClick={handleToggleClick}>
                        <ToggleIcon />
                    </div>
                    <Heading className={st.title}>
                        Register
                        <div className={st.close} onClick={handleCloseClick}></div>
                    </Heading>

                    <form onChange={handleChangeForm} onSubmit={handleSubmitForm} >
                        <Input className={st.inputContainer} inputStyle='alt' type='email' id='signup-email' label='Email' name='email' emptyForm={form} ref={signupRef}>
                        </Input>
                        <Input className={st.inputContainer} inputStyle='alt' type='password' id='signup-password' label='Password' name='password' emptyForm={form}>
                        </Input>
                        <Input className={st.inputContainer} inputStyle='alt' type='password' id='signup-repeat-password' label='Repeat Password' name='repeatPassword' emptyForm={form}>
                            {errShown && <Text className={st.err}>Passwords do not match</Text>}
                        </Input>
                        <div className={st['button-container']}>
                            <Button btnStyle='card-alt'><span>Register</span></Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;