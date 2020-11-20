import React from "react";
import { useTable, useSortBy } from 'react-table'
import namor from 'namor';
import { Box, Text, AvatarGroup, Avatar, IconButton, Menu, MenuButton, VisuallyHidden, MenuList, MenuItem } from "@chakra-ui/react";
import { FiChevronDown, FiChevronUp, FiMoreVertical } from 'react-icons/fi';

export const SampleMenu = () => (<Menu placement="bottom-end">
  {({ isOpen }) => (
    <>
      <MenuButton bg="none" isActive={isOpen} as={IconButton} icon={<FiMoreVertical />}>
        {isOpen ? <VisuallyHidden>Close Menu</VisuallyHidden> : <VisuallyHidden>Open Menu</VisuallyHidden>}
      </MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem onClick={() => alert("Kagebunshin")}>Create a Copy</MenuItem>
      </MenuList>
    </>
  )}
</Menu>);

const columns = [
{
  Header: 'Name',
  columns: [
    {
      Header: 'First Name',
      accessor: 'firstName',
    },
    {
      Header: 'Last Name',
      accessor: 'lastName',
    },
  ],
},
{
  Header: 'Info',
  columns: [
    {
      Header: 'Age',
      accessor: 'age',
    },
    {
      Header: 'Visits',
      accessor: 'visits',
    },
    {
      Header: 'Status',
      accessor: 'status',
    },
    {
      Header: 'Profile Progress',
      accessor: 'progress',
    },
    {
        Header: '',
        accessor: 'more',
    }
  ],
},
];

const AvatarGroupComp = ({ combo }) => <AvatarGroup size="sm" max={2}>
    {[
        <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />,
        <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />,
        <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />,
        <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />,
        <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />,
        <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />,
        <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />,
        <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />,
        <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />,
        <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />,
    ].slice(combo)}
</AvatarGroup>


const range = len => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const newPerson = () => {
  const statusChance = Math.random()
  return {
    firstName: namor.generate({ words: 1, numbers: 0 }),
    lastName: namor.generate({ words: 1, numbers: 0 }),
    age: Math.floor(Math.random() * 30),
    visits: <AvatarGroupComp combo={Math.floor(Math.random() * 5)} />,
    progress: <span>{Math.floor(Math.random() * 100)}%</span>,
    more: <SampleMenu />,
    status:
      statusChance > 0.66
        ? <><Text as="span" color="green.600">●</Text> Completed</>
        : statusChance > 0.33
        ? <><Text as="span" color="yellow.600">●</Text> In Progress</>
        : <><Text as="span" color="red.600">●</Text> Cancelled</>,
  }
}

function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth]
    return range(len).map(d => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      }
    })
  }

  return makeDataLevel()
}

const data = makeData(30);

export const SampleTable = () => {
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable(
      {
        columns,
        data,
      },
      useSortBy
    );
  
    const firstPageRows = rows.slice(0, 10)
  
    return (
      <>
        <Box as="table" w="100%" {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <Box as="th" p="2" bg="gray.100" borderBottom="1px solid silver" textAlign="left" {...column.getHeaderProps(column.getSortByToggleProps())}>
                    <Text textTransform="uppercase" color="gray.500" fontSize="sm">
                        {column.render('Header')}
                        {/* Add a sort direction indicator */}
                        <span>
                        {column.isSorted
                            ? column.isSortedDesc
                            ? <Box ml="3" display="inline" as={FiChevronDown} />
                            : <Box ml="3" display="inline" as={FiChevronUp} />
                            : ''}
                        </span>
                    </Text>
                  </Box>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {firstPageRows.map(
              (row, i, arr) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell, idx) => {
                      return (
                        <Box borderTop="1px solid #edf2f9" p="2" as="td" {...cell.getCellProps()}>
                            <Text isTruncated fontSize="md" w={idx === 6 ? "auto" : "30ch"}>{cell.render('Cell')}</Text>
                        </Box>
                      )
                    })}
                  </tr>
                )}
            )}
          </tbody>
        </Box>
        <br />
        <div>Showing the first 10 results of {rows.length} rows</div>
      </>
    )
  };
