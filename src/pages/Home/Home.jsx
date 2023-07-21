import Carousel from "../../components/Carousel/Carousel";
import CollectionWrapper from "../../components/Collections/CollectionWrapper";
import Hero from "../../components/Hero/Hero";
import Subtitle from "../../components/SubTitle/SubTItle";

const Home = () => {
  return (
    <>
      <Hero />
      <Subtitle>New Arrivals</Subtitle>
      <Carousel />
      <CollectionWrapper />
    </>
  );
};

export default Home;
