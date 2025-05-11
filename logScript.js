let dataBehavior = {
    userName: "",
    Email: "",
    password: "",
    Registere: function() {
        console.log("Button clicked");
        this.userName = document.getElementById("regUsername").value.trim();
        this.Email = document.getElementById("regEmail").value.trim();
        this.password = document.getElementById("regPassword").value.trim();

        if (!this.userName || !this.Email || !this.password) {
            alert("Please fill all the fields");
            return false;
        }

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(this.Email)) {
            alert("Email is Not Valid");
            return false;
        }

        if (this.password.length < 6) {
            alert("Password must be at least 6 characters long");
            return false;
        }
        let users = JSON.parse(localStorage.getItem("users")) || [];

        let newUser = {
            userName: this.userName,
            Email: this.Email,
            password: this.password
        };

        users.push(newUser);

        localStorage.setItem("users", JSON.stringify(users));

        alert("Registration Successful");
        location.href = "login.html";
        return true;
    },

    Login: function() {
        this.userName = document.getElementById("logUsername").value.trim();
        this.password = document.getElementById("logPassword").value.trim();

        if (!this.userName || !this.password) {
            alert("Please fill in all fields");
            return false;
        }

        let users = JSON.parse(localStorage.getItem("users")) || [];
        let userFound = false;

        for (let i = 0; i < users.length; i++) {
            if (users[i].userName === this.userName && users[i].password === this.password) {
                userFound = true;
                break;
            }
        }

        if (userFound) {
            alert("Login Successful");
            location.href = "index.html";
            return true;
        } else {
            alert("Invalid username or password");
            return false;
        }
    }
}