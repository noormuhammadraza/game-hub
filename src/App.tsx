import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" bgColor="coral">
        NavBar
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bgColor="lightblue">
          SideBar
        </GridItem>
      </Show>
      <GridItem area="main" bgColor="pink">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
