const api ={
    key:"2486de6263fdf7f6a9ec32cdfb064083",
    baseurl:"https://home.openweathermap.org/data/"
}

const searchbox =document.querySelector(".search-box");
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt){
    if(evt.keyCode == 13) {
        getResults(search.value);
        console.log(searchbox.value);
    }


}

function getResults(query) {
    console.log(query);
    fetch('${api.base}weather?q=${query}&units=metric&APPID=${api.key}')
    .then(weather =>{
        return weather.json();
    }).then(displayResults);

    }

    function displayResults(weather){
        console.log(weather);
        let city = document.querySelector('.location .city');
        city.innerText ='${weather.name}, ${weather.sys.country}'

        let now = new Date();
        let date = document.querySelector('.location .date');
        date.innerText = dateBulider(now);


    }


    function dateBulider(d){
        let months= ["January","February","March", "April" ,"May", "June", "July" ,"August", "September", "October", "Novemeber", "December" ]
        let days = ["Sunday", "Monday" ,"Tusday", "Wednesday", "Thursday", "Friday", "Saturday"]

        let day =days[d.getDay()];
        let date = d.getDate()
        let month =months[d.geMontrhs()];
        let year=d.getFullYear();
        return '${day} ${date} $(month) ${year}';
    }
 


