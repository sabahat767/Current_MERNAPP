import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ListGroup, Row, Col, Button } from "react-bootstrap";
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
// import { fetchAllPosts } from "../../store/apis";
import DeleteModal from "../sub-components/DeleteModal";
import { useHistory } from 'react-router-dom'

function Posts() {
  const [state, setstate] = useState([]);
  const history = useHistory();
  const [msg, setmsg] = useState('')
  const [reload, setreload] = useState(false)

  const handelDelete=(id)=>{
    alert("are you sure ?")
    console.log(id)
    axios.delete('http://localhost:4000/api/posts/'+id)
    .then((res) => {
      console.log(res.data);
      setmsg(`${id} is deleted successfully`);
      setreload(!reload)
    })
    .catch((e) => console.log(e));
// window.location='/posts';

  }
  useEffect(() => {
      axios.get('http://localhost:4000/api/posts/')
      .then((res) => {
        console.log(res.data);
        setstate(res.data.data);
      })
      .catch((e) => console.log(e));
      setmsg('')
  }, [reload]);
  
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
                <Col>{item.title}</Col>
                <Col>{item.description}</Col>
                <Col>
                  <Button 
                    variant="success"
                    size="sm"
                    as={Link}
                    to={"/single-post/" + item._id}
                  >
                    View
                  </Button>
                  <Button className="ml-2"
                    variant="success"
                    size="sm"
                    
                    onClick={()=>handelDelete(item._id)}
                  >
                    Delete
                  </Button>
                  {/* <DeleteModal handleDelete={handelDelete} id={item._id} /> */}
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

export default Posts;
