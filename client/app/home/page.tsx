import { Header, Footer } from "../components/index";
import Card from "./Card";

const Home = () => {
  const cardClasses = "w-screen h-fit my-10";
  return (
    <>
      <Header />
      <Card cardClasses={cardClasses} />
      <Footer />
    </>
  );
};

export default Home;
