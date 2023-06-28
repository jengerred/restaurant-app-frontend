import {gql,useQuery} from '@apollo/client';
import Dishes from "./dishes"
import {useContext, useState} from 'react';
import Link from "next/link";
import AnchorLink from "react-anchor-link-smooth-scroll";


import AppContext from "./context"
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Container,
  Row,
  Col} from "reactstrap";

function RestaurantList(props){
  const[restaurantID, setRestaurantID] = useState(0)
  const {cart } = useContext(AppContext);
  const [state, setState] = useState(cart)
  const GET_RESTAURANTS = gql`
    query {
      restaurants {
        id
        name
        description
        image {
          url
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_RESTAURANTS)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;
  console.log(`Query Data: ${data.restaurants}`)


let searchQuery = data.restaurants.filter((res) =>{
    return res.name.toLowerCase().includes(props.search)
  })

let restId = searchQuery[0].id
 
// definet renderer for Dishes
  const renderDishes = (restaurantID) => {
    return ( <Dishes restId={restaurantID}></Dishes> )
  };
if(searchQuery.length > 0){
  const restList = searchQuery.map((res) => (
    <Col xs="6" sm="4" key={res.id} style={{marginTop: "2rem"}}>
      <Card className="cards" style={{ margin: "0rem .5rem 20px 0.5rem", height: "100%"}} >
        <CardImg
          top={true}
          style={{ height: 200 }}
          src={
          `http://localhost:1337`+ res.image.url
          }
        />
        <CardBody>
        <CardTitle style={{ fontWeight: 'bold', fontSize: '20px', fontFamily: 'georgia'}}>{res.name}</CardTitle>
          <CardText>{res.description}</CardText>
        </CardBody>

        <div className="card-footer">
        <AnchorLink href='#dishes'> <Button color="info"  onClick={()=> setRestaurantID(res.id)} > 
                View Specials
              </Button>
              </AnchorLink> 
        </div>
        
      </Card>
     
    </Col>
  ))
  
  return(

    <Container>

    <Row xs='3'>
      {restList}
    </Row>
  

  <br/><br/>
  <hr></hr>
  <br/><br/>


    <Row id="dishes" xs='3' style={{marginTop: "1rem"}}>
    {renderDishes(restaurantID)}
    </Row>

    
  
    </Container>
    
  )
} else {
  return <h1> No Restaurants Found</h1>
}
}
   export default RestaurantList

/*
 <Button color="info"  onClick={()=> setRestaurantID(res.id)} href="/menu" >   
                View Specials
              </Button>
*/
/*
import {gql,useQuery} from '@apollo/client';
import Dishes from "./dishes"
import {useContext, useState} from 'react';
import Link from "next/link";


import AppContext from "./context"
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Container,
  Row,
  Col} from "reactstrap";

function RestaurantList(props){
  const[restaurantID, setRestaurantID] = useState(0)
  const {cart } = useContext(AppContext);
  const [state, setState] = useState(cart)
  const GET_RESTAURANTS = gql`
    query {
      restaurants {
        id
        name
        description
        image {
          url
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_RESTAURANTS)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;
  console.log(`Query Data: ${data.restaurants}`)


let searchQuery = data.restaurants.filter((res) =>{
    return res.name.toLowerCase().includes(props.search)
  })

let restId = searchQuery[0].id
 
// definet renderer for Dishes
  const renderDishes = (restaurantID) => {
    return    
    return (<Dishes restId={restaurantID}> </Dishes>)
  };
if(searchQuery.length > 0){
  const restList = searchQuery.map((res) => (
    <Col xs="6" sm="4" key={res.id}>
      <Card style={{ margin: "0 0.5rem 20px 0.5rem" }} onClick={()=> setRestaurantID(res.id)}>
        <CardImg
          top={true}
          style={{ height: 200 }}
          src={
          `http://localhost:1337`+ res.image.url
          }
        />
        <CardBody>
          <CardText>{res.description}</CardText>
        </CardBody>
        <div className="card-footer">
        <Button color="info" onClick={()=> setRestaurantID(res.id)}>{res.name}</Button>
        </div>
      </Card>
    </Col>
  ))

  return(

    <Container>
    <Row xs='3'>
      {restList}
    </Row>
  
    <Row xs='3'>
    {renderDishes(restaurantID)}
    </Row>

    </Container>
 
  )
} else {
  return <h1> No Restaurants Found</h1>
}
}
   export default RestaurantList

*/
