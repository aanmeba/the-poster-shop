import Button from "../../components/Button/Button";
import CartCard from "../../components/CartCard/CartCard";
import PageContainer from "../../components/PageContainer/PageContainer";
import styles from "./CartPage.module.scss";

const CartPage = ({ items }) => {
  const totalPrice = items.reduce((prev, curr) => prev + curr.price, 0);

  return (
    <PageContainer>
      {items?.length > 0 ? (
        items.map((item, i) => <CartCard key={i} item={item} />)
      ) : (
        <h1>Your shopping bag is empty</h1>
      )}
      <div>
        <h1>total: {totalPrice} </h1>
      </div>
      <div>
        <Button dark>Pay Now</Button>
      </div>
    </PageContainer>
  );
};

export default CartPage;

{
  /* <PageContainer>
<table className={styles.table}>
  <thead>
    <tr>
      <th>product</th>
      <th>details</th>
      <th>price</th>
    </tr>
  </thead>
  <tbody className={styles.table__body}>
    {items?.length > 0 ? (
      items.map((item, i) => <CartCard key={i} item={item} />)
    ) : (
      <h1>Your shopping bag is empty</h1>
    )}
  </tbody>
</table>
</PageContainer> */
}
