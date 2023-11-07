import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'

function TableComp() {
    const dummyTableData = [
        {
            name: "Ahmed",
            age: 24,
            salary: 100
        },
        {
            name: "Ali",
            age: 20,
            salary: 500
        }
    ]
  return (
    <TableContainer>
  <Table variant='striped'>
    <Thead>
      <Tr>
        <Th>Name</Th>
        <Th>Age</Th>
        <Th isNumeric>Salary</Th>
      </Tr>
    </Thead>
    <Tbody>
        {dummyTableData.map((item) => {
            return (
                <Tr>
                <Td>{item?.name}</Td>
                <Td>{item?.age}</Td>
                <Td isNumeric>{item?.salary}</Td>
              </Tr>
            )
        })}
     
   
    </Tbody>
   
  </Table>
</TableContainer>
  )
}

export default TableComp