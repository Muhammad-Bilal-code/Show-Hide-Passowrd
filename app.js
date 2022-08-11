let showHide = ()=>{
    var pass = document.getElementById("password");
    var eye = document.getElementById("eye")
    var eyeSlash = document.getElementById("eye-slash")
    console.log("alert")
    if(pass.type === "password"){
        pass.type = "text";
        eyeSlash.style.display = "inline-block"
        eye.style.display = "none"
    }
    else{
        pass.type = "password";
        eye.style.display = "inline-block"
        eyeSlash.style.display = "none"
    }
    console.log("alert")
}