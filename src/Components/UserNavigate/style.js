import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.div`
  width: 1280px;
  height: 420px;
  background: #fefefe;
  padding-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  flex-wrap: wrap;
`;

export const Frame = styled.div`
  width: 1280px;
  height: 100px;
  display: flex;
  flex-direction: row-reverse;
  //background-color: aqua;
  align-items: center;
  padding-right: 30px;
  padding-bottom: 30px;

  button {
    width: 142px;
    height: 40px;
    background: #f20f38;
    border-radius: 2px;
    font-family: "Kanit", sans-serif;
    font-style: italic;
    font-weight: 700;
    font-size: 11px;
    line-height: 16px;
    border: none;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;

export const Envolter = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
