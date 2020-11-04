/*
INSERT a pet into the database (assume it is not already in the database)
  Algorithm
  1. get the name and type of the pet they want to insert into the database.
  2. create insert query
  3. test the query in the database
  4. run query (ajax call)
    > if transit worked, check .responseText for query results
         - if .responseText is 500, means the insert worked - tell user so
         - if .responseText is not 500, means the insert did not work - tell user so
    > if transit didn't work, tell user error in transit
*/

/*populating the select
birdInsert.onshow=function(){
   query = "SELECT park_name FROM nature_parks"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=kxa57381&pass=" + pw + "&database=kxa57381&query=" + query)
    if (req.status == 200) { //transit worked.
            results = JSON.parse(req.responseText)
            console.log(results)

            // names now in results array - load names into the dropdown
            selLocation.clear()
            for (i = 0; i <= results.length - 1; i++)
                selLocation.addItem(results[i])
    } else {
        // transit error
        NSB.MsgBox(`Error: ${req.status}`);
    }  

}
*/


btnSubmit3.onclick=function(){
    let name = inptName.value
    let birdType = inptType.value
    let color = inptColor.value
    let description = inptDescription.value
    let query = "INSERT INTO bird (name, type, color, description) VALUES ('" + name + "', '" + birdType + "', '" + color + "', '" + description + "')"

    
    // replace my netID with yours (2 places)
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=kxa57381&pass=" + pw + "&database=kxa57381&query=" + query)

    if (req.status == 200) { //transit worked.
        if (req.responseText == 500) {   // for our server - this means the insert succeeded
            lblMessage3.textContent = "You have successfully added the bird!"
       } else
            lblMessage3.textContent = "There was a problem with adding the bird to the database."
    } else {
        // transit error
        lblMessage3.textContent = "Error: " + req.status
  }
}


btnGoBack2.onclick=function(){
  ChangeForm(otherFeatures)
}


/*Might need to write code to insert bird into bird_species_to_park so it shows up in dropdown*/