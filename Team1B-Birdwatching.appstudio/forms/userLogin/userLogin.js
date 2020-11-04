
let accountName = ""
// correct login is: Smith and pw 123Dogs#  

btnSubmit.onclick=function(){
  accountName = inptAccount.value
  let pass = inptPassword.value
  if ((accountName == "Smith") && (pass == "123Dogs#"))
    ChangeForm(location)
  else { 
    lblError.hidden = false
    lblError.textContent = "That login is not recognised. Please try again."
    inptAccount.value = ""
    inptPassword.value = ""
  }
}

/*just type in username and password from database*/