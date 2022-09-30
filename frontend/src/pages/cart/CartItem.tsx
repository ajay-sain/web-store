import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { red } from '@mui/material/colors';
import { CartItemData } from './models';


export default function CartItem(row: CartItemData) {

    let [quantity,setQuantity] = React.useState<number>(row.fat);
    let [totalPrice,setTotalPrice] = React.useState<number>(row.carbs);

    const updatePrices = (newQuantity: number) => {
        setQuantity(newQuantity);
        setTotalPrice(newQuantity * row.calories);
        row.updatePrices(row.index, newQuantity);
    }

    return (
        <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
            <TableCell component="th" scope="row">
                {row.name}
            </TableCell>
            <TableCell align="right">{row.calories}</TableCell>
            <TableCell align="right">
                <button></button>
                <TextField margin="normal" required  variant="standard" sx={{width: "10ch"}}
                        id="quantity" label="Quantity" size="small" type="number"
                        name="quantity" autoFocus value={quantity}
                        onChange={(e)=>updatePrices(Number(e.target.value))}/>
                {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
            </TableCell>
            <TableCell align="right">{totalPrice}</TableCell>
            <TableCell align="right">
                <Button onClick={()=>row.removeItem(row.index)}>
                    <DeleteIcon sx={{color: red[500]}}/>
                </Button>
            </TableCell>
        </TableRow>
    );
}
