import { styled } from "@mui/material"

const Highlights = () => {
    const StyledDiv = styled("div")(({ theme }) => ({
        height: "100vh",
        backgroundColor: theme.palette.secondary.main
    }))
    return (
        <StyledDiv>

        </StyledDiv>
    )
}

export default Highlights