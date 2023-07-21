import { useContext, useEffect, useState } from "react";
import { HeartEmpty, HeartSolid } from "../FontAwesomeIcons/FontAwesomeIcons";
import { GlobalContext } from "../../context/GlobalContextProvider";

const FavButton = ({ item, styleList }) => {
  const { onClick, globalState } = useContext(GlobalContext);
  const [isFilled, setIsFilled] = useState(false);

  const { id } = item;
  const { favItems } = globalState;

  useEffect(() => {
    // console.log(id, "---id in FavButton");
    favItems.find((el) => el.id === id) && setIsFilled(true);
  }, [id]);

  const handleClick = (e) => {
    e.preventDefault();
    const { id } = e.currentTarget;
    onClick(id, item);
    setIsFilled(!isFilled);
  };

  return (
    <div onClick={handleClick} id="addToFav" className={styleList}>
      {isFilled ? <HeartSolid /> : <HeartEmpty />}
    </div>
  );
};

export default FavButton;
