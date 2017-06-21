console.log("Epic Adventure Time!");

// create an object array for our selections
var taskList = {
  members: [

]};

// creates the unordered list for output
function formData () {
  var teamList = document.getElementById("team-list")
  // reset the page - not working ask why
  // document.getElementsByTagName("form").reset();

  var ul = document.createElement("ul")
    for(var i = 0; i < taskList.members.length; i++) {
      console.log(taskList.members[i])

      var li = document.createElement("li");
        li.innerHTML = taskList.members[i]
        // append the li to the ul elements
        ul.appendChild(li)
      }
      // append the ul to the parent div
      teamList.appendChild(ul)
    }

function addList () {
  event.preventDefault();
  // locate form section and find our values
  // lets use querySelector since there is only one form
  var form = document.querySelector("form");
  // our task in this case is player selection for our team, input our values
  var taskMember = form.teamMember.value + "\xa0has chosen to be the\xa0" + form.memberClass.value + "\xa0for your party and has requested difficulty\xa0" + document.getElementById("difficulty").value;
  // push selection to our array
  taskList.members.push(taskMember);
  formData();
}

window.onload = function() {
  formData();

  var form = document.querySelector("form")
  form.onsubmit = addList;
}
