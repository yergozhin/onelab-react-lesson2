import styled from "styled-components"

export default function Person({person}) {
    return (
        <StyledContainer allow={person.name !== "name"}>
            <tr>
                <td>{person.name}</td>
                <td>{person.surname}</td>
                <td>{person.phone}</td>
            </tr>
        </StyledContainer>
    )
}
/*background-color: ${(props) => props.allow ? "green" : "red"};*/
const StyledContainer = styled("div")`
`