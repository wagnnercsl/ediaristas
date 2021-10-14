import React from 'react';
import { Typography, Box } from '@mui/material';
import { AppList, FooterContainer, FooterStyled, FooterTitle } from './Footer.style';

const Footer = () => {
    return (
        <FooterStyled>
            <FooterContainer>
                <Box sx={{ maxWidth: '400px'}}>
                    <FooterTitle>Quem somos</FooterTitle>
                    <Typography variant={'body2'} sx={{ mt: 2 }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Ea deserunt, minima consequuntur omnis id et fuga dolorem rerum, 
                        iusto, nihil totam ex? Porro veritatis adipisci at, quae eos 
                        quia accusantium.
                    </Typography>
                </Box>
                <div>
                    <FooterTitle>Baixe nossos aplicativos</FooterTitle>
                    <AppList>
                        <li>
                            <a
                                href={'/'}
                                target={'_blank'}
                                rel={'noopener noreferrer'}
                            >
                                <img 
                                    src={'/img/logos/app-store.png'}
                                    alt={'App Store'}
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href={'/'}
                                target={'_blank'}
                                rel={'noopener noreferrer'}
                                >
                                <img 
                                    src={'/img/logos/google-play.png'}
                                    alt={'Google Play'}
                                    />
                            </a>
                        </li>
                    </AppList>
                </div>
            </FooterContainer>
        </FooterStyled>
    );
}

export default Footer;