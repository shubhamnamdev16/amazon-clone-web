import React from "react";
import "./Style/checkout.css";
import CurrencyFormat from "react-currency-format";
// import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useStateValue } from "./StateProvider";
import { getItemSubTotal } from "./reducer";

function Subtotal() {
  const [{ cart }, dispatch] = useStateValue();

  return (
    <>
      <div className="subtotal">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p className="item_subtotal">
                Subtotal ({cart.length} items) : <span>{value}</span>
              </p>
            </>
          )}
          decimalScale={2}
          value={getItemSubTotal(cart)}
          displayType={"text"}
          thousandSeparator={true}
        />
      </div>
    </>
  );
}

export default Subtotal;
