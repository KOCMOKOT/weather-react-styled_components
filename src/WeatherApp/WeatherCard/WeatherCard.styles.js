import styled from "styled-components";

export const WeatherCard__Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    padding: 1.5rem 0 2rem;
    
    background: #F5F5F5;
    border-radius: 35px;
    
    max-width: 770px;
`

export const WeatherCard_Item = styled.div`
    ${({$variant}) => {
        switch ($variant) {
            case 'second':
                return `margin-top: 2rem;`;
            case 'third':
                return `
                    margin-top: 3rem;
                    width: 80%;
                    `;
            default:
                return ``;
        }
    }}
`