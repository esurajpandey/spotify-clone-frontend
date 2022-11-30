export const validateForm = (values) => {
    const formError = {};

    if(!values.userEmail){
        formError.userEmail ="Please enter your Spotify username or email address."
    }

    if(!values.userPassword) {
        formError.userPassword = "Please enter your password."
    }

    return formError;
}