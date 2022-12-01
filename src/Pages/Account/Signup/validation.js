export const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.userEmail) {
      errors.userEmail = "Email is required";
    } else if (!regex.test(values.userEmail)) {
      errors.userEmail = "invalid Email";
    }

    if(!values.cnfMail){
        console.log("Hello hi",values.cnfMail);
        errors.cnfMail = "Confirm email required"
    }else if(values.userEmail !== values.cnfMail){
        errors.cnfMail = "Email is not matched"
    }else if(!regex.test(values.userEmail)){
        errors.cnfMail =  "invalid Email"
    }

    if (!values.userPassword) {
      errors.userPassword = "Password is required";
    } else if (values.userPassword < 4) {
      errors.userPassword = "Password must be more than 4 characters";
    }

    if(!values.name){
        errors.name = "Name is required"
    }else if(values.name.length < 4){
        errors.name = "Name must be more than 6 characters"
    }
    return errors;
};


export const dateValidate = (values) => {
    const dateErrors = {};
    if (!values.year) {
      dateErrors.year = "Year is required";
    }
  
    if (values.month === "Month" || !values.month) {
      dateErrors.month = "Month is required";
    }
  
    if (!values.day) {
      dateErrors.day = "Day is required";
    }
    return dateErrors;
  };