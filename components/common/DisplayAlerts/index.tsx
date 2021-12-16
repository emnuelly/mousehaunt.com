import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import React from 'react'

interface Props {
  type?: string;
  message?: string;
  title?: string;
  insert?: string;
  container?: string;
  animationIn?: string[];
  animationOut?: string[];
  dismiss?: {
    duration: number;
    onScreen: boolean;
  };
}

const AlertMessage: React.FC<Props> = () => {
  return (
    <div>
      <ReactNotification ref={React.useRef(alert)} />
      asodkoapdkpsaokd
    </div>
  );
};

export default AlertMessage;
