import{useState} from 'react';
import {Box, TextField, Typography, Button, styled } from '@mui/material';
const Container = styled(Box)`
    display:flex;
    flex-direction:column;
    & > h5 , & > div, >button{
        margin-top:30px;
    }
`;
const Transaction = ({setTransactions}) =>{
    const[text , setText] = useState('');
    const[amount , setAmount] = useState('');
    const handleTextChange = (e) =>{
       const imputValue = e.target.value.replace(/[^a-zA-Z]/g, '');
       setText(imputValue);
       if (handleTextChange.value === 0 ){
         alert("Please fill the  textfield");
       }
    };
   const handleAmountChange = (e) =>{
      const imputValue = e.target.value;
      setAmount(imputValue);
   }
   const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
          addTransaction();
      }
  };
 
   // (/[^0-9]/g,'')
   const addTransaction = () =>{
       const transactions= {
          id: Math.floor(Math.random()*1000000),
          text : text,
          amount:+amount,
         }
       setTransactions(prevState => [transactions, ...prevState] );
       
    }
    return(
       <Container>
          <Typography variant ="h5">New Transaction</Typography>
          <TextField label = "Enter expense" value={text} type ='text'  id = "Enter expense-basic"onChange={handleTextChange}/>
          <TextField label = "Enter amount" value={amount} id= "filled-Enter amount" type ='number'onChange={handleAmountChange} onKeyPress={handleKeyPress} />
          <Button variant="contained" onClick={() => addTransaction()}>Add Transaction</Button>
      </Container>
    )
}
export default Transaction;
