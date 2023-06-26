import "./Style/checkout.css";
import CheckoutProductCard from "./CheckoutProductCard";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";

function Checkout(props) {
  const [{ cart }, dispatch] = useStateValue();
  return (
    <>
      <div className="checkout_page">
        <div className="checkout_wrap">
          <div className="checkout_left">
            <h2 className="checkout_title">Shopping Cart</h2>
            {cart.map((item) => (
              <CheckoutProductCard
                id={item.id}
                imgsrc={item.imgsrc}
                pTitle={item.pTitle}
                rating={item.rating}
                pRate={item.pRate}
              />
            ))}

            {/* <CheckoutProductCard
              imgsrc={require("./images/product_1.jpg")}
              rating={4}
              rate="1899"
            />
            <CheckoutProductCard
              imgsrc={require("./images/pro_2.jpg")}
              rating={2}
              rate="1799"
            />
            <CheckoutProductCard
              imgsrc={require("./images/pro_3.jpg")}
              rating={3}
              rate="1699"
            /> */}
          </div>
          <div className="checkout_right">
            <div className="proceed_checkout_col">
              <Subtotal />
              <button>Proceed to checkout</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
