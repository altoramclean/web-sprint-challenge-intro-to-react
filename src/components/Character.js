// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const CharacterStyled = styled.div `
    border: 3px solid #FFA500;
    background-color: ##D2B48C;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    text-align: center;
    align-items: center;
    margin-left: 12.3%;
    width: 70%;
    
    &:hover {
        background: #000000;
        color: #808080 ;
    }
`

const Header = styled.h2`
    font-family: 'sans-serif';
`

const HeaderTwo = styled.h3`
    font-family: 'sans-serif';
    font-size: 1.8rem;
`

const ButtonStyling = styled.button`
    font-family: 'sans-serif'
    font-size: 2rem;
    padding: 2rem;
    margin-left: 50%;
    background-color: #F4A460;
    border-radius: 1.8rem;
    display: flex;
`

export default function Character({info}) {
    const [visible, setVisible] = React.useState(false);

    return (

        
        <CharacterStyled>
            <Header>
                <h2>{info.name}</h2>
            </Header>
                <ButtonStyling onClick={() => setVisible(!visible)}>
                {visible ? 'Hide' : 'Show Information Here'}
                </ButtonStyling>
                {visible && <div>


            <HeaderTwo>
                <h3>Gender: {info.gender}</h3>
                <h3>Height: {info.height}</h3>
                <h3>Mass: {info.mass}</h3>
                <h3>Birth Year: {info.birth_year}</h3>
                <h3>Eye Color: {info.eye_color}</h3>
                <h3>Hair Color: {info.hair_color}</h3>
                <h3>Skin Color: {info.skin_color}</h3>
            </HeaderTwo>
        </div>}
        </CharacterStyled>
    )
}