class Account{
    min_Bal = 500
    open_Account(){
        console.log("Account opened successfully")
    }
    deposite_Amount(amount){
        console.log(amount, ":Amount deposited successfully")
    }
    get_Bal(){
        console.log("Server Busy")
    }
    withdrawl(){
        console.log("Insuffient Bal")

    }
    colse_Account(){
        console.log("Manager is not available")
    }
}
let a1=new Account()
console.log(a1.min_Bal)
a1.open_Account()
a1.deposite_Amount(5001)
a1.withdrawl()
a1.get_Bal()
a1.close_Account()
console.log(a1.goToMovie())