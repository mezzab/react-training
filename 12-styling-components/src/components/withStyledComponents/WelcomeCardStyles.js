import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(166, 200, 111, 0.5);
  padding: 1rem 0 0;
  border-radius: 1rem;
  margin: 0 0 1rem;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(166, 200, 111);
  padding: 1rem;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
`;

const Item = styled.div`
  ${(props) => props.customColor && `color: ${props.customColor}`}
`;

export const Name = styled(Item)``;

export const Email = styled(Item)``;

export const Phone = styled(Item)`
  color: ${(props) => (props.condition ? "red" : "black")};
`;

export const Heading = styled.h3`
  padding: 0 1rem;
`;
