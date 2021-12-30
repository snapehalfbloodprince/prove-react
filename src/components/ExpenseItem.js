import './ExpenseItem.css';
function ExpenseItem() {
  const expenseDate = new Date(2021, 2, 28); //i mesi cominciano da 0, dunque 2 è marzo.
  const expenseTitle = 'Assicurazione Auto';
  const expenseAmount = 294.67;

  return (
    <div className='expense-item'>
      <div>{expenseDate.toDateString()}</div>
      <div className='expense-item__description'>
        <h2>{expenseTitle}</h2>
        <div className='expense-item__price'>${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
