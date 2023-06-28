/* pages/checkout.js */

import React, { useContext } from "react";
import { Row, Col } from "reactstrap";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/checkoutForm";
import AppContext from "../components/context";
import Cart from "../components/cart";

function Checkout() {
  // get app context
  const {isAuthenticated} = useContext(AppContext);
  // isAuthenticated is passed to the cart component to display order button
 // const isAuthenticated  = true;

  // load stripe to inject into elements components

  const stripePromise = loadStripe(
  // " pk_test_51HaLhVGgpfLkdZwmHVQcCOdUzwLWqV7umg9EbicemJqLOcLBPDrPtszruyxf4UzqH0lKwaNj5se3tHldNx92nPjI00Zoi8VgBN "
    " pk_test_51NIwYcDmUeg0Tz3HUdhyoibJ2QJ9WvoN2iRJo4ZUQcuUGJqKK510hLeL7OCbFeAnxRmZrdH9dKWavIQVzr0wPax800HuqoboPL "
   );

  return (
    <Row>
      <Col style={{ paddingRight: 0 }} sm={{ size: 3, order: 1, offset: 2 }}>
    
        <Cart isAuthenticated={isAuthenticated} />
      </Col>
      <Col style={{  marginLeft: "20px" }} sm={{ size: 6, order: 2 }}>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </Col>
    </Row>
  );
  // }
}
export default Checkout;
