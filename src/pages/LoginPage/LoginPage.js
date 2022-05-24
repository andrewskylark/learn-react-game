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
    const signinRef = useRef(null);
    const signupRef = useRef(null);
    // This is equivalent to our componentDidMount, this will focus input
    useEffect(() => signinRef.current && signinRef.current.focus());

    const handleToggleClick = () => {
        setActive(prevState => !prevState);
        //sets focus in signup email, timeout for animation of popup
        setTimeout(() => {
            signupRef.current && signupRef.current.focus();
        }, 1000) 
    }
    const handleCloseClick = () => {
        setActive(prevState => !prevState);
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
                    <form>
                        <div className={st['input-container']}>
                            <Input type='email' id='email' label='Email' inputRef={signinRef}>
                                <div className={st.bar}></div>
                            </Input>
                        </div>
                        <div className={st['input-container']}>
                            <Input type='password' id='password' label='Password'>
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
                    <form>
                        <div className={st['input-container']}>
                            <Input type='email' id='signup-email' label='Email' inputRef={signupRef}>
                                <div className={st.bar}></div>
                            </Input>
                        </div>
                        <div className={st['input-container']}>
                            <Input type='password' id='signup-password' label='Password'>
                                <div className={st.bar}></div>
                            </Input>
                        </div>
                        <div className={st['input-container']}>
                            <Input type='password' id='signup-repeat-password' label='Repeat Password'>
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