import React from 'react';
import { Box } from '@mui/material';
import Header from './Header';
import FilterBar from './FilterBar';
import DataGridComponent from './DataGrid'

const App: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header />
      <Box sx={{ padding: 2 }}>
        <FilterBar />
        <DataGridComponent />
      </Box>
    </Box>
  );
};

export default App;