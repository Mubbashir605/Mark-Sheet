function percentage() {
    per = (obtainedMarks * 100) / totalMarks;
    per = per.toFixed(2);
    return per;
  }
  
  function toGrade(num) {
    if (num >= 90) {
      return (gradeCol4.innerText = "A1");
    } else if (num >= 70) {
      return (gradeCol4.innerText = "A");
    } else if (num >= 50) {
      return (gradeCol4.innerText = "B");
    } else if (num >= 40) {
      return (gradeCol4.innerText = "C");
    } else if (num >= 30) {
      return (gradeCol4.innerText = "D");
    } else {
      return (gradeCol4.innerText = "-");
    }
  }
  
  var mainDiv = document.getElementById("main");
  var table = document.createElement("table");
  
  table.setAttribute("class", "table");
  table.setAttribute("cellpadding", "10");
  table.setAttribute("cellspacing", "4");
  var count = 0;
  var totalMarks = 450;
  var userInp = Number(prompt("Enter your Mathematics Marks \n Out of 100"));
  var per;
  var obtainedMarks = 0;
  
  for (i = 0; i < 8; i++) {
    count++;
    var tableRow = document.createElement("tr");
    var subName = document.createElement("th");
    var tableCol1 = document.createElement("td");
    var tableCol2 = document.createElement("td");
    subName.innerText = "SUBJECTS";
    tableCol1.innerText = "TOTAL MARKS";
    tableCol2.innerText = "OBTAINED MARKS";
    tableRow.appendChild(subName);
    tableRow.appendChild(tableCol1);
    tableRow.appendChild(tableCol2);
    table.appendChild(tableRow);
  
    if (count === 1) {
      tableCol1.setAttribute("class", "col1");
      tableCol2.setAttribute("class", "col1");
    } else if (count === 2) {
      subName.innerText = "MATHS";
      tableCol1.innerText = 100;
      tableCol2.innerText = userInp;
      var userInp1 = Number(prompt("Enter your Physics Marks \n Out of 75"));
      obtainedMarks += userInp;
    } else if (count === 3) {
      subName.innerText = "PHYSICS";
      tableCol1.innerText = 75;
      tableCol2.innerText = userInp1;
      var userInp2 = Number(prompt("Enter your Islamiat Marks \n Out of 75"));
      obtainedMarks += userInp1;
    } else if (count === 4) {
      subName.innerText = "ISLAMIAT";
      tableCol1.innerText = 75;
      tableCol2.innerText = userInp2;
      var userInp3 = Number(prompt("Enter your Urdu Marks \n Out of 100"));
      obtainedMarks += userInp2;
    } else if (count === 5) {
      subName.innerText = "URDU";
      tableCol1.innerText = 100;
      tableCol2.innerText = userInp3;
      var userInp4 = Number(prompt("Enter your English Marks \n Out of 100"));
      obtainedMarks += userInp3;
    } else if (count === 6) {
      subName.innerText = "ENGLISH";
      tableCol1.innerText = 100;
      tableCol2.innerText = userInp4;
      obtainedMarks += userInp4;
    } else if (count === 7) {
      subName.innerText = "TOTAL MARKS";
      tableCol1.innerText = "OBTAINED MARKS";
      tableCol2.innerText = "STATUS";
      tableCol1.setAttribute("class", "col1");
      tableCol2.setAttribute("class", "col1");
    } else if (count === 8) {
      subName.innerText = totalMarks;
      tableCol1.innerText = obtainedMarks;
      tableCol2.innerText = "PASS";
      tableCol2.setAttribute("id", "green");
      subName.setAttribute("class", "num");
  
      per = percentage();
      if (per < 40) {
        tableCol2.innerText = "FAIL";
        tableCol2.setAttribute("id", "red");
      }
    }
  }
  
  mainDiv.appendChild(table);
  
  var grade = document.createElement("table");
  
  grade.setAttribute("class", "grade");
  grade.setAttribute("cellpadding", "5");
  var gradeRow1 = document.createElement("tr");
  var gradeCol1 = document.createElement("td");
  gradeCol1.setAttribute("width", "15");
  var gradeCol2 = document.createElement("td");
  var gradeCol3 = document.createElement("td");
  gradeCol3.setAttribute("width", "150");
  var gradeCol4 = document.createElement("td");
  gradeCol1.innerText = "";
  gradeCol2.innerText = "Grade";
  gradeCol2.setAttribute("class", "forClass");
  
  toGrade(per); 
  
  var perRow1 = document.createElement("tr");
  var perCol1 = document.createElement("td");
  perCol1.setAttribute("width", "15");
  var perCol2 = document.createElement("td");
  var perCol3 = document.createElement("td");
  perCol3.setAttribute("width", "150");
  var perCol4 = document.createElement("td");
  perCol2.innerText = "Percentage";
  perCol2.setAttribute("class", "forClass");
  perCol4.innerText = per; 
  
  gradeRow1.appendChild(gradeCol1);
  gradeRow1.appendChild(gradeCol2);
  gradeRow1.appendChild(gradeCol3);
  gradeRow1.appendChild(gradeCol4);
  grade.appendChild(gradeRow1);
  
  perRow1.appendChild(perCol1);
  perRow1.appendChild(perCol2);
  perRow1.appendChild(perCol3);
  perRow1.appendChild(perCol4);
  grade.appendChild(perRow1);
  
  mainDiv.appendChild(grade);
