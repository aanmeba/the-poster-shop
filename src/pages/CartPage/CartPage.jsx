import { useState, useEffect, useContext } from "react";
import CartCard from "../../components/CartCard/CartCard";
import CartTotal from "../../components/CartTotal/CartTotal";
import PageContainer from "../../components/PageContainer/PageContainer";
import Title from "../../components/Title/Title";
import { updateDocument } from "../../services/firestore-services";
import { clearLocalStorage } from "../../helpers/helpers";
import { useNavigate } from "react-router-dom";
import CTAButton from "../../components/CTAButton/CTAButton";
import { GlobalContext } from "../../context/GlobalContextProvider";

const CartPage = ({ items }) => {
  const initialOrder = {};
  const { onClick } = useContext(GlobalContext);

  items.forEach((item) => {
    const { quantity, variantId, priceInVariant } = item;
    if (Object.prototype.hasOwnProperty.call(initialOrder, variantId)) {
      initialOrder[variantId].orderQty++;
      initialOrder[variantId].subTotal =
        initialOrder[variantId].orderQty * initialOrder[variantId].price;
    } else {
      initialOrder[variantId] = {
        orderQty: quantity,
        price: priceInVariant,
        subTotal: quantity * priceInVariant,
      };
    }
  });
  const [order, setOrder] = useState(initialOrder);
  const [total, setTotal] = useState(0);

  const calculateTotal = (id, qty, price) => {
    setOrder((prev) => {
      const found = prev[id];
      found.orderQty = qty;
      found.subTotal = qty * price;
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

  const handleDelete = (buttonId, item, variantId) => {
    const filteredOrder = Object.fromEntries(
      // eslint-disable-next-line no-unused-vars
      Object.entries(order).filter(([k, v]) => k !== variantId)
    );

    setOrder(filteredOrder);
    onClick(buttonId, item, variantId);
  };

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
          <CartCard
            key={i}
            item={item}
            calculateTotal={calculateTotal}
            handleDelete={handleDelete}
          />
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
