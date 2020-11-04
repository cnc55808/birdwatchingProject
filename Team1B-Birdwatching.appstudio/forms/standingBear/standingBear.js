/*
SELECT name, park_name
FROM bird b 
INNER JOIN bird_species_to_park bp ON b.bird_id = bp.bird_id
INNER JOIN nature_parks n ON n.park_id = bp.park_id
WHERE park_name = "Neal Woods"
*/





//on show to populate dropdown
standingBear.onshow=function(){
  query = "SELECT name FROM bird b INNER JOIN bird_species_to_park bp ON b.bird_id = bp.bird_id INNER JOIN nature_parks n ON n.park_id = bp.park_id WHERE park_name = 'Standing Bear Lake'"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=kxa57381&pass=" + pw + "&database=kxa57381&query=" + query)
    if (req.status == 200) { //transit worked.
            results = JSON.parse(req.responseText)
            console.log(results)
            let message = ""
            for (i = 0; i < results.length; i++)
            message = message + results[i] + "\n"
            txtBirdInfo.value = message
        
            // names now in results array - load names into the dropdown
            selBirdName2.clear()
            for (i = 0; i <= results.length - 1; i++)
                selBirdName2.addItem(results[i])
    } else {
        // transit error
        NSB.MsgBox(`Error: ${req.status}`);
    }  

}



btnSeeInfo2.onclick=function(){
        let message = "test"
        txtBirdInfo2.value = message
}



btnGoToLocations2.onclick=function(){
  ChangeForm(parkLocationHome)
}

btnBookmarkCopy2.onclick=function(){
  
}

btnNoBookmarkCopy2.onclick=function(){
  
}
