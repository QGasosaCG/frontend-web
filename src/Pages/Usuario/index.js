import React, {useState} from "react";
import * as S from './style';
import id from '../../Asssets/id.png'

import Postos from "../../Components/Postos";

import UserNavigate from "../../Components/UserNavigate";

function Usuario(){

    const [active, setActive] = useState(true)

    return (
        <S.Container>
            <S.Logo>            
                <img src={id} alt="Logo"/>
            </S.Logo>
            <S.Tabs>
                <S.Admin onClick={() => setActive(true)} admin={active}> Usuários Admin </S.Admin>
                <S.Postos onClick={() => setActive(false)} admin={active}> Postos </S.Postos>
            </S.Tabs>
            {active ? <UserNavigate/> : <Postos/>}
        </S.Container>
        

    )
}

export default Usuario;