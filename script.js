let locn = document.querySelector('.location');
const mycity = document.getElementById('city');
const submitbtn = document.getElementById('submit');
let theimg = document.getElementById('theimg');
let temp = document.getElementById('tempValue');
let climate = document.querySelector('.climate');

let filename;

//current location
window.addEventListener('load', () => {
    let lon; 
    let lat;
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position) =>{
            lon = position.coords.longitude;
            lat = position.coords.latitude;
            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=76311c629b4005b50ca2882982e570dc`;

            fetch(api).then((res) => {
                return res.json();
            })
            .then(data => {
                const{name} = data;
                const{feels_like} = data.main;
                const{id, main} = data.weather[0];
                const myid = data.weather[0].id;

                locn.textContent = name;
                climate.textContent = main;
                temp.textContent = Math.round(feels_like - 273);

                if(climate.textContent == 'Thunderstorm'){
                    theimg.src = './images/thunderstorm.svg';
                }
                else if(climate.textContent == 'Drizzle'){
                    theimg.src = './images/drizzle.svg';
                }
                else if(climate.textContent == 'Rain'){
                    theimg.src = './images/rain.svg';
                }
                else if(climate.textContent == 'Haze'){
                    theimg.src = './images/fog.svg';
                }
                else if(climate.textContent == 'Snow'){
                    theimg.src = './images/snow.svg';
                }
                else if(climate.textContent == 'Atmosphere'){
                    theimg.src = './images/atmosphere.svg';
                }
                else if(climate.textContent == 'Clear'){
                    theimg.src = './images/sun.svg';
                }
                else if(climate.textContent == 'Clouds'){
                    theimg.src = './images/clouds.svg';
                }
                console.log(data);
                console.log(id);
            })
        })
    }
})

//type location 

submitbtn.addEventListener('click', (e) => {
    e.preventDefault;
    myWeather(mycity.value);
    mycity.value = '';
})

const myWeather = async (city) => {
    try{
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=76311c629b4005b50ca2882982e570dc`);
        const mydata = await res.json();
        console.log(mydata);
        const{name} = mydata;
        const{feels_like} = mydata.main;
        const{id,main} = mydata.weather[0];

        locn.textContent = name;
        climate.textContent = main;
        temp.textContent = Math.round(feels_like - 273);

        if(climate.textContent == 'Thunderstorm'){
            theimg.src = './images/thunderstorm.svg';
        }
        else if(climate.textContent == 'Drizzle'){
            theimg.src = './images/drizzle.svg';
        }
        else if(climate.textContent == 'Rain'){
            theimg.src = './images/rain.svg';
        }
        else if(climate.textContent == 'Haze'){
            theimg.src = './images/fog.svg';
        }
        else if(climate.textContent == 'Snow'){
            theimg.src = './images/snow.svg';
        }
        else if(climate.textContent == 'Atmosphere'){
            theimg.src = './images/atmosphere.svg';
        }
        else if(climate.textContent == 'Clear'){
            theimg.src = './images/sun.svg';
        }
        else if(climate.textContent == 'Clouds'){
            theimg.src = './images/clouds.svg';
        }
        console.log(mydata);
    }
    catch(err){
        alert('City not found!');
    }
}