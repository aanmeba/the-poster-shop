import Title from "../Title/Title";
import { NavLink } from "react-router-dom";

const TitleLink = () => {
  return (
    <NavLink to="/" style={{ textDecoration: "none" }}>
      <Title>the poster shop</Title>
    </NavLink>
  );
};

export default TitleLink;
