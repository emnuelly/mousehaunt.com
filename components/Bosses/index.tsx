import type { NextPage } from "next";

import {
  Container,
  Mice,
  Title,
  Subtitle,
  Phone,
  Video,
  Ellipse1,
  Ellipse2,
} from "./styles";
import Image from "next/image";
import mice from "../../public/images/mice.png";

const Bosses: NextPage = () => {
  return (
    <>
      <Container>
        <Mice>
          <Image
            src={mice}
            width="334.28px"
            height="239.62px"
            placeholder="blur"
            alt="Mice"
          />
          <Ellipse1 />
        </Mice>
        <Title>
          Bosses, you said?! <b>WE HAVE&apos;EM</b>
        </Title>
        <Subtitle>
          In the Mouse Haunt Universe, the danger lies everywhere. We bring you
          player controlled Environmental Bosses! Ghosts control from furnaces
          to wrecking balls. Killing Mouse Heroes creatively, with style!
        </Subtitle>
        <Video>
          <Phone />
          <video
            loop
            muted
            autoPlay
            src="https://assets.mousehaunt.com/videos/EnvironmentalBosses.mp4"
            poster="/images/bosses-poster.webp"
            width="851px"
            height="416px"
          />
        </Video>
      </Container>
      <Ellipse2 />
    </>
  );
};

export default Bosses;
