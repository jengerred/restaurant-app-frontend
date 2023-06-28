
import {gql,useQuery} from '@apollo/client';
import Dishes from "../components/dishes";
import {useContext, useState} from 'react';
import Link from "next/link";
import Cart from "../components/cart";
import AppContext from "../components/context";
import {Row, Col} from "reactstrap";



  function Menu() {

    
return (
    <>
    <h1>This is where the specials will be</h1>
    <Row>
    <Col>Specials</Col>
 
    <Col>
<Cart></Cart>
</Col>
</Row>
    </>
)
}
  



  export default Menu;
  