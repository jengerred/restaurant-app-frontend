import {useRouter} from "next/router"
import {gql,useQuery} from '@apollo/client';
import {useState, useContext} from 'react'
import Cart from "./cart"
import AppContext from "./context"
import AnchorLink from "react-anchor-link-smooth-scroll";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Row,
  Col} from "reactstrap";
function Dishes({restId}){
  const [restaurantID, setRestaurantID] = useState()
  const {addItem} = useContext(AppContext)

const GET_RESTAURANT_DISHES = gql`
  query($id: ID!) {
    restaurant(id: $id) {
      id
      name
      dishes {
        id
        name
        description
        price
        image {
          url
        }
      }
    }
  }
`;

  const router = useRouter();

  const { loading, error, data } = useQuery(GET_RESTAURANT_DISHES, {
    variables: { id: restId},
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>ERROR here</p>;
  if (!data) return <p>Not found</p>;

  let restaurant = data.restaurant;

  if (restId > 0){

    return (
      <>
   
      <h1 style={{marginTop: "20px",marginRight: "10px", fontFamily: 'georgia'}}>{restaurant.name}</h1><h1 style={{marginTop: "20px", fontFamily: "times-italic"}}> ~ Specials</h1>
        <Row>
          {restaurant.dishes.map((res) => (
            <Col xs="6" sm="4" style={{ marginTop: "2rem"}} key={res.id}>
              <Card className="cards" style={{maxWidth: "300px"}} >
                <CardImg
                  top={true}
                  style={{ height: 200 }}
                  src={`http://localhost:1337${res.image.url}`}
                />
                <CardBody>
                  <CardTitle style={{ fontWeight: 'bold', fontSize: '20px' }}>{res.name}</CardTitle>
                  <CardText>{res.description}</CardText>
                 <CardText>${res.price}</CardText>
                </CardBody>
                <div  className="card-footer">
                <AnchorLink href='#cart'><Button color="info"
                    outline
                   
                    onClick = {()=> addItem(res)}
                  >
                    + Add To Cart
                  </Button>
                  </AnchorLink>
                </div>
              </Card>
              
            </Col>

             
          
          ))}
             
          <Col id="cart">
             <Cart> </Cart>
             </Col>
            </Row>
           
        </>
        )}
        else{
          return <> <h1> Click </h1> <h1 className="text-info" style={{marginRight: "10px", marginLeft: "10px"}}>View Specials</h1>
          <h1>to see the dishes</h1></>
        }
    }
    export default Dishes
/*
import {useRouter} from "next/router"
import {gql,useQuery} from '@apollo/client';
import {useState, useContext} from 'react'
import Cart from "./cart"
import AppContext from "./context"
import AnchorLink from "react-anchor-link-smooth-scroll";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Row,
  Col} from "reactstrap";
function Dishes({restId}){
  const [restaurantID, setRestaurantID] = useState()
  const {addItem} = useContext(AppContext)

const GET_RESTAURANT_DISHES = gql`
  query($id: ID!) {
    restaurant(id: $id) {
      id
      name
      dishes {
        id
        name
        description
        price
        image {
          url
        }
      }
    }
  }
`;

  const router = useRouter();

  const { loading, error, data } = useQuery(GET_RESTAURANT_DISHES, {
    variables: { id: restId},
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>ERROR here</p>;
  if (!data) return <p>Not found</p>;

  let restaurant = data.restaurant;

  if (restId > 0){

    return (
      <>
   
      <h1 style={{marginTop: "20px",marginRight: "10px", fontFamily: 'georgia'}}>{restaurant.name}</h1><h1 style={{marginTop: "20px", fontFamily: "times-italic"}}> ~ Specials</h1>
        <Row>
          {restaurant.dishes.map((res) => (
            <Col xs="6" sm="4" style={{ marginTop: "2rem"}} key={res.id}>
              <Card className="cards" style={{maxWidth: "300px"}} >
                <CardImg
                  top={true}
                  style={{ height: 200 }}
                  src={`http://localhost:1337${res.image.url}`}
                />
                <CardBody>
                  <CardTitle style={{ fontWeight: 'bold', fontSize: '20px' }}>{res.name}</CardTitle>
                  <CardText>{res.description}</CardText>
                 <CardText>${res.price}</CardText>
                </CardBody>
                <div  className="card-footer">
                <AnchorLink href='#cart'><Button color="info"
                    outline
                   
                    onClick = {()=> addItem(res)}
                  >
                    + Add To Cart
                  </Button>
                  </AnchorLink>
                </div>
              </Card>
              
            </Col>

             
          
          ))}
             
          <Col id="cart">
             <Cart> </Cart>
             </Col>
            </Row>
           
        </>
        )}
        else{
          return <> <h1> Click </h1> <h1 className="text-info" style={{marginRight: "10px", marginLeft: "10px"}}>View Specials</h1>
          <h1>to see the dishes</h1></>
        }
    }
    export default Dishes
*/



/*

import {useRouter} from "next/router"
import {gql,useQuery} from '@apollo/client';
import {useState, useContext} from 'react'
import Cart from "./cart"
import AppContext from "./context"
import AnchorLink from "react-anchor-link-smooth-scroll";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Row,
  Col} from "reactstrap";
function Dishes({restId}){
  const [restaurantID, setRestaurantID] = useState()
  const {addItem} = useContext(AppContext)

const GET_RESTAURANT_DISHES = gql`
  query($id: ID!) {
    restaurant(id: $id) {
      id
      name
      dishes {
        id
        name
        description
        price
        image {
          url
        }
      }
    }
  }
`;

  const router = useRouter();

  const { loading, error, data } = useQuery(GET_RESTAURANT_DISHES, {
    variables: { id: restId},
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>ERROR here</p>;
  if (!data) return <p>Not found</p>;

  let restaurant = data.restaurant;

  if (restId > 0){

    return (
      <>
   
      <h1 style={{marginTop: "20px",marginRight: "10px", fontFamily: 'georgia'}}>{restaurant.name}</h1><h1 style={{marginTop: "20px", fontFamily: "times-italic"}}> ~ Specials</h1>
        <Row>
          {restaurant.dishes.map((res) => (
            <Col xs="6" sm="4" style={{ marginTop: "2rem"}} key={res.id}>
              <Card className="cards" style={{maxWidth: "300px"}} >
                <CardImg
                  top={true}
                  style={{ height: 200 }}
                  src={`http://localhost:1337${res.image.url}`}
                />
                <CardBody>
                  <CardTitle style={{ fontWeight: 'bold', fontSize: '20px' }}>{res.name}</CardTitle>
                  <CardText>{res.description}</CardText>
                 <CardText>${res.price}</CardText>
                </CardBody>
                <div  className="card-footer">
                <AnchorLink href='#cart'><Button color="info"
                    outline
                   
                    onClick = {()=> addItem(res)}
                  >
                    + Add To Cart
                  </Button>
                  </AnchorLink>
                </div>
              </Card>
              
            </Col>

             
          
          ))}
             
          <Col id="cart">
             <Cart> </Cart>
             </Col>
            </Row>
           
        </>
        )}
        else{
          return <> <h1> Click </h1> <h1 className="text-info" style={{marginRight: "10px", marginLeft: "10px"}}>View Specials</h1>
          <h1>to see the dishes</h1></>
        }
    }
    export default Dishes

*/



/*

import {useRouter} from "next/router"
import {gql,useQuery} from '@apollo/client';
import {useState, useContext} from 'react'
import AppContext from "./context"
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Row,
  Col} from "reactstrap";


function Dishes({restId}){
  const [restaurantID, setRestaurantID] = useState()
  const {addItem} = useContext(AppContext)

const GET_RESTAURANT_DISHES = gql`
  query($id: ID!) {
    restaurant(id: $id) {
      id
      name
      dishes {
        id
        name
        description
        price
        image {
          url
        }
      }
    }
  }
`;

  const router = useRouter();

  const { loading, error, data } = useQuery(GET_RESTAURANT_DISHES, {
    variables: { id: restId},
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>ERROR here</p>;
  if (!data) return <p>Not found</p>;

  let restaurant = data.restaurant;

  if (restId > 0){

    return (
      <>
       <h1>{restaurant.name}</h1>
        <Row>
          {restaurant.dishes.map((res) => (
            <Col xs="6" sm="4" key={res.id}>
              <Card style={{ margin: "0 10px", width: "300px"}}>
                <CardImg
                   top={true}
                   style={{ height: 200 }}
                  src={`http://localhost:1337${res.image.url}`}
                />
                <CardBody>
                  <CardTitle style={{ fontWeight: 'bold' }}>{res.name}</CardTitle>
                  <CardText>{res.description}</CardText>
                  <CardText>${res.price}</CardText>
                </CardBody>
                <div className="card-footer">
                  <Button color="info"
                    outline
                    color="primary"
                    onClick = {()=> addItem(res)}
                  >
                    + Add To Cart
                  </Button>
                  
                </div>
              </Card>
            </Col>
          ))}
       
        </>
        )}
        else{
          return <> <h1> Click the</h1> <h1 className="text-info" style={{marginRight: "10px", marginLeft: "10px"}}>restaurant</h1>
         <h1>to see the dishes</h1></>
        }
    }
    export default Dishes;

    */