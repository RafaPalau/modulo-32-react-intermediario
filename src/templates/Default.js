import { Container } from "@material-ui/core";
import Header from "../partials/Header";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "15px 0",
  },
}));

const Default = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <Header />
      <Container className={classes.container}>{children}</Container>
    </>
  );
};
export default Default;
