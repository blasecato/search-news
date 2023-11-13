import { Container, Grid, Typography } from "@mui/material";
import FormSearchNew from "./components/Organisms/FormSearchNew/FormSearchNew";
import ListNews from "./components/Organisms/ListNews/ListNews";
import { NewProvider } from "./context/NewsProvider";

function App() {
  return (
    <NewProvider>
      <Container>
        <header>
          <Typography component="h3" variant="h3" align="center">
            Buscador de noticias
          </Typography>
        </header>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item md={6} xs={12} lg={4}>
            <FormSearchNew />
          </Grid>
        </Grid>
        <ListNews />
      </Container>
    </NewProvider>
  );
}

export default App;
