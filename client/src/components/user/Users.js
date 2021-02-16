import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ListGroup, Row, Col, Button } from "react-bootstrap";
import axios from 'axios';

function Users() {
  const [state, setstate] = useState([]);
  const [dummy, setdd] = useState([
    {name:'Faiza',email:'faz@gmail.com',id:1},
    {name:'Shehla',email:'shehla@gmail.com',id:2},
  ]);
  const [msg,setmsg]=useState('');
 const handleDelete=(id)=>{
   console.log(id)
  axios.delete('http://localhost:4000/api/users/'+id)
  .then((res) => {
    console.log(res.data);
    setmsg(`${id} is deleted successfully`);
  })
  .catch((e) => console.log(e));
window.location='/users';
 } 
  useEffect(() => {
      axios.get('http://localhost:4000/api/users/')
      .then((res) => {
        console.log(res.data);
        setstate(res.data.data);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <Row className="mt-5">
      <Col lg={3} md={2} sm={1} xs={1}></Col>
      <Col lg={6} md={8} sm={10} xs={10}>
        <ListGroup>
          <ListGroup.Item style={{backgroundColor:"#264653",color:"white"}}>
            <Row className="col-headers">
              <Col>Name</Col>
              <Col>Email</Col>
              <Col>Actions</Col>
            </Row>
          </ListGroup.Item>

          {state.map((item, ind) => (
            <ListGroup.Item key={ind} variant="light">
              <Row>
                <Col>{item.name}</Col>
                <Col>{item.email}</Col>
                <Col>
                  <Button 
                    variant="success"
                    size="sm"
                    as={Link}
                    to={"/single-user/" + item._id}
                  >
                    View
                  </Button>
                  <Button 
                    variant="success"
                    className="ml-2"
                    size="sm"
                    as={Link}
                    to={"/single-user-update/" + item._id}
                  >
                    Update
                  </Button>
                  <Button 
                    variant="success"
                    size="sm"
                    className="ml-2"
                   onClick={()=>handleDelete(item._id)} //_id databse wali id
                  >
                   Delete
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))} 
        </ListGroup>
      </Col>
      <Col lg={3} md={2} sm={1} xs={1}></Col>
    </Row>
  );
}

export default Users;
