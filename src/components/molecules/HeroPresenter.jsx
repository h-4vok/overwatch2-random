import { Paper, Stack } from "@mui/material";
import { Label } from "../atoms";

export const HeroPresenter = ({ heroName, heroImgUrl, selectionType }) => (
  <div>
    <Paper className="padding--40px hover-animation nft-row">
      <Stack direction="column">
        <img src={heroImgUrl} alt={heroName} />
        <Label variant="h5">{heroName}</Label>
        <Label variant="h5">{selectionType}</Label>
      </Stack>
    </Paper>
  </div>
);
