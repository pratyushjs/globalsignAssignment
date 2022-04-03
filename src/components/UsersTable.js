import React, { useState, useLayoutEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  chakra,
  Stack,
  Skeleton,
} from "@chakra-ui/react";
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import { useTable, useSortBy } from "react-table";
import { TYPES_SIDE_DRAWER } from "../utils/constants";
import axios from "axios";
const UsersTable = ({ handleSideDrawer }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  async function fetchData() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    try {
      if (data) {
        data.map((singleData) => {
          singleData["viewProfile"] = "View profile";
          singleData["viewPost"] = "View Post";
        });

        setUsers([...data]);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  }
  useLayoutEffect(() => {
    fetchData();
  }, []);
  const data = React.useMemo(() => users, [users]);

  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "User Name",
        accessor: "username",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Phone",
        accessor: "phone",
      },
      {
        Header: "Website",
        accessor: "website",
      },
      {
        Header: "",
        accessor: "viewProfile",
        isCssChange: true,
        type: TYPES_SIDE_DRAWER.PROFILE,
      },
      {
        Header: "",
        accessor: "viewPost",
        isCssChange: true,
        type: TYPES_SIDE_DRAWER.POST,
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);
  const sendMessageToParent = (type, userData) => {
    // console.log("sendingmsg to parent");
    window.parent.postMessage(
      { message: "userData", value: { drawerType: type, userData: userData } },
      "*"
    );
  };
  if (isLoading) {
    return (
      <Stack spacing={3} style={{ width: "100%", padding: "20px" }}>
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" /> <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
      </Stack>
    );
  }
  if(isError){
    <p style={{color:'red',margin:'auto',textAlign:'center'}}>Please refresh the page</p>
  }
  return (
    <Table {...getTableProps()}>
      <Thead>
        {headerGroups.map((headerGroup) => (
          <Tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <Th
                {...column.getHeaderProps(column.getSortByToggleProps())}
                isNumeric={column.isNumeric}
              >
                {column.render("Header")}
                <chakra.span pl="4">
                  {column.isSorted ? (
                    column.isSortedDesc ? (
                      <TriangleDownIcon aria-label="sorted descending" />
                    ) : (
                      <TriangleUpIcon aria-label="sorted ascending" />
                    )
                  ) : null}
                </chakra.span>
              </Th>
            ))}
          </Tr>
        ))}
      </Thead>
      <Tbody {...getTableBodyProps()}>
        {rows.map((row, rowIndex) => {
          prepareRow(row);
          return (
            <Tr {...row.getRowProps()}>
              {row.cells.map((cell, i) => (
                <Td
                  {...cell.getCellProps()}
                  onClick={() =>
                    cell.column.isCssChange
                      ? sendMessageToParent(cell.column.type, users[rowIndex])
                      : // handleSideDrawer(cell.column.type,users[rowIndex])
                        null
                  }
                  className={cell.column.isCssChange ? "link" : ""}
                >
                  {/* {console.log(row.values?.id,)} */}
                  {cell.render("Cell")}
                </Td>
              ))}
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

export default UsersTable;
