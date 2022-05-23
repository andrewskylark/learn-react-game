import cn from 'classnames';

import logo from './assets/logo.png';
import { ReactComponent as ToggleIcon } from './assets/icon-pen.svg';
import Heading from '../../components/Heading';
import Input from '../../components/Input/Input';
import Button from '../../components/Button';

import st from './LoginPage.module.scss';

const LoginPage = () => {
    return (
            <section className={st.root}>
                <div className={st['header-logo']}>
                    <img src={logo} alt="Logo" />
                </div>
                <div className={st.container}>
                    <div className={st.card}></div>
                    <div className={st.card}>
                        <Heading className={st.title}>Login</Heading>
                        <form>
                            <div className={st['input-container']}>
                                <Input type='email' id='email' label='Email'>
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
                        <div className={st.toggle}>
                            <ToggleIcon />
                        </div>
                        <Heading className={st.title}>
                            Register
                            <div className={st.close}></div>
                        </Heading>
                        <form>
                            <div className={st['input-container']}>
                                <Input type='email' id='signup-email' label='Email'>
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