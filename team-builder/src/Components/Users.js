import React from "react";
import {
  Card,
  CardText,
  CardHeader,
  CardBody,
  CardSubtitle,
  CardFooter,
  Button,
} from "reactstrap";

export default function Users(props) {
  const container = {
    width: "80%",
    padding: "0 0 0 2em",
  };
  const handleClick = (index) => {
    props.deleteUser(index);
  };
  return (
    <div style={container}>
      {props.users.map((user, index) => (
        <Card key={index} style={{ margin: "10px" }}>
          <CardHeader>{user.user_name}</CardHeader>
          <CardBody>
            <CardSubtitle>Role</CardSubtitle>
            <CardText>{user.user_role}</CardText>
            <CardSubtitle>Email</CardSubtitle>
            <CardText>{user.user_email}</CardText>
          </CardBody>
          <CardFooter>
            <Button onClick={(event) => handleClick(index)}>Delete</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
