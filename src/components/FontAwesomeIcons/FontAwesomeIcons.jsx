import {
  faBagShopping,
  faCartShopping,
  faChevronLeft,
  faChevronRight,
  faHeart as faHeartSolid,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFolder,
  faHeart as faHeartEmpty,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const Github = () => {
  return <FontAwesomeIcon icon={faGithub} />;
};

export const HeartSolid = () => {
  return <FontAwesomeIcon icon={faHeartSolid} />;
};

export const HeartEmpty = () => {
  return <FontAwesomeIcon icon={faHeartEmpty} />;
};

export const ShoppingCart = () => {
  return <FontAwesomeIcon icon={faCartShopping} />;
};

export const ShoppingBag = () => {
  return <FontAwesomeIcon icon={faBagShopping} />;
};

export const EmptyFolder = () => {
  return <FontAwesomeIcon icon={faFolder} />;
};

export const ArrowRight = () => {
  return <FontAwesomeIcon icon={faChevronRight} />;
};

export const ArrowLeft = () => {
  return <FontAwesomeIcon icon={faChevronLeft} />;
};

export const Delete = () => {
  return <FontAwesomeIcon icon={faTrashCan} />;
};
