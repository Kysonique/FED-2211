let nav = 0;

const CALENDER = document.getElementById('calender');
const WEEKDAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

//function to load date based off browser date methods
function load(){
    const dt = new Date();
    const day = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();
    console.log(day, month, year);

    const firstDayOfMonth = new Date(year, month, 1)
    const daysInMonth = new Date(year, month + 1, 0).getDate();
     
  //setting how the date will display in browser  
    const dateString = firstDayOfMonth.toLocaleDateString("en-us", {
        weekday: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    })
    console.log(dateString)
    
//getting the number of padding days
    const paddingDays = WEEKDAYS.indexOf(dateString.split(",")[0])

    //making sure the padding days line up with the next month.... adding a padding div (in css has no style)
    for (let i = 1; i <= paddingDays+daysInMonth; i++){
        const daySquare = document.createElement('div');
        daySquare.classList.add('day');
        if (i > paddingDays){
            daySquare.innerText = i -paddingDays;
        } else{
            daySquare.classList.add('padding')
        }
    }
    CALENDER.appendChild(daySquare)
}
load()