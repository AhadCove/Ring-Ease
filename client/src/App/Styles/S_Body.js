import styled from 'styled-components';

export const Body = styled.div`
    width: 100%;
    height: 100%;
    font-size: 16px;
    text-align: center;
    // overflow-x: hidden;
    // padding: 0 auto;
    // font-family: 'Lato', sans-serif;
    // font-family: 'Open Sans', sans-serif;
    // font-family: 'Vollkorn', serif;
    // font-family: 'Playfair Display', serif;
    // font-family: 'Cinzel Decorative', cursive;
    text-align: center;

button:focus{
    outline:none;
}

button:hover {
    cursor: pointer;

}

a {
    text-decoration: none;
    color: inherit;
    &:visited {
        color: inherit;
    }
}

ul{
    list-style-type:none;
}

@media screen and (min-width: 360px) {}

@media screen and (min-width: 600px) {}

@media screen and (min-width: 700px) {}

@media screen and (min-width: 768px) {}

@media screen and (min-width:920px) {}

@media screen and (min-width: 1000px) {}
`

