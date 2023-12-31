/* eslint-disable react/prop-types */
import { Table } from "@radix-ui/themes";

const TableComp = ({ datas }) => {
  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Nama</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Nomor Induk Penduduk</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Fakultas</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {datas.map((data) => {
          return (
            <Table.Row key={data.id}>
              <Table.RowHeaderCell>{data.nama}</Table.RowHeaderCell>
              <Table.Cell>{data.nik}</Table.Cell>
              <Table.Cell>{data.alamat}</Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table.Root>
  );
};

export default TableComp;
