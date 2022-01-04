import React from "react";
import { Link as LinkButton } from "../Link";
import { Container, Navs, } from "./styles";
import Link from "next/link";
import sections, { storeSections } from "../../../utils/sections";
import { useRouter } from "next/router";

interface Props {
  mobile?: boolean;
}

const Sections: React.FC<Props> = ({ mobile }: Props) => {
  const router = useRouter();
  const isStorePath = router.pathname.includes("/marketplace") ;
  const routes = isStorePath ? sections : sections;

  return (
    <Container width={isStorePath ? "" : "100%"} mobile={mobile}>
      <Navs width={isStorePath ? "" : "100%"} >
      {routes.map((section) => (
        <Link key={section.to} href={section.to}>
          <a target={section.title === "White Paper" ? "_blank" : ""}>
            {section.title}
          </a>
        </Link>
      ))}
      </Navs>
      {isStorePath ? null : (
        <LinkButton className="right" href="/marketplace">
          MARKETPLACE
        </LinkButton>
      )}
    </Container>
  );
};

export default Sections;
