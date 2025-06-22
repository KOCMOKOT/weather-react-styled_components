import styled from "styled-components";

export const WeatherApp__Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    
    height: 100vh;
    
    padding: 10%;
    background-color: ${({ weather }) => {
        switch (weather) {
            case 'Clear': return '#FFD700';
            case 'Rain': return '#87CEEB';
            case 'Snow': return '#E0F7FA';
            case 'Clouds': return '#B0BEC5';
            case 'Loading': return '#FFD700';
            default: return '#FFF';
        }
    }};
    //background: #C2E2EA;

    & > * {
        width: 100%;
    } 
`