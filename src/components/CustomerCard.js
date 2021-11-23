import {
  Avatar,
  Card,
  CardActions,
  CardHeader,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import { Favorite, Share } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  avatar: {},
}));

const CustomerCard = ({ name, lastname, email, avatar }) => {
  const classes = useStyles({ name, lastname, email, avatar });

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar className={classes.avatar} aria-label='recipe' src={avatar}>
            R
          </Avatar>
        }
        title={`${name} ${lastname}`}
        subheader={email}
      />

      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <Favorite />
        </IconButton>
        <IconButton aria-label='share'>
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};
export default CustomerCard;
