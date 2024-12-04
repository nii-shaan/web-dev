function showDetails() {
  // Taking the inputs
  const science = Number(document.querySelector(".science").value);
  const math = Number(document.querySelector(".math").value);
  const physics = Number(document.querySelector(".physics").value);
  const chemistry = Number(document.querySelector(".chemistry").value);
  const computer = Number(document.querySelector(".computer").value);

  // Displaying the inputs
  const total_marks = document.querySelector(".total");
  const average_marks = document.querySelector(".averagemarks");
  const percentage = document.querySelector(".percentage");

  const Total_Marks = science + math + physics + chemistry + computer;
  console.log(Total_Marks);

  const Average_Marks = Total_Marks / 5;
  console.log(Average_Marks);

  const totalpercentage = (Total_Marks / 500) * 100;
  console.log(totalpercentage);


  total_marks.innerHTML = Total_Marks;
  average_marks.innerHTML = Average_Marks.toFixed(2);
  percentage.innerHTML = totalpercentage.toFixed(2);

  switch (true) {
    case totalpercentage > 90:
      alert("A+");
      break;
    case totalpercentage > 80:
      alert("A");
      break;
    case totalpercentage > 70:
      alert("B+");
      break;
    case totalpercentage > 60:
      alert("B");
      break;
    case totalpercentage > 50:
      alert("C");
      break;
    case totalpercentage > 40:
      alert("D");
      break;
    case totalpercentage < 40:
      alert("Fail");
      break;
    default:
      alert("Invalid");
      break;
  }
}

