import { ButtonBody } from '../styles/FilterBody';
import { Link } from '../../Link';
import { MdOutlineClose } from 'react-icons/md';
import React, { useContext } from 'react';
import Router from 'next/router';

import { MarketContext } from '../../../../contexts/MarketPlaceContext';

interface Props {
  containerDisplayed?: boolean;
  chosenMice?: [{}];
  displayHeart?: (id: number) => void;
  checkIfNotThere?: (id: number, bool?: boolean) => void;
  clickedChosenMice?: (mice?: []) => void;
  buttonBody?: boolean;
}

const DisplayBody: React.FC<Props> = ({
  containerDisplayed,
  chosenMice,
  displayHeart,
  checkIfNotThere,
  clickedChosenMice,
  buttonBody,
}) => {
  const { setAlert } = useContext(MarketContext);

  const checkMiceAmount = () => {
    if (chosenMice.length > 1) {
      window.scrollTo(0, 0);
      return setAlert(true);
    }

    return Router.push({
      pathname: '/marketplace/details',
      query: { mice: chosenMice[0]?.id },
    });
  };
  const displayChosenMices = () => {
    if (!chosenMice) return;
    return Object.values(chosenMice).map((e: any) => {
      return (
        <div key={e.id}>
          <div>{e.name}</div>
          <div
            onClick={() => {
              clickedChosenMice(e);
              checkIfNotThere(e.id, true);
              displayHeart(e.id);
            }}
          >
            <MdOutlineClose />
          </div>
        </div>
      );
    });
  };

  return containerDisplayed || chosenMice?.length >= 1 ? (
    <ButtonBody>
      {chosenMice && chosenMice.length <= 0 ? (
        <div>No heroes selected</div>
      ) : (
        displayChosenMices()
      )}

      {buttonBody && <Link onClick={() => checkMiceAmount()}>CHOOSE HERO</Link>}
    </ButtonBody>
  ) : (
    <div></div>
  );
};

export default DisplayBody;
