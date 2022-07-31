import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const Login = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-style: solid;
  border-width: 1px;
  border-radius: 5px;
  color: #f20f38;
  padding: 40px 20px;
  width: 300px;
  height: 331px;
`;

export const Input = styled.input`
  padding: 0px 15px;
  gap: 10px;
  width: 260px;
  height: 40px;
  border-width: 0px;
  border-radius: 2px;
  background: #efefef;
  margin: 10px 20px 0px 20px;

  ::placeholder {
    font-family: Kanit;
    font-style: italic;
    color: #023059;
  }

  :focus {
    outline-color: #f20f38;
  }
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 15px;
  width: 260px;
  height: 50px;
  border: none;
  border-radius: 2px;
  background: #f20f38;
  cursor: pointer;
  font-family: "Kanit";
  font-style: italic;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  color: #efefef;
  margin: 40px 20px 0px 20px;
`;

export const Title = styled.h1`
  font-family: "Kanit", sans-serif;
  font-style: italic;
  font-weight: 700;
  font-size: 21px;
  line-height: 31px;
  color: #023059;
  margin: 30px; ;
`;

export const Logo = styled.img`
  display: flex;
  align-content: center;
  justify-content: center;
  margin-bottom: 30px;
  min-width: 10%;
  max-width: 10%;
`;
