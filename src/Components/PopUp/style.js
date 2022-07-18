import styled from 'styled-components';



export const Container = styled.div`


@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@100&display=swap');

    width: 100%;
    height: 100%;
    background-color: rgba(2, 48, 89, 0.2);

    position: fixed;
    right: 0;
    top: 0;
    
    display: flex;
    justify-content: center;
    align-items: center;
    

`


export const Section = styled.div`
    width: 320px;
    height: 285px;
    display: flex;
    flex-direction: column;
    align-items: center ;
    background: #FEFEFE;
    border-radius: 5px;

`

export const Titulo = styled.div`

    
    width: 260px;
    height: 25px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 30px;

    #nome{
        h3{
            width: 147px;
            height: 25px;
            font-family: 'Kanit', sans-serif;
            font-style: italic;
            font-weight: bold;
            font-size: 17px;
            line-height: 25px;
        

            color: #023059;
        }
    }

    #botao{
        button{
            border: none;
            cursor: pointer;
            background: #FEFEFE;
            padding: 16px;
        }
    }

`


export const Form = styled.form`
    width: 260px;
    height: 90px;

`

export const Email   = styled.div`

    background-color: aqua;
    width: 260px;
    height: 40px;
    display: flex;
    justify-content: center;
    input{
        width: 260px;

        background: #EFEFEF;
        border-radius: 2px;
        border: none;
        padding-left: 15px;
        padding-top: 12px;
        padding-bottom: 12px;

        ::placeholder {
            font-family: 'Kanit';
            font-style: italic;
            font-weight: 1000;
            font-size: 11px;
            line-height: 16px;


            color: #023059;
        }
    }

    margin-bottom: 10px;

`



export const Senha   = styled.div`


    width: 260px;
    height: 40px;
    display: flex;
    justify-content: center;
    input{
        width: 260px;
        background: #EFEFEF;
        border-radius: 2px;
        border: none;
        padding-left: 15px;
        padding-top: 12px;
        padding-bottom: 12px;

        ::placeholder {
            font-family: 'Kanit';
            font-style: italic;
            font-weight: 1000;
            font-size: 11px;
            line-height: 16px;


            color: #023059;
        }
    }

    button{
        border: none;
        cursor: pointer;
    }

`

export const Botao   = styled.div`

    width: 260px;
    height: 50px;
    padding-top: 30px;
    button{
        width: 260px;
        height: 50px;

        background: #F20F38;
        border-radius: 2px;
        border: none;

        font-family: 'Kanit', sans-serif;
        font-style: italic;
        font-weight: 700;
        font-size: 15px;
        line-height: 22px;

        color: #FEFEFE;
    }

`


