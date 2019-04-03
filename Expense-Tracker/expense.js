let myAccount = {
    name: "Adia Guidry",
    expense: 0,
    income: 0,
}



// addIncome - takes in account and amount 

let addIncome = function (account, income) {
    account.income = account.income + income;
}
// addExpenses - account and expense
let addExpense = function (account, expense) {
    account.expense = account.expense + expense;
}

// resetAccount - takes in account sets to 0

let resetIncome = function (account) {
    account.income = 0;
}

// getAccountSummary - total account info

let getAccountSummary = function (account) {
    let balance = account.income - account.expense;
   return  `Good day ${account.name} your total expenses are $${account.expense} and your income is $${account.income}
       the balance is $${balance} have a wonder day!` 

}

addIncome(myAccount, 55.78);
addExpense(myAccount, 4.39);
console.log(getAccountSummary(myAccount))

