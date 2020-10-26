// register validation

class RegisterValidator {
    validate(password, confirmpassword) {
        if (password != confirmpassword) {
            throw "Password doesn't matched!"
        }
    }
}