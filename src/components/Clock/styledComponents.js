import styled from 'styled-components'

export const MainCon=styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    background-color: black;
    background-size:cover;
    padding:50px;
`

export const Button=styled.button`
    background-color:skyblue;
    color:white;
    border:none;
    cursor: pointer;
    font-weight: bold;
    padding:10px;
    border-radius: 10px;
`

export const ClockCon=styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding:50px;
    margin:20px;
    background-color:white;
    border-radius: 20px;
`

export const Heading=styled.h1`
    color:black;
    font-weight: bold;
`

export const Time=styled.p`
    color:black;
    font-weight: bold;
`