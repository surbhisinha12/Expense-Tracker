import{Box,Typography,Divider , List}from'@mui/material';
import Transaction from './SecondTransaction';
const Newtransaction = ({transactions,setTransactions}) => {
    return(
       <Box>
         <Typography variant='h5'>Transaction History</Typography>
         <Divider />
         <List>
            {
              transactions.map(transaction =>(
                 <Transaction  transaction={transaction} setTransactions={setTransactions}  transactions={transactions}/>
              ))
            }
         </List>
       </Box>
    )
}
export default Newtransaction;