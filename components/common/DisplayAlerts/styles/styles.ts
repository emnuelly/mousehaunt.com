import styled from 'styled-components';

export const Container = styled.div`
  .alert {
    padding: 20px;
    background-color: #f44336;
    width: 50%;
    text-align: center;
    margin: 0 auto;
    color: white;
  }

  .alert.success {
    background-color: #04aa6d;
  }

  .closebtn {
    margin-left: 15px;
    color: white;
    font-weight: bold;
    float: right;
    font-size: 30px;
    line-height: 20px;
    cursor: pointer;
    transition: 0.3s;
  }

  .closebtn:hover {
    color: black;
  }
`;
