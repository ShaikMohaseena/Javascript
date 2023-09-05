  class Account {
    open_Account(){
        console.log("Account Opened Successfully")
    }
  }
  class SA extends Account{
    acc_Bal = 0
    min_Bal = 500 
    constructor(id,name,amount){
        super(id,name)
        this.acc_Bal=this.acc_Bal +amount
    }
    deposite_Amount(){

    }
    cal_Bal(){
        return this.acc_Bal - this.min_Bal
    }
  }
  class CA extends Account{
    acc_Bal =0
    min_Bal =25000
    constructor(id,name,amount){
        super(id,name)
        this.acc_Bal + amount
    }
    deposit_Amount(){

    }
    cal_Bal(){
        return this.acc_Bal - this.min_Bal
    }
  }
   let sa1=new SA(101,"Rahul",6000)
   let ca1=new CA(102,"Priyanka",70000)


   console.log(sa1)
   console.log(ca1)

   console.log(sa1.cal_Bal())
   console.log(ca1.cal_Bal())