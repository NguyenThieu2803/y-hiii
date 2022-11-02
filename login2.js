function login() {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    if(user == "YEUANHTHIEUNHIEU" && pass == "cuccuc2314") {
        alert("EM ĐÁ ĐĂNG NHẬP THÀNH CÔNG HEHE");
        window.location.href = "main/main.html"
        return false;
    } else {
        alert("SAI TỀ EM ƯI");
        return false;
        }
    }