
btnNealWoods.onclick=function(){
  ChangeForm(nealWoods)
}

btnHeronHaven.onclick=function(){
  ChangeForm(heronHaven)
}

btnStandingBear.onclick=function(){
  ChangeForm(standingBear)
}

btnElmwoodPark.onclick=function(){
  ChangeForm(elmwoodPark)
}

btnOtherFeatures.onclick=function(){
  ChangeForm(otherFeatures)
}

btnLogout.onclick=function(){
  ChangeForm(userLogin)
}

let homepageURL = "https://api.imgur.com/3/image/4xSvBo6"

let bgNumber = ""
function onXHRLoad() {
    let apiData = JSON.parse(this.responseText)
    for (i = 0; i <= apiData.data.length - 1; i++) {
        console.log(`${apiData.data[i].id}`)
        bgNumber = bgNumber + apiData.data[i].id + "\n"
    }
  }
backgroundURL = "url(https://i.imgur.com/" + bgNumber + ".jpg)"
parkLocationHome.backgroundImage = backgroundURL

function callAPI(homepageURL) {
    var xhttp1 = new XMLHttpRequest();
    // if you need cors (you'll get a cors error if you don't have it and you need it)
    // use this code to add the cors code to your url 
    xhttp1.open('GET', 'https://cors-anywhere.herokuapp.com/' + homepageURL)
    
    //if you DON'T need cors use this code
    //xhttp1.open('GET',URL)
    
    // if you need to set the returned data type, use this line of code: 
    //xhttp.setRequestHeader('Content-Type', 'application/json')
    
    // if you need authorization token (stored in myToken) use this line of code: 
    //xhttp.setRequestHeader('Authorization', 'Bearer ' + myToken)
    
    // if you need a key and it's not in the url use code in one of the following
    // examples (think of headers as parameters)
    // or just use the Postman url which has all the parameters already added like I did here. 
    
    /*
    xhttp.setRequestHeader('key','AIzaSyCE-pjULPU_Gp5Qf0qL39tVsdJBX55J0cY')
    xhttp.setRequestHeader('location','41.276900,-95.942310')
    xhttp.setRequestHeader('rankby','distance')
    xhttp.setRequestHeader('type','restaurant')
    */

    // make the API request
    xhttp1.addEventListener('load', onXHRLoad)
    xhttp1.send()
    

parkLocationHome.onshow=function(){
  callAPI(backgroundURL)
}
}