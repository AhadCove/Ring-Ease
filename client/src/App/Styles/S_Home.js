import styled from 'styled-components';
import Colors from './Colors';

export const HomeContain = styled.div`
    background-color: ${Colors.bg};
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
    font-size:3rem;
    color:${Colors.white};
`
export const SubTitle = styled.div`
    font-size:2.5rem;
    color:${Colors.white};
`

export const OptionRow = styled.div`
    margin-top:150px;
    display:flex;
    align-items:center;
    justify-content: space-around;
`

export const OptionContain = styled.div`
    cursor:pointer;
    height: 300px; width:300px;
    background: linear-gradient(135deg, ${Colors.iceCreamBeige}, ${Colors.iceCreamBlue});
    color: ${Colors.white};
    font-size: 1.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    transition: all 2s ease;

    &:hover{
        background: linear-gradient(135deg, ${Colors.iceCreamBlue}, ${Colors.iceCreamBeige});    
    }
`
export const OptionTitle = styled.div`

`
export const OptionEnter = styled.div`

`
