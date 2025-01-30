import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box } from '@mui/material';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'country', headerName: 'Country', width: 150 },
  { field: 'status', headerName: 'Status', width: 150 },
  { field: 'sector', headerName: 'Sector', width: 150 },
];

const rows = [
  { id: 1, name: 'John Doe', country: 'USA', status: 'Active', sector: 'Technology' },
  { id: 2, name: 'Jane Smith', country: 'Canada', status: 'Pending', sector: 'Finance' },
  // Add more rows as needed
];

const DataGridComponent: React.FC = () => {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </Box>
  );
};

export default DataGridComponent;