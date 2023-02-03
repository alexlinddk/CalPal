import {
  Button,
  Container,
  FormControl,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField
} from "@mui/material";
import { useState } from "react";

function CalorieTracker() {
  const [entries, setEntries] = useState([
    { date: "2022-01-01", calories: 2000 },
    { date: "2022-01-02", calories: 1500 },
  ]);

  const addEntry = (date, calories) => {
    setEntries([...entries, { date, calories }]);
  };

  return (
    <Container maxWidth="xl">
      <h1>Calorie Tracker</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addEntry(e.target.date.value, e.target.calories.value);
        }}
      >
        <FormControl>
          <TextField
            label="Date"
            id="date"
            type="text"
            name="date"
            variant="outlined"
            margin="dense"
          />
          <br />
          <TextField
            label="Calories"
            id="calories"
            type="number"
            name="calories"
            variant="outlined"
            margin="dense"
          />
          <br />
          <Button type="submit" variant="contained">
            Add Entry
          </Button>
        </FormControl>
      </form>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Calories</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {entries.map((entry) => (
            <TableRow key={entry.date}>
              <TableCell>{entry.date}</TableCell>
              <TableCell>
                {entry.calories}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}

export default CalorieTracker;
