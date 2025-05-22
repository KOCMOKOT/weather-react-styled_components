import styled from "styled-components";

export const DayCard__Card = styled.div`
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    align-items: center;
    
    background: #E9EBEC;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(252, 255, 211, 0.1); 
`

export const DayCard__DayName = styled.p`
    font-size: 2.5rem;
    margin: 1rem 0;
`

export const DayCard__WeatherImg = styled.img`
    width: 120%;
`

export const DayCard__Temperature = styled.p`
    font-size: 2rem;
    margin: 1rem 0;
`