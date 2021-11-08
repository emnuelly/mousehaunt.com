import React, { useContext } from "react";
import Image from "next/image";
import mht from "../../public/images/MHT.png";
import coffin from "../../public/images/coffin-store.png";

import { Styles, StatusBadge } from "./styles";
import { StoreContext } from "../../contexts/StoreContext";

const Table: React.FC = () => {
  const { userInfo } = useContext(StoreContext);

  const data = [
    {
      item: "BMHTL",
      itemSub: "Mouse Haunt Booster LEGENDARY",
      type: userInfo?.boosters.legendary,
      typeSub: "Available on wallet",
      image: coffin,
      status: "AVAILABLE",
    },
    {
      item: "BMHTE",
      itemSub: "Mouse Haunt Booster EPIC",
      type: userInfo?.boosters.epic,
      typeSub: "Available on wallet",
      image: coffin,
      status: "AVAILABLE",
    },
    {
      item: "MHT",
      itemSub: "Mouse Haunt Token",
      type: userInfo?.totalTokens,
      typeSub: "Claimable 1 month after IGO",
      image: mht,
      status: "LOCKED",
    },
  ];

  const returnAllTables = () => {
    return data.map((e) => {
      return <></>;
    });
  };
  return (
    <Styles>
      <table>
        <tr>
          <th>Item</th>
          <th></th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
        {data.map((e) => (
          <tr key={e.item}>
            <td>
              <Image alt="MHT" width="100" height="100" src={e.image} />
            </td>
            <td>
              <div
                style={{
                  fontFamily: "SF Pro Display",
                  fontWeight: 600,
                  fontSize: 24,
                  textTransform: "uppercase",
                }}
              >
                {e.item}
              </div>
              <br />{" "}
              <div
                style={{
                  fontFamily: "SF Pro Display",
                  fontWeight: 600,
                  color: "#EE0CA1",
                  marginBottom: "5px",
                  marginTop: "-20px",
                }}
              >
                {e.itemSub}
              </div>
            </td>
            <td style={{ width: "300px" }}>
              <div
                style={{
                  fontFamily: "SF Pro Display",
                  fontSize: 18,
                  textTransform: "uppercase",
                  textAlign: "left",
                }}
              >
                {e.type}
              </div>
              <br />
              <div
                style={{
                  fontFamily: "SF Pro Display",
                  fontWeight: 600,
                  color: "#EE0CA1",
                  marginBottom: "5px",
                  marginTop: "-20px",
                  textAlign: "left",
                }}
              >
                {e.typeSub}
              </div>
            </td>
            <td style={{ width: "140px" }}>
              <StatusBadge status={e.status}>
                <div>{e.status}</div>
              </StatusBadge>
            </td>
          </tr>
        ))}
      </table>
    </Styles>
  );
};

export default Table;
