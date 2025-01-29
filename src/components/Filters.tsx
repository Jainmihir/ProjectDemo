import React, { useState } from "react";
import {
  Box,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

const Filters: React.FC = () => {
  const [selector, setSelector] = useState<string>("");
  const [sector, setSector] = useState<string>("");

  return (
    <Box display="flex" flexWrap="wrap" gap={2}>
      <TextField label="From Date" type="date" InputLabelProps={{ shrink: true }} />
      <TextField label="To Date" type="date" InputLabelProps={{ shrink: true }} />

      <FormControl>
        <InputLabel>Selector</InputLabel>
        <Select value={selector} onChange={(e) => setSelector(e.target.value)}>
          <MenuItem value="">None</MenuItem>
          <MenuItem value="Option1">Option 1</MenuItem>
          <MenuItem value="Option2">Option 2</MenuItem>
        </Select>
      </FormControl>

      <TextField label="Name" />
      <TextField label="Country" />
      <TextField label="Type" />

      <FormControl>
        <InputLabel>Sector</InputLabel>
        <Select value={sector} onChange={(e) => setSector(e.target.value)}>
          <MenuItem value="">None</MenuItem>
          <MenuItem value="IT">IT</MenuItem>
          <MenuItem value="Finance">Finance</MenuItem>
        </Select>
      </FormControl>

      <FormGroup row>
        <FormControlLabel control={<Checkbox />} label="New" />
        <FormControlLabel control={<Checkbox />} label="Pending" />
      </FormGroup>

      <Button variant="contained">Apply</Button>
      <Button variant="outlined">Reset</Button>
    </Box>
  );
};

export default Filters;
