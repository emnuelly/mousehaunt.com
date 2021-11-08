import React, { useContext } from "react";
import Image from "next/image";
import mht from "../../public/images/MHT.png";
import coffin from "../../public/images/coffin-store.png";

import { Styles, StyleResults } from "./styles";
import { StoreContext } from "../../contexts/StoreContext";

const Table: React.FC = () => {
  const { account, setAccount, getAccount, userInfo } =
    useContext(StoreContext);

  const data = [
    {
      item: "BMHTL",
      itemSub: "Mouse Haunt Booster LEGENDARY",
      type: "2",
      typeSub: "Available on wallet",
      image: coffin,
      status: 1,
    },
    {
      item: "MHT",
      itemSub: "Mouse Haunt Token",
      type: "LOCKED",
      typeSub: "Claimable on IGO",
      image: mht,
      status: 2,
    },
    {
      item: "MHT",
      itemSub: "Mouse Haunt Token",
      type: "LOCKED",
      typeSub: "Claimable 1 month after IGO",
      image: mht,
      status: 2,
    },
  ];

  const styleTypeButtons = (val: number) => {
    return val === 1 ? (
      <div
        style={{
          backgroundColor: "#374A5F",
          height: "50px",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "2px solid #458B72",
        }}
      >
        <div style={{ fontFamily: "Bebas Neue Pro", fontSize: "20px" }}>
          Active
        </div>
      </div>
    ) : (
      <div
        style={{
          backgroundColor: "#52345D",
          height: "50px",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "2px solid #A04766",
        }}
      >
        <div style={{ fontFamily: "Bebas Neue Pro", fontSize: "20px" }}>
          Deactivated
        </div>
      </div>
    );
  };

  const returnAllTables = () => {
    return data.map((e) => {
      return (
        <>
          <tr
            style={{
              textAlign: "center",
              backgroundColor: "#29274b",
            }}
          >
            <td
              style={{
                width: "150px",
              }}
            >
              {<Image alt="MHT" width="100" height="100" src={e.image}></Image>}
            </td>
            <td
              style={{
                textAlign: "left",
              }}
            >
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
            <td style={{ width: "140px" }}>{styleTypeButtons(e.status)}</td>
          </tr>
        </>
      );
    });
  };
  return (
    <Styles>
      <table>
        <tr>
          <th
            style={{
              width: "40px",
              fontFamily: "SF Pro Display",
              fontWeight: 400,
            }}
          >
            Item
          </th>
          <th></th>
          <th
            style={{
              textAlign: "left",
              fontFamily: "SF Pro Display",
              fontWeight: 400,
            }}
          >
            Amount
          </th>
          <th
            style={{
              fontFamily: "SF Pro Display",
              fontWeight: 400,
            }}
          >
            Status
          </th>
        </tr>
        {returnAllTables()}
      </table>
    </Styles>
  );
};

// import {
//   useTable,
//   useFilters,
//   useGlobalFilter,
//   useAsyncDebounce,
// } from 'react-table';
// import { COLUMNS, mock_data } from './columns';
// useEffect(() => {
//   amountOfColumns();
// }, [result]);
// const amountOfColumns = () => {
//   return setResult(mock_data.length);
// };

// const SelectColumnFilter = ({
//   column: { filterValue, setFilter, preFilteredRows, id },
// }) => {
//   const options = React.useMemo(() => {
//     const options = new Set();
//     preFilteredRows.forEach(row => {
//       options.add(row.values[id]);
//     });
//     return [...options.values()];
//   }, [id, preFilteredRows]);
//   return (
//     <>
//       <select
//         value={filterValue}
//         onChange={e => {
//           setFilter(e.target.value || undefined);
//         }}
//       >
//         <option value="">TYPE</option>
//         {options.map((option, i) => {
//           return (
//             <option key={i} value={option}>
//               {option}
//             </option>
//           );
//         })}
//       </select>
//     </>
//   );
// };

// const moveRow = (dragIndex, hoverIndex) => {
//   const dragRecord = records[dragIndex];
//   setRecords(
//     update(records, {
//       $splice: [
//         [dragIndex, 1],
//         [hoverIndex, 0, dragRecord],
//       ],
//     })
//   );
// };

// const columns = useMemo(() => COLUMNS(SelectColumnFilter), []);
// const data = useMemo(() => mock_data, []);

// const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
//   useTable(
//     {
//       columns,
//       data,
//     },
//     useFilters,
//     useGlobalFilter
//   );

// return (
//   <>
//     <div
//       style={{
//         display: 'flex',
//         justifyContent: 'space-around',
//         marginTop: '40px',
//       }}
//     >
//       {headerGroups.map(headerGroup => (
//         <div {...headerGroup.getHeaderGroupProps()}>
//           {headerGroup.headers.map(column => (
//             <div {...column.getHeaderProps()}>
//               <div>{column.canFilter ? column.render('Filter') : null}</div>
//             </div>
//           ))}
//         </div>
//       ))}

//       <StyleResults>
//         RESULTS:
//         {result}
//       </StyleResults>
//     </div>
//     <Styles>
//       <table {...getTableProps()}>
//         <thead>
//           {headerGroups.map(headerGroup => (
//             <tr {...headerGroup.getHeaderGroupProps()}>
//               {headerGroup.headers.map(column => (
//                 <th {...column.getHeaderProps()}>
//                   {column.render('Header')}
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody {...getTableBodyProps()}>
//           {rows.map(row => {
//             prepareRow(row);
//             return (
//               <tr {...row.getRowProps()}>
//                 {row.cells.map(cell => {
//                   return cell?.row?.original?.status === 'DEACTIVATED' ? (
//                     <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
//                   ) : (
//                     <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
//                   );
//                 })}
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </Styles>
//   </>
// );
export default Table;
