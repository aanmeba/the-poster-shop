import Button from "../Button/Button";
import styles from "./CartTotal.module.scss";

const CartTotal = ({ total, handlePayment }) => {
  return (
    <>
      <hr />
      <div className={styles.container}>
        <div className={styles.container__inner}>
          <div className={styles.total}>
            <p className={styles.total__price}>total: </p>
            <p className={styles.total__price}>${total}</p>
          </div>

          <Button dark fill onClick={handlePayment}>
            Pay Now
          </Button>
        </div>
      </div>
    </>
  );
};

export default CartTotal;
