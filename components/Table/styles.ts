import styled from 'styled-components';

export const Styles = styled.div`
width: 100%;

  table {
    width: 100%;
    margin-top: 40px;
    border-spacing: 0px;
    border-collapse: collapse; 

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
    }
    th:nth-child(1) {
      width: 40px;
      text-align: center;
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
      }
      td:nth-child(4){
        width: 200px;
      }
    }
    tr:nth-child(1) {
      text-align: center;
      background-color:unset;
    }
  }
  tr:nth-child(2) {
    td:nth-child(1) {
      border-radius: 12px 0px 0px 0px;
    }
    td:nth-child(4) {
      border-radius: 0px 12px 0px 0px;
    }
  }
  tr:last-child {
    td:nth-child(1) {
      border-radius: 0px 0px 0px 12px;
    }
    td:nth-child(4) {
      border-radius: 0px 0px  12px 0px;
    }
  }
`;

interface Props {
  status: string
}
export const StatusBadge = styled.div<Props>`
  background-color: ${props => props.status === 'AVAILABLE' ? "#374A5F" : "#52345D"};
  height: 50px;
  width: 160px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${props => props.status === 'AVAILABLE' ? "2px solid #458B72" : "2px solid #A04766"};
  div {
  font-family: "Bebas Neue Pro";
  font-size: 20px !important; 
  }
`