class UserServices {

    // function for getting users
    getUsers() {
            var oldUsers;
            if (localStorage.getItem('USERS')) {
                oldUsers = JSON.parse(localStorage.getItem('USERS'));
            } else {
                oldUsers = [];
            }
            return oldUsers;
        }
        //register function
    register(user) {
        // check if users exits else create
        var oldUsers = this.getUsers();
        // add new user
        oldUsers.push(user);
        localStorage.setItem('USERS', JSON.stringify(oldUsers));
        window.location.href = "../loginpage.html";
    }

    // login function
    login(email, password) {
        var users = this.getUsers();

        // validationg password
        for (var i = 0; i < users.length; i++) {
            if (users[i].email == email) {
                if (users[i].password == password) {
                    //accept login
                    localStorage.setItem('LOGGED_IN_USER', JSON.stringify(users[i]));
                    window.location.href = "../index.html";
                    break;
                } else {
                    throw "Password Doesn't matched!";
                }
            }
        }
    }
}