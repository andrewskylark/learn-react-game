import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';

import logo from './assets/logo.png';
import { ReactComponent as ToggleIcon } from './assets/icon-pen.svg';
import Heading from '../../components/Heading';
import Input from '../../components/Input/Input';
import Button from '../../components/Button';

import st from './LoginPage.module.scss';

const LoginPage = () => {
    const [active, setActive] = useState(false);
    const [form, setForm] = useState({});

    const signinRef = useRef(null);
    const signupRef = useRef(null);
    const signinFormRef = useRef(null);
    const signupFormRef = useRef(null);

    useEffect(() => {
        //focus form input on Load
        window.addEventListener('load', () => {
            signinRef.current && signinRef.current.focus();
        }, {// EventListener has options; this once - no need to remove Listener 
            once: true,
        })
    }, []);

    const handleToggleClick = () => {
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
        console.log(form)
        evt.target.reset();//resets current form
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

                    <form ref={signinFormRef} onChange={handleChangeForm} onSubmit={handleSubmitForm} >
                        <div className={st['input-container']}>
                            <Input type='email' id='email' label='Email' name='email'
                                inputRef={signinRef}>
                                <div className={st.bar}></div>
                            </Input>
                        </div>
                        <div className={st['input-container']}>
                            <Input type='password' id='password' label='Password' name='password'>
                                <div className={st.bar}></div>
                            </Input>
                        </div>
                        <div className={st['button-container']}>
                            <Button><span>Go</span></Button>
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
                    
                    <form ref={signupFormRef} onChange={handleChangeForm} onSubmit={handleSubmitForm} >
                        <div className={st['input-container']}>
                            <Input type='email' id='signup-email' label='Email' name='email'
                                inputRef={signupRef}>
                                <div className={st.bar}></div>
                            </Input>
                        </div>
                        <div className={st['input-container']}>
                            <Input type='password' id='signup-password' label='Password' name='password'>
                                <div className={st.bar}></div>
                            </Input>
                        </div>
                        <div className={st['input-container']}>
                            <Input type='password' id='signup-repeat-password' label='Repeat Password' name='repeatPassword'>
                                <div className={st.bar}></div>
                            </Input>
                        </div>
                        <div className={st['button-container']}>
                            <Button><span>Register</span></Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;