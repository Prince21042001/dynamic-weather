const submitBtn=document.getElementById('submitBtn');
const cityname=document.getElementById("cityName");
const city_name=document.getElementById("city_name");
const temp_real_val=document.getElementById("temp_real_val");
const temp_status=document.getElementById("temp_status");
const humidity_real_val=document.getElementById("humidity_real_val");
const wind_speed=document.getElementById("wind_speed");
const min__temp=document.getElementById("min__temp");
const max__temp=document.getElementById("max__temp");
console.log(cityname);

async function getInfo(event){
      event.preventDefault();
      let cityval=cityname.value;
    if (cityval==""){
        alert("please enter city name");

    }
    else{
    try{
        const url=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=ae9207df32a6a0583805494c3d49ca72`);
        const data=await url.json();
        const arrdata=[data];
        temp_real_val.innerText=`${data.main.temp}`;
        city_name.innerText=`${arrdata[0].name},${arrdata[0].sys.country}`;
        const tempmod=arrdata[0].weather[0].main;
        humidity_real_val.innerText=`${data.main.humidity}`;
        wind_speed.innerText=`${data.wind.speed}`;
        min__temp.innerText=`${data.main.temp_min}`;
        max__temp.innerText=`${data.main.temp_max}`;
     //  temp_status.innerText=arrdata[0].weather[0].main;
        if(tempmod=="Clear")
        {
            temp_status.innerHTML="<i class='fas  fa-sun' style='colour: #eccc68;'></i>";
        }
        else if(tempmod=="Clouds")
        {
            temp_status.innerHTML="<i class='fas  fa-cloud' style='colour: #f1f2f6;'></i>";
        }
        else if(tempmod=="Rain")
        {
            temp_status.innerHTML="<i class='fas  fa-rain' style='colour: #a4b0be;'></i>";
        }
        else
        {
            temp_status.innerHTML="<i class='fas  fa-sun' style='colour: #eccc68;'></i>";
        }
    }
    catch{

        alert("write city name properly");
    }
}
}
submitBtn.addEventListener("click", getInfo);