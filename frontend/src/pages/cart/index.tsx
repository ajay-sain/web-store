import * as React from 'react';
import { Button, Grid, TextField } from '@mui/material';
import CartItemTale from './CartItemTable';
import { Bill, ItemData } from './models';
import Header from '../../component/header';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

let rows = [
  createData('Frozen yoghurt', 157, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const columns = ["Product", "Price", "Quantity", "Total", "Action"];

export default function Cart(props:any) {

    console.table(props);

    let [bill,setBill] = React.useState<Bill>({} as Bill);
    let total:number, tax:number, gst:number;

    const calculateTotal = (data:Array<ItemData>) =>{
        rows = data;
        let subTotal = data.map(a => a.carbs= a.calories * a.fat).reduce((a,b) => a+b);
        let tax = (subTotal * 18) / 100;
        let shipping = 50;
        let total = subTotal+tax+shipping;
        setBill({
            subTotal : Number(subTotal.toFixed(2)),
            tax: Number(tax.toFixed(2)),
            shipping: Number(shipping.toFixed(2)),
            total : Number(total.toFixed(2))
        });
    }
    const handleSubmit = () =>{
        window.alert("you billing price is ₹ " + total )
    }

    return (
        <><Header/>
        <CartItemTale rows={rows} columns={columns} calculateTotal={calculateTotal}/>
        <Grid container spacing={2} sx={{mt:2,alignItems:"end", justifyContent:"end"}} >
            <Grid item xs >
                <TextField id="sub-totle" label="Subtotal" variant="standard" size="small" value={bill.subTotal} sx={{mr:2}} color="primary"/>
                <TextField id="tax" label="Tax" variant="standard" size="small" value={bill.tax} sx={{mr:2}} color="primary"/>
                <TextField id="shipping" label="Shipping" variant="standard" size="small" value={bill?.shipping} sx={{mr:2}} color="primary"/>
            </Grid>
        </Grid>
        <Grid container spacing={2} sx={{mt:2,alignItems:"end", justifyContent:"end"}} >
            <Grid item xs textAlign="end">
                <TextField id="totle" label="Total" variant="standard" size="small" value={bill.total} color="primary"/>
                <Button onClick={handleSubmit}
                            type="submit"
                            variant="contained"
                            color="primary" sx={{m:2, mr:0}}>
                        Proceed to checkout
                    </Button>
            </Grid>
        </Grid>
            
        </>
    );
}
