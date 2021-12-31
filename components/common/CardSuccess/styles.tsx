import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px;
    
    height: 677px;
        
    background: #0F0E23;
    border-radius: 12px;
    position: relative;
    z-index: 2;
    
      @media only screen and (max-width: 600px) {
        width: 100%;
        background: none;
        margin: unset;
            padding: 0px;
     }

`;

export const ContainerInfo = styled.div`
    flex-direction: column;
    align-items: flex-start;
    margin-top: 15px;
    display: inline-block;
    width: 100%;
    padding: 25px;
`;

export const Title = styled.div`
    font-family: Bebas Neue Pro;
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 32px;
    /* identical to box height, or 100% */
    
    text-align: center;
    
    /* Primary/White */
    
    color: #FFFFFF;
`;

export const Subtitle = styled.div`    
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;    
        
    color: #848484;
`;

export const Image = styled.div`
    width: 372px;
    height: 293px;
    margin-top: 10px;
    border-radius: 12px;
    background-image: url("/images/mouse-success.png");
    background-repeat: no-repeat;
`;

export const ContainerSubtitle = styled.div`
    flex-direction: row;
    margin-top: 20px;
    margin-bottom: 20px;
    justify-content: space-between;
    display: flex;
`;

export const Value = styled.div`
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 20px;
    /* identical to box height, or 111% */
    
    text-align: right;
    
    /* Primary/White */
    
    color: #FFFFFF;

`;
