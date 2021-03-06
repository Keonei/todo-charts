console.log("Epic Adventure Time!");

var tasks = [
];

for (var i = 0; i < tasks.length; i++) {
    console.log(tasks[i])
   var name = tasks[i].name;
};

let paladinCount = 0;
let clericCount = 0;
let rangerCount = 0;
let rogueCount = 0;
let fighterCount = 0;
let wizardCount = 0;

function formData() {
  event.preventDefault();
  var form = document.forms["letsPlay"];
  var selection = {name: form.memberClass.value}
  tasks.push(selection);

  drawChart();
};

function calcTotals() {
  paladinCount = 0;
  clericCount = 0;
  rangerCount = 0;
  rogueCount = 0;
  fighterCount = 0;
  wizardCount = 0;

  for (let task of tasks) {
    if (task.name == "Paladin") {
          paladinCount++;
        } else if (task.name == "Cleric") {
          clericCount++;
        } else if (task.name == "Ranger") {
          rangerCount++;
        } else if (task.name == "Rogue") {
          rogueCount++;
        } else if (task.name == "Fighter") {
          fighterCount++;
        } else if (task.name == "Wizard") {
            wizardCount++;
        }
    }
};

function drawChart() {
  calcTotals();

  google.charts.load('current', {packages: ['corechart', 'bar']});
  google.charts.setOnLoadCallback(drawBasic);

  var taskCounter = {
    paladin: paladinCount,
    cleric: clericCount,
    ranger: rangerCount,
    rogue: rogueCount,
    fighter: fighterCount,
    wizard: wizardCount
  };

  function drawBasic() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Class');
        data.addColumn('number', 'Chosen');

        data.addRows([
          ['Paladin', paladinCount],
          ['Cleric', clericCount],
          ['Ranger', rangerCount],
          ['Rogue', rogueCount],
          ['Fighter', fighterCount],
          ['Wizard', wizardCount]
        ]);

        var options = {
          title:'Chosen',
          hAxis: {
            title: 'Whats in play'
          },
          vAxis: {
            title: 'Class'
          }
        };

        var chart = new google.visualization.ColumnChart(
          document.getElementById('chart_div'));

        chart.draw(data, options);
      }
}

window.onload = function() {
  var form = document.forms["letsPlay"];
  form.onsubmit = formData;
}


// chart

// var classes = [
//   "Paladin",
//   "Cleric",
//   "Ranger",
//   "Rogue",
//   "Fighter",
//   "Wizard"
// ];
//
// window.onload = function() {
//
//   // function calcTotals (){
//   //   paladinCount = 0;
//   //   clericCount = 0;
//   //   rangerCount = 0;
//   //   rogueCount = 0;
//   //   fighterCount = 0;
//   //   wizardCount = 0;
//   //
//   //   if (tasks.members == "Paladin") {
//   //     paladinCount++;
//   //   } else if (tasks.members == "Cleric") {
//   //     clericCount++;
//   //   } else if (tasks.members == "Ranger") {
//   //     rangerCount++;
//   //   } else if (tasks.members == "Rogue") {
//   //     rogueCount++;
//   //   } else if (tasks.members == "Fighter") {
//   //     fighterCount++;
//   //   } else if (tasks.members == "Wizard") {
//   //     wizardCount++;
//   //   }
//   // }
//
//   function buildChart(tasks) {
//     // calcTotals();
//
//       var dataChart = [];
//
//         for (var x = 0; x < classes.length; x++){
//           dataChart.push(0);
//           }
//           // loop through and get data for the tasks array
//           for (var i = 0; i < tasks.length; i++) {
//             dataChart[tasks[i].members]++;
//           }
//           // build the array for our chart
//           var rows = new Array ();
//           for (var y = 0; y < dataChart.length; y++) {
//             rows.push( [classes[y], dataChart[y]] );
//           }
//           console.log(rows);
//     // Load the Visualization API and the corechart package.
//     google.charts.load (
//       'current',
//       {'packages': ['corechart']
//     });
//
//     // Set a callback to run when the Google Visualization API is loaded.
//     google.charts.setOnLoadCallback(drawChart);
//
//     // Callback that creates and populates a data table,
//     // instantiates the pie chart, passes in the data and
//     // draws it.
//     function drawChart() {
//
//       // Create the data table.
//       var data = new google.visualization.DataTable();
//       data.addColumn('string', 'Class');
//       data.addColumn('number', 'Chosen');
//       data.addRows(rows);
//       // data.addRows([
//       //   [paladinCount],
//       //   [clericCount],
//       //   [rangerCount],
//       //   [rogueCount],
//       //   [fighterCount],
//       //   [wizardCount]
//       // ]);
//
//       // Set chart options
//       var options = {
//         title:'Chosen',
//         hAxis: {
//           title: 'Whats in play'
//         },
//         vAxis: {
//           title: 'Class'
//         }
//       };
//
//       // Instantiate and draw our chart, passing in some options.
//       var chart = new google.visualization.ColumnChart (
//         document.getElementById('chart_div'));
//
//         chart.draw(data, options);
//     };
//   }
//
//   // create an object array for our selections
//   var tasks = {
//     members: [
//
//   ]};
//   // creates the unordered list for output
//   function formData () {
//     var teamList = document.getElementById("team-list")
//     // reset the page - not working ask why
//     // document.getElementsByTagName("form").reset();
//
//     var ul = document.createElement("ul")
//       for(var i = 0; i < tasks.members.length; i++) {
//         console.log(tasks.members[i])
//
//         var li = document.createElement("li");
//           li.innerHTML = tasks.members[i]
//           // append the li to the ul elements
//           ul.appendChild(li)
//         }
//         // append the ul to the parent div
//         teamList.appendChild(ul)
//
//         buildChart(tasks);
//       }
//
//   document.forms["letsPlay"].onsubmit = addList;
//   function addList () {
//     event.preventDefault();
//     // locate form section and find our values
//     // lets use querySelector since there is only one form
//     var form = document.forms["letsPlay"];
//     var selection = form["memberClass"].value;
//     console.log(selection);
//     // our task in this case is player selection for our team, input our values
//     var taskMember = form.teamMember.value + "\xa0has chosen to be the\xa0" + form.memberClass.value + "\xa0for your party and has requested difficulty\xa0" + document.getElementById("difficulty").value;
//
//     // let paladinCount = 0;
//     // let clericCount = 0;
//     // let rangerCount = 0;
//     // let rogueCount = 0;
//     // let fighterCount = 0;
//     // let wizardCount = 0;
//
//     // push selection to our array
//     tasks.members.push(taskMember);
//     formData();
//
//     form.reset();
//   }
// }
