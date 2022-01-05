import styled from 'styled-components';

export const BurgerContainer = styled.div`
  display: none;

    .right{
        margin-left: 40%;
    }

  .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    left: 85%;
    top: 3%;
    z-index: 3000 !important;
  }

  .bm-burger-bars {
    background: #fff;
  }

  .bm-burger-bars-hover {
    background: #fff;
  }

  .bm-cross {
    background: #ee0ca1;
  }

  .bm-menu-wrap {
    position: fixed;
    height: 100%;
    top: 0;
  }

  /* General sidebar styles */
  .bm-menu {
    background: #0f0e23;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }

  .bm-item-list {
    color: white;
    padding: 0.8em;
  }

  .bm-item {
    display: inline-block;
    padding: 25px;
    &:hover {
      color: #ee0ca1;
      transition: color 0.5s ease;
    }
  }
  .bm-cross{
    width: 3px !important;
    height: 30px !important;
  }
  a:last-child {
    margin-left: 0%;
  }

  .bm-cross-button {
    left: 10% !important;
  }

  .bm-overlay {
    top: 0px;
    left: 0px;
  }
 

  @media only screen and (max-width: 600px) {
    display: block;
  }
`;

export const ButtonStarted = styled.div`
    @media only screen and (min-width: 600px) {
        display: none;
      }
`;
