import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";

function App() {
  return (
    <>
      <TextField
        required
        id='standard-required'
        label='Required'
        defaultValue='Hello World'
      />
      <Button variant='contained' color='primary'>
        Hello World
      </Button>
    </>
  );
}

export default App;
