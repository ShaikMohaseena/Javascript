let validate=()=>{
    let name = document.getElementById('uName').value ;
    let password = document.getElementById('uPassword').value ;
    
    if(name==""){
        //alert("please enter user name:")
        document.getElementById('uMessage').innerHTML="Bhaiya please user name"
    }

    if(password==""){
        document.getElementById('pMessage').innerHTML="Please Proper Password"
    }
    //alert ("mike testing 123")

    return false
}