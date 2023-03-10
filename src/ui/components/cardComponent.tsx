import React from 'react';
import { Card, CardActions, CardContent, Button, Typography, styled, Link, Box } from "@mui/material";

const CustomCardComponent = styled(Card)(({ theme }) => ({
  borderRadius: 15,
}));

const ProfileImg = styled(Box)(({ theme }) => ({
  height: 90,
  width: 90,
  borderRadius: '100%',
  marginBottom: 20,
  overflow: 'hidden',
  background: theme.colors.contrastColor
}));

export const CustomCard = () => {
  return (
    <CustomCardComponent>
      <CardContent>
        <ProfileImg>
          <img src="https://designaneri.github.io/img/about-img.png" alt="" className="image-offset"/>
        </ProfileImg>
        <Typography variant='h4' color="text.primary" gutterBottom>
          I'm Aneri Shah
        </Typography>
        <Typography variant="body1" sx={{mb: 2}}>
          I’m a Front-End Developer located in India. I have a serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
        </Typography>
        <Typography variant="body1" sx={{mb: 2}}>
          Well-organised person, problem solver, independent employee with high attention to detail.
        </Typography>
        <Typography variant="body1">
          <Link href="https://designaneri.github.io/">Learn More about Me</Link>
        </Typography>
      </CardContent>
     
    </CustomCardComponent>
  );
};

export default CustomCard;
