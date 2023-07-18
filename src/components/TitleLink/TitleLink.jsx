import Title from "../Title/Title";
import { NavLink } from "react-router-dom";

const TitleLink = ({ dark }) => {
  return (
    <NavLink to="/" style={{ textDecoration: "none" }}>
      <Title dark={dark}>the poster shop</Title>
    </NavLink>
  );
};

export default TitleLink;
