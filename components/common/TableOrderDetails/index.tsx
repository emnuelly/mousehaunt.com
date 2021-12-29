import React, { useContext, useEffect, useState } from "react";

import { Styles, PriceText, EventText, FromText, DateText } from "./styles";


const TableOrderDetails: React.FC = () => {

  const data = [
    {
      event: "BMHTL",
      price: "0,2 $MHT",
      from: "name_surname",
      to: "name_surname",
      date: "5 days ago",
    },
    {
      event: "BMHTL",
      price: "0,2 $MHT",
      from: "name_surname",
      to: "name_surname",
      date: "5 days ago",
    },
    {
      event: "BMHTL",
      price: "0,2 $MHT",
      from: "name_surname",
      to: "name_surname",
      date: "5 days ago",
    },
    {
      event: "BMHTL",
      price: "0,2 $MHT",
      from: "name_surname",
      to: "name_surname",
      date: "5 days ago",
    },
    {
      event: "BMHTL",
      price: "0,2 $MHT",
      from: "name_surname",
      to: "name_surname",
      date: "5 days ago",
    },
    {
      event: "BMHTL",
      price: "0,2 $MHT",
      from: "name_surname",
      to: "name_surname",
      date: "5 days ago",
    },
    {
      event: "BMHTL",
      price: "0,2 $MHT",
      from: "name_surname",
      to: "name_surname",
      date: "5 days ago",
    },{
      event: "BMHTL",
      price: "0,2 $MHT",
      from: "name_surname",
      to: "name_surname",
      date: "5 days ago",
    },
    {
      event: "BMHTL",
      price: "0,2 $MHT",
      from: "name_surname",
      to: "name_surname",
      date: "5 days ago",
    },
    {
      event: "BMHTL",
      price: "0,2 $MHT",
      from: "name_surname",
      to: "name_surname",
      date: "5 days ago",
    },
    {
      event: "BMHTL",
      price: "0,2 $MHT",
      from: "name_surname",
      to: "name_surname",
      date: "5 days ago",
    },

    {
      event: "BMHTL",
      price: "0,2 $MHT",
      from: "name_surname",
      to: "name_surname",
      date: "5 days ago",
    },
    {
      event: "BMHTL",
      price: "0,2 $MHT",
      from: "name_surname",
      to: "name_surname",
      date: "5 days ago",
    },


  ];


  return (
    <Styles>
      <table>
        <tr>
          <th>Event</th>
          <th>Price</th>
          <th>From</th>
          <th>To</th>
          <th>Date</th>
        </tr>
        {data.map((row, index) => (
          <tr key={index}>
            <td>
              <EventText>{row.event}</EventText>
            </td>
            <td>
              <PriceText>{row.price}</PriceText>
            </td>
            <td>
              <FromText>{row.from}</FromText>
            </td>
            <td>
              <FromText>{row.to}</FromText>
            </td>
            <td>
              <DateText>{row.date}</DateText>
            </td>
          </tr>
        ))}
      </table>
    </Styles>
  );
};

export default TableOrderDetails;
