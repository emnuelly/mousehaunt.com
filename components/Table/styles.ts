import styled from 'styled-components';

export const Styles = styled.div`
width: 100%;

  table {
    width: 100%;
    margin-top: 40px;
    border-spacing: 0px;
    border-collapse: collapse; 

    tr {
      &:last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    th{
      color: #848484;
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
    }

    tr {
      border-radius: 12px;

    }
  }
`;
