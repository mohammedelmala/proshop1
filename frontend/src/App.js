
import { Container } from "react-bootstrap";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScrean from "./screans/HomeScrean";

function App() {
  return (
    <>

      <Header />
      <main className="py-3">
        <Container>
          <HomeScrean />
        </Container>
      </main>
      <Footer />


    </>
  );
}

export default App;
