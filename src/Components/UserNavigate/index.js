import React from "react";
import User from "../User";
import * as S from './style';

import { useUserContext } from '../../Hooks/useUserContext'
import PopUp from "../PopUp/índex";


function UserNavigate(){

    const {addUser, setAddUser} = useUserContext(false)




    function adicionaUsuario(e){

        e.preventDefault()
        setAddUser(!addUser);
    }

    var array = [
        {email : 'andre.martins@ccc.ufcg.edu.br'},
        {email : 'jose.arthur.brito@ccc.ufcg.edu.br'},
        {email : 'vitinho@ccc.ufcg.edu.br'},
        {email : 'davyson@ccc.ufcg.edu.br'},
        {email : 'kleber@ccc.ufcg.edu.br'},
        {email : 'jonatas@ccc.ufcg.edu.br'},
        
    ]

    function listarUsers(a){
        return(
            a.map((element,index)=>{
                return <User Identificador = {element} key = {'user-'+index}/>
            })
        )
    }

    return(
        <S.Container>
            <S.Content>
                <S.Envolter>
                    {
                        listarUsers(array)
                    }
                </S.Envolter>
            <S.Frame>
                    <button onClick={adicionaUsuario} admin = {addUser}>  
                            <h3> +  Adicionar Usuário </h3> 
                    </button>
            </S.Frame>
            </S.Content>
            <div>
                {addUser ? <PopUp/> : <div/> }
            </div>
        </S.Container>
    )

}

export default UserNavigate;