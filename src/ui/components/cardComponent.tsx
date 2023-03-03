import React from 'react';
import { Card, CardActions, CardContent, Button, Typography, styled } from "@mui/material";

const CustomCardComponent = styled(Card)(({ theme }) => ({

}));

export const CustomCard = (props: any) => {
  const { breadcrumbs } = props;
  return (
    <CustomCardComponent>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </CustomCardComponent>
  );
};

export default CustomCard;
