import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box } from "@mui/material";

interface RowData {
  id: number;
  name: string;
  country: string;
  sector: string;
}

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "name", headerName: "Name", width: 150 },
  { field: "country", headerName: "Country", width: 150 },
  { field: "sector", headerName: "Sector", width: 150 },
];

const rows: RowData[] = [
  { id: 1, name: "John Doe", country: "USA", sector: "IT" },
  { id: 2, name: "Jane Smith", country: "UK", sector: "Finance" },
];

const DataGridTable: React.FC = () => {
  return (
    <Box sx={{ height: 300, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} pageSizeOptions={[5]} />
    </Box>
  );
};

export default DataGridTable;
