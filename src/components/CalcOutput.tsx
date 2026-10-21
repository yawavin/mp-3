import styled from "styled-components";

const CalcOutput = styled.h3<{$color: string}>`
    color: ${props => props.$color};
    background-color: #4d2718;
    padding: 10px;
    flex-direction: row;
    border: solid 1px seagreen;
    font-weight: bold;
    width: 50%;
    margin: 3% auto;
`
export default CalcOutput