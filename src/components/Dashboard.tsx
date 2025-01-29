import React from "react";
import { Container, Paper } from "@mui/material";
import Filters from './Filters'
import DataGridTable from "./DataGridTable"

const Dashboard: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Paper elevation={1} sx={{ padding: 2, marginTop: 2 }}>
        <Filters />
      
        <DataGridTable />
      </Paper>
    </Container>
  );
};

export default Dashboard;
