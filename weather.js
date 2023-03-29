
const API_KEY = "a1d989a88ea8670d757250bd5fa2ad43";

function success(position){ //위치정보에 대한 객체를 인자로 받아왔음. 이름은 맘대로, 가독성 생각해서 지었음.
    const lat = position.coords.latitude;   //받아온 인자(객체)의 프로퍼티를 변수에 할할당
    const lon = position.coords.longitude;
    const URL = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(URL).then(Response => Response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");

        weather.innerHTML = `${data.weather[0].main} / ${data.main.temp}`;
        city.innerHTML = data.name;
    })
}
function error(){
    alert("Can't find your location.");
}
navigator.geolocation.getCurrentPosition(success,error);