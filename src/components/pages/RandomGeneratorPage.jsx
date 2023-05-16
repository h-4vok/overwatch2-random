import React, { useState } from "react";
import { StretchedButton, Title } from "../atoms";
import { HeroPresenter } from "../molecules";
import { Container, Box, Grid } from "@mui/material";
import { AllChars, TanksList, DpsList, SupportsList } from "../../lib/models";

const generateRandom = (list) => {
  return list[Math.floor(Math.random() * list.length)];
};

export const RandomGeneratorPage = () => {
  const [selectedTank, setSelectedTank] = useState(generateRandom(TanksList));
  const [selectedDps, setSelectedDps] = useState(generateRandom(DpsList));
  const [selectedSupport, setSelectedSupport] = useState(
    generateRandom(SupportsList)
  );
  const [selectedOpen, setSelectedOpen] = useState(generateRandom(AllChars));

  const onRandomizeClick = () => {
    setSelectedTank(generateRandom(TanksList));
    setSelectedDps(generateRandom(DpsList));
    setSelectedSupport(generateRandom(SupportsList));
    setSelectedOpen(generateRandom(AllChars));
  };

  return (
    <Container className="text-align--center">
      <Title>Overwatch 2 - Random Char Selector</Title>
      <Title variant="h6">
        Hi!. Im h4vok. I always played flex and all characters. And I always
        wanted a "Random" selector in overwatch. Tired of waiting, I created my
        own. Enjoy!
      </Title>
      <Title variant="h6">&nbsp;</Title>
      <StretchedButton onClick={onRandomizeClick}>Randomize</StretchedButton>
      <Box className="box">
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <HeroPresenter
              heroName={selectedTank.heroName}
              heroImgUrl={selectedTank.heroImgUrl}
              selectionType="Tank"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <HeroPresenter
              heroName={selectedDps.heroName}
              heroImgUrl={selectedDps.heroImgUrl}
              selectionType="DPS"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <HeroPresenter
              heroName={selectedSupport.heroName}
              heroImgUrl={selectedSupport.heroImgUrl}
              selectionType="Support"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <HeroPresenter
              heroName={selectedOpen.heroName}
              heroImgUrl={selectedOpen.heroImgUrl}
              selectionType="Open Queue"
            />
          </Grid>
        </Grid>
        &nbsp;
        <StretchedButton onClick={onRandomizeClick}>Randomize</StretchedButton>
      </Box>
    </Container>
  );
};
