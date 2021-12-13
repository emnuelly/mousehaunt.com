import { ButtonBody } from '../styles/FilterBody';
import { Link } from '../../Link';
import { MdOutlineClose } from 'react-icons/md';
import { useEffect } from 'react';
import Redirect from 'next/link';
import DisplaySuccess from '../../../marketplace/DisplaySuccess';

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
      {buttonBody && (
        <Redirect
          href={{
            pathname: '/marketplace/success',
            query: { mice: 1 },
          }}
        >
          <Link>CHOOSE HEROES</Link>
        </Redirect>
      )}
    </ButtonBody>
  ) : (
    <div></div>
  );
};

export default DisplayBody;
