import type { NextPage } from "next";

import {
  Container,
  Title,
  Subtitle,
  Ellipse1,
  Ellipse2,
  Box,
  BoxContent,
  Text,
  Mice,
  Mouse1,
  Mouse2,
} from "./styles";
import Image from "next/image";
import { Link } from "../../common/Link";
import mouse1 from "../../../public/images/game-related/mouse-1.png";
import mouse2 from "../../../public/images/game-related/mouse-2.png";

const Whitelist: NextPage = () => {
  return (
    <Container id="About">
      <Title>
        Join the <b>GENESIS EVENT</b>
      </Title>
      <Box>
        <BoxContent>
          <Subtitle>
            Become part of the
            <br />
            <b>MOUSE HAUNT UNIVERSE</b>
          </Subtitle>
          <Text>
            <span className="first">
              On December 21st, Our Token ($MHT) will be available on Pancake Swap.
              <br /> 
              <br />
              To celebrate this accomplishment we are Launching the &quot;GENESIS WHITELIST&quot;. 
              <br />
              <br />
              An EXCLUSIVE Mouse Box Sale Event that will be starting at Dec 22nd and ending in Dec 25th.
            </span>
            <br />
            <span className="second"></span>
          </Text>
          <Link href="https://sweepwidget.com/view/44340-uj94pctn" 
          rel="noreferrer"
          target="_blank"
          >
            JOIN GENESIS EVENT
          </Link>
        </BoxContent>
        <Mice>
          <Mouse1>
            <Image
              src={mouse1}
              width="439px"
              height="568px"
              alt="Mouse 1"
              placeholder="blur"
            />
          </Mouse1>
          <Ellipse1 />
          <Mouse2>
            <Image
              src={mouse2}
              width="452px"
              height="552px"
              alt="Mouse 2"
              placeholder="blur"
            />
          </Mouse2>
          <Ellipse2 />
        </Mice>
      </Box>
    </Container>
  );
};

export default Whitelist;
