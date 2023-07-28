import { useState, useEffect } from "react";
import CartCard from "../../components/CartCard/CartCard";
import CartTotal from "../../components/CartTotal/CartTotal";
import PageContainer from "../../components/PageContainer/PageContainer";
import Title from "../../components/Title/Title";
import { updateDocument } from "../../services/firestore-services";
import { clearLocalStorage } from "../../helpers/helpers";
import { useNavigate } from "react-router-dom";
import CTAButton from "../../components/CTAButton/CTAButton";

const CartPage = ({ items }) => {
  const initialOrder = {};
  items.forEach((item) => {
    if (initialOrder?.hasOwnProperty(item.id)) {
      initialOrder[item.id].orderQty++;
      initialOrder[item.id].subTotal =
        initialOrder[item.id].orderQty * initialOrder[item.id].price;
    } else {
      initialOrder[item.id] = {
        orderQty: 1,
        price: item.price,
        subTotal: 1 * item.price,
      };
    }
  });
  const [order, setOrder] = useState(initialOrder);
  const [total, setTotal] = useState(0);

  const calculateTotal = (id, qty) => {
    setOrder((prev) => {
      const found = prev[id];
      found.orderQty = qty;
      found.subTotal = qty * found.price;
      return { ...prev, [id]: found };
    });
  };
  const navigate = useNavigate();

  useEffect(() => {
    const sumTotal = Object.values(order).reduce(
      (prev, curr) => prev + curr.subTotal,
      0
    );
    setTotal(sumTotal);
  }, [order]);

  const handlePayment = () => {
    // deduct the qty from quantity

    updateDocument(order)
      .then(() => clearLocalStorage("cartItems"))
      .catch((err) => console.log("something went wrong...", err))
      .finally(() => navigate("/thanks"));
  };

  const message = "Your shopping bag is empty";
  const cta = "explore best sellers";

  return (
    <PageContainer>
      <Title dark capitalize>
        Shopping Bag
      </Title>
      {items?.length > 0 ? (
        items.map((item, i) => (
          <CartCard key={i} item={item} calculateTotal={calculateTotal} />
        ))
      ) : (
        <CTAButton message={message} cta={cta} />
      )}
      {items?.length > 0 && (
        <CartTotal total={total} handlePayment={handlePayment} />
      )}
    </PageContainer>
  );
};

export default CartPage;
