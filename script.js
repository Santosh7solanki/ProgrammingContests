// Chapter 10 practice set. 
// Problem No -01 - use a free Api form the Internet and feed your app with live data. 

let url = "https://kontests.net/api/v1/all" // api hai 
let responce = fetch(url)
responce.then((v) => {
  return v.json()
}).then((contest) => {
  console.log(contest)
  ihtml = ""
  for (item in contest) {
    console.log(contest[item])
    ihtml += `
      <div class="card mx-2 my-2" style="width: 22rem;">
        <img src="https://s3-us-west-2.amazonaws.com/robogarden-new/Articles/upload/blogs/lg-leverage-of-coding.jpg" class="card-img-top" alt="...">
        <div class="card-body ">
          <h5 class="card-title">${contest[item].name}</h5>
          <p class="card-text"> Status is ${contest[item].status} and site is ${contest[item].site}</p>
          <p class="card-text"> in 24 Hours ${contest[item].in_24_hours}</p>
          <p>start at: ${contest[item].start_time}</p>
          <p>end at: ${contest[item].end_time}</p>
          <a href="${contest[item].url}" class="btn btn-primary my-2">Visit Contest</a>
        </div>
      </div>
    `
  }
  cardcontainer.innerHTML = ihtml
})



/* ******************* NOTES APP (REMAINING QUESTIONS OF PRACTICE SET) *********** */

// Problem No -02 - Create a note saving app which store your note to local Storage, and // Problem No -04 get note and delete the note. 

let n = localStorage.getItem("note")
alert(n)

let a = prompt("Let Explore your Mind here...!!")
if (a){
localStorage.setItem("note", a)
}

let c = confirm("Do you want to delete your note")
if (c){
  localStorage.removeItem("note")
  alert("Note deleted succesfully")
}