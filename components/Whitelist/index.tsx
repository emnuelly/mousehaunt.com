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
import { Link } from "../Link";
import mouse1 from "../../public/images/mouse-1.png";
import mouse2 from "../../public/images/mouse-2.png";

const Whitelist: NextPage = () => {
  return (
    <Container id="About">
      <Title>
        Join the <b>WHITELIST</b>
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
              This is our first Whitelist round.
              <br />
              It will be your first chance to get your hands on some Mouse Haunt
              Tokens ($MHT).
            </span>
            <br />
            <span className="second"></span>
          </Text>
          <Link
            href="https://sweepwidget.com/view/37247-hnmvxit9"
            target="_blank"
          >
            JOIN WHITELIST
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
