






function showDetails(){
    // Taking the inputs
    // const namee = document.querySelector('.username').value;
    const science = Number(document.querySelector('.science').value);
    const math = Number(document.querySelector('.math').value);
    const physics = Number(document.querySelector('.physics').value);
    const chemistry = Number(document.querySelector('.chemistry').value);
    const computer = Number(document.querySelector('.computer').value);

    // Displaying the inputs
    // const show_name = document.querySelector('.showname');
    // const science_marks = document.querySelector('.sciencemarks');
    // const math_marks = document.querySelector('.mathmarks');
    // const physics_marks = document.querySelector('.physicsmarks');
    // const chemistry_marks = document.querySelector('.chemistrymarks');
    // const computer_marks = document.querySelector('.computermarks');
    const total_marks = document.querySelector('.total');
    const average_marks = document.querySelector('.averagemarks');
    const percentage = document.querySelector('.percentage');

    const Total_Marks = science + math + physics + chemistry + computer;
    console.log(Total_Marks);
    
    const Average_Marks = Total_Marks/5;
    console.log(Average_Marks);

    const totalpercentage = (Total_Marks/500)*100;
    console.log(totalpercentage);
    

    total_marks.innerHTML = Total_Marks;
    average_marks.innerHTML = Average_Marks.toFixed(2);
    percentage.innerHTML = totalpercentage.toFixed(2);
}