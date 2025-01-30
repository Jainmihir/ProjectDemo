import React from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';

const FilterBar: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', gap: 2, marginBottom: 2 }}>
      <FormControl variant="outlined" sx={{ minWidth: 120 }}>
        <InputLabel>From</InputLabel>
        <Select label="From">
          <MenuItem value=""><em>None</em></MenuItem>
          {/* Add more menu items as needed */}
        </Select>
      </FormControl>

      <FormControl variant="outlined" sx={{ minWidth: 120 }}>
        <InputLabel>To</InputLabel>
        <Select label="To">
          <MenuItem value=""><em>None</em></MenuItem>
          {/* Add more menu items as needed */}
        </Select>
      </FormControl>

      <FormControl variant="outlined" sx={{ minWidth: 120 }}>
        <InputLabel>Sector</InputLabel>
        <Select label="Sector">
          <MenuItem value=""><em>None</em></MenuItem>
          {/* Add more menu items as needed */}
        </Select>
      </FormControl>

      <Button variant="contained" color="primary">
        Apply
      </Button>
      <Button variant="outlined">
        Reset
      </Button>
    </Box>
  );
};

export default FilterBar;