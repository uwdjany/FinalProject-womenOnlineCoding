import React from 'react'
import { Table } from 'semantic-ui-react'
import DashAdmin from './dashAdmin'

const TableExampleInverted = () => (

  <DashAdmin>
  <Table inverted>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Status</Table.HeaderCell>
        <Table.HeaderCell>Notes</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>djanatiuwase@gmail.com</Table.Cell>
        <Table.Cell>Approved</Table.Cell>
        <Table.Cell>None</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>uwasey7@gmail.com</Table.Cell>
        <Table.Cell>Approved</Table.Cell>
        <Table.Cell>Requires call</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>uwasey7@gmail.com</Table.Cell>
        <Table.Cell>Rejected</Table.Cell>
        <Table.Cell>None</Table.Cell>
      </Table.Row>

      <Table.Row>
      <Table.Cell>djanatiuwase@gmail.com</Table.Cell>
      <Table.Cell>Approved</Table.Cell>
      <Table.Cell>None</Table.Cell>
    </Table.Row>
    <Table.Row>
    <Table.Cell>uwasey7@gmail.com</Table.Cell>
    <Table.Cell>Approved</Table.Cell>
    <Table.Cell>None</Table.Cell>
  </Table.Row>
  <Table.Row>
  <Table.Cell>uwasey7@gmail.com</Table.Cell>
  <Table.Cell>Rejected</Table.Cell>
  <Table.Cell>None</Table.Cell>
</Table.Row>
    <Table.Row>
    <Table.Cell>djanatiuwase@gmail.com</Table.Cell>
    <Table.Cell>Approved</Table.Cell>
    <Table.Cell>None</Table.Cell>
  </Table.Row>
  </Table.Body>
  <Table.Footer>
  <Table.Row>
  <Table.HeaderCell>7 Applicants</Table.HeaderCell>
  <Table.HeaderCell>5 Approved</Table.HeaderCell>
  <Table.HeaderCell />
  </Table.Row>
  </Table.Footer>
  </Table>
  </DashAdmin>
)

export default TableExampleInverted
