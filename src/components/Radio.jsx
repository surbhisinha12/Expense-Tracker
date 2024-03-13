import { useState } from "react";
import{RadioGroup,FormControlLabel,Radio,}from '@mui/material';
const[transactionType ,  setTransactionType] = useState('');
const handleChange = (e) =>{
    setTransactionType(e.target.value);


return(
    <RadioGroup
    aria-label="transaction-type"
    name="transaction-type"
    value={transactionType}
    onChange={handleChange}
>
      <FormControlLabel
        value="expense"
        control={<Radio />}
        label="Expense"
       />
      <FormControlLabel
        value="income"
        control={<Radio />}
        label="Income"
      />
</RadioGroup>
)
}
export default handleChange;