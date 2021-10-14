import { Toolbar, Container } from '@mui/material';
import React from 'react';
import { HeaderStyled, LogoStyled } from './Header.style';

const Header: React.FC = () => {
    return (
        <HeaderStyled position={'sticky'}>
            <Toolbar component={Container}>
                <LogoStyled src={'/img/logos/logo.svg'} alt={'e-diaristas'} />
            </Toolbar>
        </HeaderStyled>
    );
};

export default Header;