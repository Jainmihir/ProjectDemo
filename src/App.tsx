import React, { useState } from "react";
import { 
  TextField, MenuItem, Checkbox, FormControlLabel, Button, Grid, Box 
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import dayjs, { Dayjs } from "dayjs";

interface DataRow {
  id: number;
  date: string;
  category: string;
  status: string;
  new: boolean;
}

const initialData: DataRow[] = [
  { id: 1, date: "2025-01-28", category: "Option1", status: "Pending", new: true },
  { id: 2, date: "2025-01-29", category: "Option2", status: "Completed", new: false },
  { id: 3, date: "2025-01-29", category: "Option1", status: "Pending", new: true },
];

const MyFilterComponent: React.FC = () => {
  const [fromDate, setFromDate] = useState<Dayjs | null>(null);
  const [toDate, setToDate] = useState<Dayjs | null>(null);
  const [category, setCategory] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [isNew, setIsNew] = useState<boolean>(false);
  const [isSent, setIsSent] = useState<boolean>(false);
  const [filteredData, setFilteredData] = useState<DataRow[]>(initialData);

  const handleFilter = (): void => {
    let filtered = initialData;

    if (fromDate) {
      filtered = filtered.filter(row => dayjs(row.date).isAfter(fromDate.subtract(1, "day")));
    }
    if (toDate) {
      filtered = filtered.filter(row => dayjs(row.date).isBefore(toDate.add(1, "day")));
    }
    if (category && category !== "All") {
      filtered = filtered.filter(row => row.category === category);
    }
    if (status && status !== "All") {
      filtered = filtered.filter(row => row.status === status);
    }
    if (isNew) {
      filtered = filtered.filter(row => row.new === true);
    }

    setFilteredData(filtered);
  };

  const handleReset = (): void => {
    setFromDate(null);
    setToDate(null);
    setCategory("");
    setStatus("");
    setIsNew(false);
    setIsSent(false);
    setFilteredData(initialData);
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "date", headerName: "Date", width: 130 },
    { field: "category", headerName: "Category", width: 150 },
    { field: "status", headerName: "Status", width: 150 },
    { field: "new", headerName: "New", width: 100, type: "boolean" },
  ];

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ p: 3, border: "1px solid #ccc", maxWidth: 900 }}>
        <Grid container spacing={2} alignItems="center">
          {/* Date Pickers */}
          <Grid item xs={12} sm={6}>
            <DatePicker 
              label="From" 
              value={fromDate} 
              onChange={(date) => setFromDate(date)} 
            //   renderInput={(params) => <TextField fullWidth {...params} />} 
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <DatePicker 
              label="To" 
              value={toDate} 
              onChange={(date) => setToDate(date)} 
            //   renderInput={(params) => <TextField fullWidth {...params} />} 
            />
          </Grid>

          {/* Dropdown Filters */}
          <Grid item xs={12} sm={6}>
            <TextField 
              select 
              label="Category" 
              value={category} 
              onChange={(e) => setCategory(e.target.value)} 
              fullWidth
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Option1">Option 1</MenuItem>
              <MenuItem value="Option2">Option 2</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField 
              select 
              label="Status" 
              value={status} 
              onChange={(e) => setStatus(e.target.value)} 
              fullWidth
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Pending">Pending</MenuItem>
              <MenuItem value="Completed">Completed</MenuItem>
            </TextField>
          </Grid>

          {/* Checkboxes */}
          <Grid item xs={12} sm={6}>
            <FormControlLabel 
              control={<Checkbox checked={isNew} onChange={(e) => setIsNew(e.target.checked)} />} 
              label="New" 
            />
            <FormControlLabel 
              control={<Checkbox checked={isSent} onChange={(e) => setIsSent(e.target.checked)} />} 
              label="Sent" 
            />
          </Grid>

          {/* Buttons */}
          <Grid item xs={12}>
            <Button variant="contained" color="primary" sx={{ mr: 2 }} onClick={handleFilter}>
              Apply Filter
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleReset}>
              Reset
            </Button>
          </Grid>
        </Grid>

        {/* Data Grid Table */}
        <Box sx={{ height: 300, width: "100%", mt: 3 }}>
          <DataGrid rows={filteredData} columns={columns} pageSizeOptions={[5]} />
        </Box>
      </Box>
    </LocalizationProvider>
  );
};

export default MyFilterComponent;
