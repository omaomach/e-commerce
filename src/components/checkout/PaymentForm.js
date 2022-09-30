import * as React from 'react';
import {useState} from "react"
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { DatePicker } from 'antd';

export default function PaymentForm() {
    const [paymentData, setPaymentData] = useState({
		cardName: "",
		cardNumber: 0,
		expDate: DatePicker,
		cvv: 0,
	});

    function handleChangePaymentData(e){
        const name = e.target.name;
		let value = e.target.value;

        setPaymentData({ ...paymentData, [name]: value });
		console.log(paymentData);
    }

  return (
    <>
      <h2>Payment method</h2>
      <form onChange={handleChangePaymentData}>
        <div >
          <TextField
            required
            id="cardName"
            label="Name on card"
            defaultValue={paymentData.cardName}
            fullWidth
            autoComplete="cc-name"
            variant="standard"
          />
        </div>
        <div >
          <TextField
            required
            id="cardNumber"
            label="Card number"
            defaultValue={paymentData.cardNumber}}
            fullWidth
            autoComplete="cc-number"
            variant="standard"
          />
        </div>
        <div >
          <TextField
            required
            id="expDate"
            label="Expiry date"
            defaultValue={paymentData.expDate}
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
          />
        </div>
        <div >
          <TextField
            required
            id="cvv"
            label="CVV"
            defaultValue={paymentData.cvv}
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
          />
        </div>
        <div >
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </div>
      </form>
    </>
  );
}