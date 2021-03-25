import { Avatar } from '@material-ui/core'
import React from 'react'
import styled from "styled-components"

const Header = () => {
    return (
        <HeaderContainer>
            {/* header left */}
            <HeaderLeft>
                <HeaderAvatar
                //TODO: Add onclick
                />

            </HeaderLeft>
            {/* header search */}

            {/* header right */}
        </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.div``;

const HeaderLeft = styled.div``;

const HeaderAvatar = styled(Avatar)`

`;