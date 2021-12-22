import React, { useContext } from "react";
import { formatTimeDays } from "./utils/ratinhos";
import Card from "../common/Card";
import { Props } from "./utils/ratinhos";
import { Link } from "../common/Link";
import FilterMices from "./FilterMices";
import { MarketContext } from "../../contexts/MarketPlaceContext";
import { MarketplaceContractContext } from "../../contexts/contracts/MarketplaceContractContext";

const DisplayMices: React.FC<Props> = () => {
  const {
    displayHeart,
    checkIfNotThere,
    clickedChosenMice,
    hoverState,
    filterOptions,
    chosenMice,
    pagination,
    increasePagination,
    mices,
  } = useContext(MarketContext);

  const { getOrders, createOrder, cancelOrder, executeOrder, getAssetType } = useContext(
    MarketplaceContractContext
  );

  const displayCards = () => {
    if (!mices) return <div>No mices found.</div>;

    const sizeStyle = { width: "380px", height: "430px" };

    const ratObject = {
      mices,
      hoverState,
      clickedChosenMice,
      displayHeart,
      sizeStyle,
      formatTimeDays,
      pagination,
    };

    return <Card ratMarketPlace={ratObject} />;
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{ minWidth: "22%" }}>
          <FilterMices
            setFilters={filterOptions}
            chosenMice={chosenMice}
            displayHeart={displayHeart}
            checkIfNotThere={checkIfNotThere}
            clickedChosenMice={clickedChosenMice}
          />
          <br />
          <div>{JSON.stringify(chosenMice, null, 2)}</div>
        </div>
        <div style={{ minWidth: "80%" }}>
          {displayCards()}
          <Link
            style={{ maxWidth: "15%", margin: "0 auto", marginBottom: "200px" }}
            onClick={() => getAssetType("0xf2F504fdAd751a0eB81A2cf88Fe90E5E57a199db")}
          >
            Load More
          </Link>
        </div>
      </div>
    </>
  );
};

export default DisplayMices;
