import React from 'react';
import styled from 'styled-components';

const Nav = styled.div `
background-color: #FFFF00;
position: relative;
display:flex;
justify-content: space-between;
align-items: center;
width:100%;
height:60px;
`

const Item = styled.a `
  font-size: 16px;
  font-weight: bold;
  color:#000;
  padding: 10px;
`


export default function header(){
    return (
        <Nav>
            <Item>Home</Item>
            <Item>Parceiros</Item>
            <Item>Contato</Item>
        </Nav>
    );
};