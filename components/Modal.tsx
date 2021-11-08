import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  width: 420px;
  height: 544px;

  background: #0f0e23;

  border: 1px solid #29274b;
  box-sizing: border-box;
  border-radius: 12px;
`;

const Modal = () => (
  <Container>
    <ModalContainer>
      <h1></h1>
    </ModalContainer>
  </Container>
);

export default Modal;
