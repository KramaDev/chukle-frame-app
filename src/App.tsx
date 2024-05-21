import Card from "./components/card";
import Grid from "./components/grid";
import Header from "./components/header";
import Layout from "./components/layout";

const App = () => {
  return (
    <>
      <Header />
      <Layout>
        <Grid>
          {[...Array(100)].map((_, index) => (
            <Card key={index} imgUrl={`https://source.unsplash.com/random/?&${index}`} />
          ))}
        </Grid>
      </Layout>
      <h3 className="sign">Developed by Mario Kramarić © 2024. </h3>
    </>
  );
};

export default App;
