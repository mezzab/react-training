import React from "react";

//Import styled components
import {
  Container,
  Inner,
  Heading,
  Name,
  Email,
  Phone
} from "./WelcomeCardStyles";

const GreetingCard = ({ name, email, phone }) => {
  const isTrue = phone.length < 10;

  return (
    <Container>
      <Heading>Made Using Styled Components</Heading>
      <Inner>
        <Name customColor="brown">Name: {name}</Name>
        <Email>Email: {email}</Email>
        <Phone condition={isTrue}>Phone: {phone}</Phone>
      </Inner>
    </Container>
  );
};

export default GreetingCard;

/*
PROS/CONS:
 + more reusable
 + normal syntax, natural css
 + props
*/
