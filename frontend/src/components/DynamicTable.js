// src/components/DynamicTable.js
import React from 'react';
import { useTable, useSortBy, usePagination, useFilters } from 'react-table';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, TextField, TablePagination, Paper
} from '@mui/material';

const DynamicTable = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
    state: { pageIndex, pageSize },
    setPageSize,
    gotoPage,
    pageOptions,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageCount,
    setFilter, // Used for filtering
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useFilters,
    useSortBy,
    usePagination
  );

  return (
    <>
      <TextField
        variant="outlined"
        label="Search"
        onChange={e => setFilter('name', e.target.value || undefined)} // Replace 'name' with the column you want to filter
        style={{ marginBottom: '20px' }}
      />
      <TableContainer component={Paper}>
        <Table {...getTableProps()}>
          <TableHead>
            {headerGroups.map(headerGroup => (
              <TableRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <TableCell {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render('Header')}
                    <TableSortLabel
                      active={column.isSorted}
                      direction={column.isSortedDesc ? 'desc' : 'asc'}
                    />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row);
              return (
                <TableRow {...row.getRowProps()}>
                  {row.cells.map(cell => (
                    <TableCell {...cell.getCellProps()}>{cell.render('Cell')}</TableCell>
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        component="div"
        count={rows.length}
        page={pageIndex}
        onPageChange={(e, newPage) => gotoPage(newPage)}
        rowsPerPage={pageSize}
        onRowsPerPageChange={e => setPageSize(Number(e.target.value))}
        rowsPerPageOptions={[10, 25, 50]}
        nextButton={{ disabled: !canNextPage }}
        previousButton={{ disabled: !canPreviousPage }}
      />
    </>
  );
};

export default DynamicTable;
