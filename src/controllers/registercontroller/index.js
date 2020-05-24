import React,{useState} from 'react'

import api from '../../services/api';

import { Link,useHistory } from 'react-router-dom';

import { FiTriangle,FiLogIn } from 'react-icons/fi';

import { FaGithub, FaLinkedin } from 'react-icons/fa';

import './style.css';

export default function Create(){

    const history = useHistory();

    const[email,setEmail] = useState('');
    const[name,setName] =   useState('');

    async function handleSubmit(e){
        e.preventDefault();
        const data = {
            email,
            name,
        }
        try {
            const response = await api.post('/users/create',data);
            alert(`Seu usuário foi cadastrado com id de : ${response.data.id}`);
            history.push('/index');
        } catch (err) {
            alert('Nao conseguimos te cadastrar no nosso sistema, verifique os dados inseridos e tente novamente');
        }
    }

    return(
        <div className="components-container">  
            <header>
                <h2>Hello world</h2>
                <p>Esse é um site de testes ("Hello world") bem simples apenas para testar um dos novos e empolgamentes lançamentos do mundo da programação:
                    <br/>
                    <br/>
                    <span>Prisma v2 <FiTriangle color={'#0c344b'} size={16} /></span>
                    <br/>
                    <br/>
                    que é basicamente um kit de ferramentas para banco de dados que facilita muito trabalhar com SQL em NodeJS
                    <br/>
                    <br/>
                    Aproveite!!
                </p>
            </header>
            <div className="merchandise">
                <a href='https://github.com/fernandotec'target='_blank' rel='noopener noreferrer'>
                    <FaGithub size={30} color='0c344b'/>
                </a>
                <a href='https://www.linkedin.com/in/fernando-rodrigues-5b57b2198/'target='_blank' rel='noopener noreferrer'>
                    <FaLinkedin size={30} color='0c344b'/>
                </a>
            </div>
            <form onSubmit={handleSubmit} >
                <h2>Crie um usuário !!</h2>
                <input
                    type='email'
                    required
                    placeholder='Email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    placeholder='Nome'
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <button type='submit' >Cadastrar</button>
                <Link to='/index' >
                    <div>
                        <FiLogIn size={18} color='#0c344b'/>
                    </div>
                    Já tem cadastro?
                </Link>
            </form>
        </div>

    )
}