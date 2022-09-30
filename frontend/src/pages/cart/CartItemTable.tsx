import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CartItem from './CartItem';

export default function CartItemTale({rows, columns, calculateTotal}:{rows:Array<any>, columns: Array<string>, calculateTotal:any}) {

    let [data,setData] = React.useState(rows);

    const updatePrices = (index:number,newQuantity:number) => {
        let oldData = data;
        oldData[index].fat = newQuantity
        setData(oldData);
        calculateTotal(data);
    }

    const removeItem = (index:number) => {
        let oldData = data;
        oldData.splice(index,1);
        setData(oldData);
        calculateTotal(data);
    }

    React.useEffect(() => {
        calculateTotal(rows);
    }, []);
    
    return (
        <>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                {
                    columns.map( (column, index) => 
                    (<TableCell color="primary" align={index == 0? "left":"right"} key={column}>{column}</TableCell>))
                }
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row, index) => (
                <CartItem name={row.name}
                key ={index}
                index= {index}
                calories= {row.calories}
                fat= {row.fat}
                carbs= {row.carbs}
                protein= {row.protein}
                updatePrices={updatePrices}
                removeItem = {removeItem}/>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
        </>
    );
}
