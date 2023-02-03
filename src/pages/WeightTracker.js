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

function WeightTracker() {
    const [entries, setEntries] = useState([
        { date: "2022-01-01", weight: 80 },
        { date: "2022-01-02", weight: 79 },
    ]);

    const addEntry = (date, weight) => {
        setEntries([...entries, { date, weight }]);
    };

    return (
        <Container maxWidth="xl">
            <h1>Weight Tracker</h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    addEntry(e.target.date.value, e.target.weight.value);
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
                        label="Weight"
                        id="weight"
                        type="number"
                        name="weight"
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
                        <TableCell>Weight</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {entries.map((entry) => (
                        <TableRow key={entry.date}>
                            <TableCell>{entry.date}</TableCell>
                            <TableCell>{entry.weight}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Container>
    );
}

export default WeightTracker;