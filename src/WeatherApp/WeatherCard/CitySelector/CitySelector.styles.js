import styled from "styled-components";

export const CitySelector__Container = styled.div`
    position: relative;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-between;
    width: 60%;
    border: 5px solid aqua;
    background: #F5F5F5;
    border-radius: 8px;
`

export const CitySelector__Input = styled.input`
    text-align: center;
    font-weight: bold;
    font-size: 2rem;
    flex-grow: 1;
`

export const CitySelector__Button = styled.button`
    position: absolute;
    z-index: 1;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    
    font-size: 1.5rem;
    
    background: none;
    border: none;
    cursor: pointer;
`
export const CitySelector__Dropdown = styled.ul`
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: white;
    list-style: none;
    padding: 0;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    z-index: 10;
`;

export const CitySelector__DropdownItem = styled.li`
    font-size: 1.2rem;
    font-weight: bold;
    padding: 10px;
    cursor: pointer;
    &:hover {
      background-color: #eee;
    }
`;