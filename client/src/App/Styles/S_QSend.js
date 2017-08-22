import styled from 'styled-components';
import Colors from './Colors';

export const QSendContain = styled.div`
    background-color: ${Colors.bg};
    // background-color: black;
    width: 100vw;
    height: 100vh;
    font-size: 16px;
    text-align: center;
    overflow:hidden;
    // overflow-x: hidden;
    // padding: 0 auto;
    // font-family: 'Lato', sans-serif;
    // font-family: 'Open Sans', sans-serif;
    // font-family: 'Vollkorn', serif;
    // font-family: 'Playfair Display', serif;
    // font-family: 'Cinzel Decorative', cursive;
    text-align: center;

@media screen and (min-width: 360px) {}

@media screen and (min-width: 600px) {}

@media screen and (min-width: 700px) {}

@media screen and (min-width: 768px) {}

@media screen and (min-width:920px) {}

@media screen and (min-width: 1000px) {}
`

export const Title = styled.div`
    font-size:1.4rem;
`
export const Label = styled.label`
    // display:block;
    margin-right:10px;
`
export const Input = styled.input`
    // display:block;
    margin:auto;

`
export const Submit = styled.button`
    display:block;
    margin:auto;
    margin-top:30px;
`
export const Error = styled.div`
    margin: 5px auto 5px auto;
    color: red;
    font-size:1.2rem;

`
