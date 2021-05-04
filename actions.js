const date = new Date();
// constractur of the selected element,  build option  
const yearsCreater = function(start){
    const year = document.querySelector(".picker-y");
    for (var y = start; y <= 2030; y++) {
        option = document.createElement("option");
        option.value = y;
        option.text = y;
        year.appendChild(option);
      }
}

// give the selected year and show it on the screan
function selectedOption() {
  selectElement = document.querySelector('#sel'); 
  let p = document.querySelector('.date-cal p');
  let string = "";
  if(p.textContent.length > 0){
   // p.textContent = p.textContent.substring(4);
    string =  p.textContent.substr(0,p.textContent.length - 4);
    document.querySelector('.date-cal p').textContent = string+selectElement.value;
  }
        
  }

  // calender constructor 
function calendarConstructors() 
{    
    date.setDate(1);
    const monthDays = document.querySelector(".days");
    let toDay;
  
    
    const lastDay = new Date(   
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();
  
    const prevLastDay = new Date(
      date.getFullYear(),
      date.getMonth(),
      0
    ).getDate();
  
    const firstDayIndex = date.getDay();

    const lastDayIndex = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDay();
    const nextDays = 7 - lastDayIndex - 1;
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
  
   
    let days = "";
    /// build the array of days and write into the html 
    for (let x = firstDayIndex; x > 0; x--) {
      days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    }
  
    for (let i = 1; i <= lastDay; i++) {
      if ( i === new Date().getDate() && date.getMonth() === new Date().getMonth()
      ) {
        days += `<div class="today">${i}</div>`;
        toDay = i;
        localStorage.setItem('toDay',i);
      } else {
        days += `<div class="no-slected">${i}</div>`;
      }
      //dayList.push(i)
    }
    for (let j = 1; j <= nextDays; j++) {
      days += `<div class="next-date">${j}</div>`;
      monthDays.innerHTML = days;
    }  
     console.log(toDay);
     document.querySelector(".date-cal h2").innerHTML = months[date.getMonth()];
     document.querySelector(".date-cal p").innerHTML = `${months[date.getMonth()]} ${localStorage.getItem('toDay')===toDay? toDay:localStorage.getItem('toDay')}  ${ document.querySelector('#sel').value}`;
  };
  
  yearsCreater(new Date().getFullYear());

  document.querySelector(".prev").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    calendarConstructors();
  });
  
  document.querySelector(".next").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    calendarConstructors();
   
  });
  document.querySelector('.days').addEventListener('click', e =>{
    const day = localStorage.getItem('toDay');
   if(e.target.textContent !== day){
      document.querySelectorAll('.no-slected').forEach(day =>{
        if(e.target.textContent === day.textContent && day.classList.contains(e.target.className)){
          day.classList.toggle('selected');
          localStorage.setItem('toDay', e.target.textContent);
        }else{
          day.classList.remove('selected');
        }
      });
   }


  }); 
  
  calendarConstructors();


  /*
  document.querySelector(".days").addEventListener("click", () => {
    document.querySelector(".days").classList.value.toggle("selected");
    calendarConstructors();
   
  });*/ 
  
  /*
  document.querySelector(".days").addEventListener("click",()=>{
     
    alert();
 
   });*/
  // not finish
  //document.querySelector(".picker-y").addEventListener(onchange, () => {
      //selectedOption(this);
    //});
    
/*
  const dayClicked = function(){
    const d = document.querySelector('.days');  
    d.value.style.backgroundColor = "#7e4d16";
    renderCalendar();

  }*/
    
