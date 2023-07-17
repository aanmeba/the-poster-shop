import {
  faCartShopping,
  faChevronLeft,
  faChevronRight,
  faHeart as faHeartSolid,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartEmpty } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const HeartSolid = () => {
  return <FontAwesomeIcon icon={faHeartSolid} />;
};

export const HeartEmpty = () => {
  return <FontAwesomeIcon icon={faHeartEmpty} />;
};

export const ShoppingCart = () => {
  return <FontAwesomeIcon icon={faCartShopping} />;
};

export const ArrowRight = () => {
  return <FontAwesomeIcon icon={faChevronRight} />;
};

export const ArrowLeft = () => {
  return <FontAwesomeIcon icon={faChevronLeft} />;
};
