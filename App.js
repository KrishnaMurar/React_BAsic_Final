
   import ExpenseItem from './Components/ExpenseItem'

function App(){
  const expense =[
    {
      id : 'e1',
      title : "Car Wash",
      Date : new Date(2023, 5, 28),
      Amount :  520,
      location : "Delhi"
    },
    {
      id : 'e2',
      title : "Shopping",
      Date : new Date(2023, 1, 28),
      Amount :  400,
      location : "Noida"
    },
    {
      id : 'e3',
      title : "Car Travelling",
      Date : new Date(2023, 2, 18),
      Amount :  520,
      location : "Gurgoan"
    }
  ];
  return (
    <div>
<h2>Expense Items</h2>
<ExpenseItem
         title = {expense[0].title}
         Date = {expense[0].Date}
         Amount = {expense[0].Amount}
         location= {expense[0].loctaion}
         
         />
<ExpenseItem
title = {expense[1].title}
Date = {expense[1].Date}
Amount = {expense[1].Amount}
location = {expense[1].loctaion}
/>
<ExpenseItem
        title = {expense[2].title}
         Date = {expense[2].Date}
         Amount = {expense[2].Amount}
         location = {expense[2].loctaion}
        />
 
</div>
  );
}
 export default App;
