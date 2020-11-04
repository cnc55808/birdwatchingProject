
btnViewInfo.onclick=function(){
    query = "SELECT * FROM user"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=kxa57381&pass=" + pw + "&database=kxa57381&query=" + query)

if (req.status == 200){ 
        results = JSON.parse(req.responseText)
        console.log(results)
        
    if (results.length == 0){  
        lblError2.value = "You were not found in the database."
    }else {   
        console.log(`the parsed JSON is ${results}`)
        console.log(`the first row/item in the big array is a small array: ${results[0]}`)

        let message = ""
        for (i = 0; i < results.length; i++)
            message = message + results[i][1] + "\n"
        /*txtAccountInfo.value = message*/
     } 

}else {  
        lblError2.value = "Error code: " + req.status
  }
}



btnUpdateEmail.onclick=function(){
  ChangeForm(emailUpdate)
}

/*How to get only current user's information and not all of the users in the 
database's information*/


btnDeleteEmail.onclick=function(){
  ChangeForm(accountDelete)
}

btnGoBack3.onclick=function(){
  ChangeForm(otherFeatures)
}
