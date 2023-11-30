
import React from "react";
import Card from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Img variant="top" src={imageUrl} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Team: {team}<br />
          Nationality: {nationality}<br />
          Jersey Number: {jerseyNumber}<br />
          Age: {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

Player.defaultProps = {
  name: "unknown",
  team: "unknown",
  nationality: "unknown",
  jerseyNumber: "unknown",
  age: "unknown",
  imageUrl: "https://cdn.vectorstock.com/i/preview-1x/62/38/avatar-13-vector-42526238.jpg",
};

export default Player;
