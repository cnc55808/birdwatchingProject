let emailList = ""




/*
btnDel.onclick=function(){
    let emailDel = selEmailDelete.value
    let found = ""
    for (i = 0; i <= emailList.length - 1; i++) {
        if (emailDel === emailList[i][1]){
            found = true
            break 
        }else{
            found = false
    }
  }
    if (found == false) 
       lblDel.textContent = "That email is not in the database."
    else if (found == true) {
      query = "DELETE email FROM user WHERE email = " + '"' + emailDel + '"'
      req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=kxa57381&pass=" + pw + "&database=kxa57381&query=" + query)

      if (req.status == 200) 
            if (req.responseText == 500) 
                lblDel.textContent = `You have successfully deleted the email named ${emailDel}`
            else
                lblDel.textContent = `There was a problem deleting ${emailDel} from the database.`
      else
        lblDel.textContent = `Error: ${req.status}`
      }
}
*/ 


/*
btnDel.onclick=function(){
let userDelUsername = inptDelUsername.value
let userDelPass = inptDelPassword.value  
 query = "DELETE FROM user WHERE username = " + '"' + userDelUsername + '"' AND password = " + '"' + userDelPass + '"' //How to write this in app studio?
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=kxa57381&pass=" + pw + "&database=kxa57381&query=" + query)
      
        if (req.status == 200) { //transit worked.
            if (req.responseText == 500) {   // means the update succeeded
                NSB.MsgBox(`You have successfully deleted your Account!`)
      
                // reset controls to original state
                selEmailDelete.value = ""
                inptUsernameEmailDelete.value = ""
                
              } else
                NSB.MsgBox(`There was a problem deleting your Account.`)
        } else 
            // transit error
            NSB.MsgBox(`Error: ${req.status}`);
ChangeForm(userCreateAccount)
} 

btnGoBack1.onclick=function(){
  ChangeForm(accountInformation)
}
*/
