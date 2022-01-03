import styled from 'styled-components'

export const Styles = styled.div`
  width: 100%;

  table {
    width: 100%;
    margin-top: 40px;
    border-spacing: 0px;
    border-collapse: collapse;

    tr {
      border-radius: 12px;
      margin: 10px;

      &:last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    th {
      color: #848484;
      text-align: left;
      font-family: 'SF Pro Display';
      font-weight: 400;
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
        font-family: 'SF Pro Display';
        font-weight: 600;
        font-size: 24px;

        b {
          font-size: 16px;
          color: #ee0ca1;
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
      td:nth-child(4) {
        width: 200px;
      }
    }
    tr:nth-child(1) {
      text-align: center;
      background-color: unset;
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
      border-radius: 0px 0px 12px 0px;
    }
  }
`

interface Props {
  status: string
}
export const Status = styled.button<Props>`
  background-color: ${(props) =>
    props.status === ''
      ? '#AEAEAE'
      : props.status === 'AVAILABLE'
      ? '#374A5F'
      : props.status === 'LOCKED'
      ? '#52345D'
      : props.status === 'CLAIMED'
      ? '#5C3336'
      : '#375E44'};
  border: ${(props) =>
    props.status === ''
      ? '#5F5F5F'
      : props.status === 'AVAILABLE'
      ? '2px solid #458B72'
      : props.status === 'LOCKED' || props.status === 'CLAIMED'
      ? '2px solid #A04766'
      : '2px solid #458B72'};
  cursor: ${(props) =>
    props.status === 'LOCKED' || props.status === 'CLAIMED' || props.status === ''
      ? ''
      : 'pointer'};
  height: 50px;
  width: 160px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Bebas Neue Pro';
  font-size: 20px !important;
  color: white;

  &:disabled {
    opacity: 0.5;
    cursor: default !important;
  }

  @media only screen and (max-width: 600px) {
    width: 80px;
    font-size: 12px !important;
  }
`

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-left: -25px;
  svg {
    height: 50px;
    margin-top: -10px;
    fill: rgba(55, 94, 68, 0.5);
  }
`
