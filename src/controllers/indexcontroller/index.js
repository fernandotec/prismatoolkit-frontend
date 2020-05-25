import React,{useState,useEffect} from 'react';

import { FiSearch } from 'react-icons/fi';

import { FaShare } from 'react-icons/fa';

import api from '../../services/api';

import './style.css';
export default function Index(){

    const[email,setEmail] = useState('');
    const[users,setUsers] = useState([]);
    //É necessário colocar as chaves para indicar que estamos trabalhando com um array

    async function loadUsers(){
        const response = await api.get('/users/index');
        setUsers(response.data);
        console.log(response.data);
    }

    useEffect( () => {
        loadUsers();
        console.log(users);
    }, []);

    async function handleSearch(e){
        if(e.keyCode === 13){
            //Checando se a tecla apertada foi enter
            setEmail('');
          try {
            const response = await api.get('/users/index/unique',{
                headers: {
                    authorization:email
                }
            });
            setUsers(response.data);
          } catch (err) {
              alert('Não achamos nenhum usuário com estas credenciais')
              loadUsers();
          }
        }
    }

    return(
        <div className="components-container-2">
            <h2>Listagem e procura de usuários</h2>
            <div className="search-container">
                <div className="search">
                    <FiSearch color='white'size={28} />
                </div>
                <input
                    required
                    placeholder="Digite o email do usuário"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    onKeyUp={handleSearch}
                />
                <div className="send" >
                    <FaShare color='white'size={28} />
                </div>
            </div>
            <div className="users-container">
                <ul>
                    {users.map(user =>(
                        //Parênteses invés de chaves para simbolizar um retorno
                        <li>
                            <div className="single-user-container" >
                                <h2>{user.name}</h2>
                                <h3>{user.email}</h3>
                                <p>Id de cadastro: {user.id}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}