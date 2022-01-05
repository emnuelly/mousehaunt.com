import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 8px;
    margin-left: 5px;
    
    width: 288px;
    height: 250px;
        
    background: #29274B;
    border-radius: 12px;
    position: relative;
    z-index: 2;
    
    @media only screen and (max-width: 600px) {
        margin-right: 10px;
    }
    

`;

export const ContainerTitle = styled.div`
    flex-direction: column;
    align-items: flex-start;
    margin-top: 15px;
`;

export const Title = styled.div`
  font-family: "Bebas Neue Pro";
  font-weight: 800;
  font-size: 18px;
`;

export const Subtitle = styled.div`    
    font-family: "Bebas Neue Pro";
    font-size: 16px;
    
    b {
    order: 1;
    background-image: linear-gradient(96.82deg, #f2089f 0%, #1fc6ec 100%);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }
`;

export const Image = styled.div`
    width: 272px;
    height: 170px;
    border-radius: 12px;
    background-image: url("/images/collection/collection.png");
    background-repeat: no-repeat;
`;
