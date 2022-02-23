import { Grid, Stack, TextField, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { useState } from "react";
const { REACT_APP_PASSWORD: AppPassword } = process.env;

const App = () => {
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (password === AppPassword) {
      setError("");
      /* 
       Redirect Logic here
      */
      return;
    }
    return setError("Incorrect Password!");
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Stack component="form" spacing={2} onSubmit={handleSubmit}>
        <TextField
          type="password"
          label="Enter Password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button size="large" variant="contained" type="submit">
          Submit
        </Button>

        <Typography variant="subtitle1" align="center" sx={{ color: "tomato" }}>
          {error}
        </Typography>
      </Stack>
    </Grid>
  );
};

export default App;
