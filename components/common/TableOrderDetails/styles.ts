import styled from 'styled-components';

export const Styles = styled.div`
  width: 95%;
  margin: auto;

  
  table {
    width: 100%;
    border-spacing: 0px;
    border-collapse: collapse; 
    text-align: left;

    tr {
      border-radius: 12px;
      margin:10px;


      &:last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    th {
      color: #848484;
      text-align: left;
      font-family: "SF Pro Display";
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
    }
    th:nth-child(1) {
      width: 40px;
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      color: white;
      &:last-child {
        border-right: 0;
      }
      div {
        font-family: "SF Pro Display";
        font-weight: 600;
        font-size: 24px;


        b {
          font-size: 16px;
          color: #EE0CA1;
          margin-top: -20px;
        }
      }
    }

    tr {
      border-radius: 12px;
      background-color: #29274b;
      td {
        min-width: 150px;

        @media only screen and (max-width: 600px) {
          min-width: 75px;
        }
      }
      td:nth-child(4){
        width: 200px;
      }
    }
  }
  
  @media only screen and (max-width: 600px) {
       overflow-x: scroll; 
       overflow-y: hide;
       flex-direction: column;

  }
  
 
`;

interface Props {
  status: string
}

export const EventText = styled.text`
    color: #FFFFFF;
    text-transform: uppercase;
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
`;

export const PriceText = styled.text`
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    background: -webkit-linear-gradient(#EE0CA1, #D742B6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export const FromText = styled.text`
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color:  #0882F2;
   background: -webkit-linear-gradient(#0882F2, #1FC6EC);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

`;
export const DateText = styled.text`
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    
    color: #FFFFFF;
`;