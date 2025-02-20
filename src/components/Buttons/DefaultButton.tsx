import { styled } from "@mui/material"
import { FC, PropsWithChildren } from "react"

const DefaultButton: FC<PropsWithChildren> = ({ children }) => {
    const DefaultButton = styled("button")(() => ({
        color: "rgba(50,40,15,90%)",
        backgroundColor: "transparent",
        border: `2px solid rgba(50,40,15,90%)`,
        borderRadius: "5px",
        padding: "10px 15px",
        cursor: "pointer",
        fontSize: "1rem",
        '&:hover': {
            backgroundColor: 'rgb(10,30,10)',
            color: 'rgba(250,230,200,90%)'
        }
    }))
    return (
        <DefaultButton>{children}</DefaultButton>
    )
}

export default DefaultButton