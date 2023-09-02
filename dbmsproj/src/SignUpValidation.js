function Validation(values){
    alert("")
    let error = {}
    const email_pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.name ===""){
        error.name = "Name should not be empty"
    }
    else{
        error.name = ""
    }
    
    if(values.email ===""){
        error.email = "Email should not be empty"
    }
    else if(!email_pattern.test(values.email)){
        error.email = "Invalid Email"
    }
    else{
        error.email = ""
    }

    if(values.password ===""){
        error.password = "Password should not be empty"
    }
    else if(!password_pattern.test(values.password)){
        error.password = "Password is not in the correct format"
    }
    else{
        error.password = ""
    }
    return error;
}

export default Validation;