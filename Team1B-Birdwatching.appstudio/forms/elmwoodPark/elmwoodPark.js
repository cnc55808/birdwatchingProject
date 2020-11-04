/*
SELECT name, park_name
FROM bird b 
INNER JOIN bird_species_to_park bp ON b.bird_id = bp.bird_id
INNER JOIN nature_parks n ON n.park_id = bp.park_id
WHERE park_name = "Neal Woods"
*/




//on show to populate dropdown
elmwoodPark.onshow=function(){
  query = "SELECT name FROM bird b INNER JOIN bird_species_to_park bp ON b.bird_id = bp.bird_id INNER JOIN nature_parks n ON n.park_id = bp.park_id WHERE park_name = 'Elmwood Park'"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=kxa57381&pass=" + pw + "&database=kxa57381&query=" + query)
    if (req.status == 200) { //transit worked.
            results = JSON.parse(req.responseText)
            console.log(results)
            let message = ""
            for (i = 0; i < results.length; i++)
            message = message + results[i] + "\n"
            txtBirdInfo3.value = message
        
            // names now in results array - load names into the dropdown
            selBirdName3.clear()
            for (i = 0; i <= results.length - 1; i++)
                selBirdName3.addItem(results[i])
    } else {
        // transit error
        NSB.MsgBox(`Error: ${req.status}`);
    }  

}



btnSeeInfo3.onclick=function(){
        query = "SELECT description FROM bird b INNER JOIN bird_species_to_park bp ON b.bird_id = bp.bird_id INNER JOIN nature_parks n ON n.park_id = bp.park_id WHERE park_name = 'Elmwood Park'"
        req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=kxa57381&pass=" + pw + "&database=kxa57381&query=" + query)
    if (req.status == 200) { //transit worked.
            results = JSON.parse(req.responseText)
            console.log(results)
            let message = ""
            for (i = 0; i < results.length; i++)
            message = message + results[4] + "\n"
            txtBirdInfo3.value = message
  }
}


btnGoToLocations3.onclick=function(){
  ChangeForm(parkLocationHome)
}

btnBookmarkCopy3.onclick=function(){
  
}

btnNoBookmarkCopy3.onclick=function(){
  
}
