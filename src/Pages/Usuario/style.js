import styled from 'styled-components';


export const Container = styled.div`

    @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@100&display=swap');

    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

`

export const Logo = styled.div`
    width: 1280px;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img{
        width: 120px;
        height: 29px;
    }
`

export const Tabs = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 1280px;
    height: 50px;
    border-bottom: 2px solid #F20F38;


`

const EsqueletoButton = styled.button.attrs(({admin})=>({
    admin,
}))`
    width: 350px;
    height: 50px;
    border-radius: 5px 5px 0px 0px;
    border: 1px solid #F20F38;
    font-family: 'Kanit', sans-serif;
    font-style: italic;
    font-weight: 700;
    font-size: 15px;
    line-height: 22px;

    cursor: pointer;
`;

export const Admin = styled(EsqueletoButton)`
    background-color: ${({ admin }) => admin ? '#F20F38' : '#FEFEFE'};
    color: ${({ admin }) => admin ? '#FEFEFE' : '#F20F38'};
`


export const Postos = styled(EsqueletoButton)`
    background-color: ${({ admin }) => !admin ? '#F20F38' : '#FEFEFE'};
    color: ${({ admin }) => !admin ? '#FEFEFE' : '#F20F38'};
`

export const Content = styled.div`
    width: 1280px;
    height: 420px;
    background: #FEFEFE;
    border-top: 2px solid #F20F38;
    padding-top: 30px;
    display: flex;
    flex-direction: row;
    justify-content: start;
    flex-wrap: wrap;
`
