// var d = new Date();
// d.getHours(); 
// d.getMinutes();  
// d.getSeconds(); 
// document.write(d.getHours()+'\n') 




function getWeather() {
// window.location.reload()

    let cityValue = document.getElementById("city").value 

    let morning = document.getElementById("day")
    let sunny = document.getElementById("sunny")
    let temp = document.getElementById("temp")
    let description = document.getElementById("desc")
    let tempn = document.getElementById("tempn")
    let descriptionn = document.getElementById("descn")
    let sun = document.getElementById("sun")
    let mn = document.getElementById("mn")
    let cn = document.getElementById("cn")
    let cd = document.getElementById("cd")
    let sd = document.getElementById("sd")
    let sn = document.getElementById("sn")
    let rn = document.getElementById("rn")
    let rd = document.getElementById("rd")
    let night = document.getElementById("night")
    let nighty =  document.getElementById("nighty")
    
    let dailyRainn = document.getElementById("daily-rainn")
    let dailySnown =  document.getElementById("daily-snown")
    let dailyCloudn = document.getElementById("daily-cloudn")
    let dailyMoonn =document.getElementById("daily-moonn")
    let dailyDescn = document.getElementById("daily-descn")
    let dailyDaten = document.getElementById("daily-daten")
    
    let dailyRainn1 = document.getElementById("daily-rainn1")
    let dailySnown1 =  document.getElementById("daily-snown1")
    let dailyCloudn1 = document.getElementById("daily-cloudn1")
    let dailyMoonn1 =document.getElementById("daily-moonn1")
    let dailyDescn1 = document.getElementById("daily-descn1")
    let dailyDaten1 = document.getElementById("daily-daten1")

    let dailyRainn2 = document.getElementById("daily-rainn2")
    let dailySnown2 =  document.getElementById("daily-snown2")
    let dailyCloudn2 = document.getElementById("daily-cloudn2")
    let dailyMoonn2 =document.getElementById("daily-moonn2")
    let dailyDescn2 = document.getElementById("daily-descn2")
    let dailyDaten2 = document.getElementById("daily-daten2")

    let dailyRainn3 = document.getElementById("daily-rainn3")
    let dailySnown3 =  document.getElementById("daily-snown3")
    let dailyCloudn3 = document.getElementById("daily-cloudn3")
    let dailyMoonn3 =document.getElementById("daily-moonn3")
    let dailyDescn3 = document.getElementById("daily-descn3")
    let dailyDaten3 = document.getElementById("daily-daten3")

    let dailyRainn4 = document.getElementById("daily-rainn4")
    let dailySnown4 =  document.getElementById("daily-snown4")
    let dailyCloudn4 = document.getElementById("daily-cloudn4")
    let dailyMoonn4 =document.getElementById("daily-moonn4")
    let dailyDescn4 = document.getElementById("daily-descn4")
    let dailyDaten4 = document.getElementById("daily-daten4")



    let dailyRaind = document.getElementById("daily-raind")
    let dailySund =  document.getElementById("daily-sund")
    let dailyCloudd = document.getElementById("daily-cloudd")
    let dailySnowd = document.getElementById("daily-snowd")
    let dailyDescd = document.getElementById("daily-descd")
    let dailyDated = document.getElementById("daily-dated")
    
    let dailyRaind1 = document.getElementById("daily-raind1")
    let dailySund1 =  document.getElementById("daily-sund1")
    let dailyCloudd1 = document.getElementById("daily-cloudd1")
    let dailySnowd1 = document.getElementById("daily-snowd1")
    let dailyDescd1 = document.getElementById("daily-descd1")
    let dailyDated1 = document.getElementById("daily-dated1")

    let dailyRaind2 = document.getElementById("daily-raind2")
    let dailySund2 =  document.getElementById("daily-sund2")
    let dailyCloudd2 = document.getElementById("daily-cloudd2")
    let dailySnowd2 = document.getElementById("daily-snowd2")
    let dailyDescd2 = document.getElementById("daily-descd2")
    let dailyDated2 = document.getElementById("daily-dated2")

    let dailyRaind3 = document.getElementById("daily-raind3")
    let dailySund3 =  document.getElementById("daily-sund3")
    let dailyCloudd3 = document.getElementById("daily-cloudd3")
    let dailySnowd3 = document.getElementById("daily-snowd3")
    let dailyDescd3 = document.getElementById("daily-descd3")
    let dailyDated3 = document.getElementById("daily-dated3")

    let dailyRaind4 = document.getElementById("daily-raind4")
    let dailySund4 =  document.getElementById("daily-sund4")
    let dailyCloudd4 = document.getElementById("daily-cloudd4")
    let dailySnowd4 = document.getElementById("daily-snowd4")
    let dailyDescd4 = document.getElementById("daily-descd4")
    let dailyDated4 = document.getElementById("daily-dated4")

    var d = new Date();
    d.getHours(); 
    console.log(d.getHours())

time = 19
fetch("https://api.opencagedata.com/geocode/v1/json?q="+cityValue+"&key=13760d86cee743fb997772e61006e0f9")
    .then(res => res.json())
    .then(res => fetch(" https://api.openweathermap.org/data/2.5/onecall?lat="+res.results[0].geometry.lat+"&lon="+res.results[0].geometry.lng+"&units=metric&appid=ebba0a82b1892fe9343e963816506644")
                .then(res => res.json())
                .then(res => {
                    console.log(res)
                        const unixTimestamp = res.daily[0].dt
                        const milliseconds = unixTimestamp * 1000 
                        const dateObject = new Date(milliseconds)           
                        let month = dateObject.toLocaleString("en-US", {month: "numeric"})
                        let day = dateObject.toLocaleString("en-US", {day: "numeric"})

                        const unixTimestamp1 = res.daily[1].dt
                        const milliseconds1 = unixTimestamp1 * 1000 
                        const dateObject1 = new Date(milliseconds1)           
                        let month1 = dateObject1.toLocaleString("en-US", {month: "numeric"})
                        let day1 = dateObject1.toLocaleString("en-US", {day: "numeric"})

                        const unixTimestamp2 = res.daily[2].dt
                        const milliseconds2 = unixTimestamp2 * 1000 
                        const dateObject2 = new Date(milliseconds2)           
                        let month2 = dateObject2.toLocaleString("en-US", {month: "numeric"})
                        let day2 = dateObject2.toLocaleString("en-US", {day: "numeric"})

                        const unixTimestamp3 = res.daily[3].dt
                        const milliseconds3 = unixTimestamp3 * 1000 
                        const dateObject3 = new Date(milliseconds3)           
                        let month3 = dateObject3.toLocaleString("en-US", {month: "numeric"})
                        let day3 = dateObject3.toLocaleString("en-US", {day: "numeric"})

                        const unixTimestamp4 = res.daily[4].dt
                        const milliseconds4 = unixTimestamp4 * 1000 
                        const dateObject4 = new Date(milliseconds4)           
                        let month4 = dateObject4.toLocaleString("en-US", {month: "numeric"})
                        let day4 = dateObject4.toLocaleString("en-US", {day: "numeric"})

                     if (d.getHours() >= 18 || d.getHours() < 06) {
                        console.log("NIGHT") 
                        document.body.style.background = "black"
                        night.style.display = "block"
                        nighty.style.display = "block" 
                        tempn.innerHTML = res.current.temp + "&#8451";

                        if (res.current.weather[0].main === "Clouds" || res.current.weather[0].main === "Smoke" || res.current.weather[0].main === "Mist" || res.current.weather[0].main === "Haze" || res.current.weather[0].main === "Dust" || res.current.weather[0].main === "Fog" || res.current.weather[0].main === "Sand") {
                            descriptionn.innerHTML = "Cloudy"
                            cn.style.display = "block"
                            rn.style.display = "none"
                           mn.style.display = "none" 
                            sn.style.display = "none"
                        }
                        else if (res.current.weather[0].main === "Rain" || res.current.weather[0].main === "Thunderstorm" || res.current.weather[0].main === "Drizzle" || res.current.weather[0].main === "Tornado") {
                            descriptionn.innerHTML = "Rainy"
                            rn.style.display = "block"
                            cn.style.display = "none"
                           mn.style.display = "none" 
                            sn.style.display = "none"
                        }
                        else if(res.current.weather[0].main === "Snow") {
                            description.innerHTML = "Snowy"
                            sn.style.display = "block"
                            rn.style.display = "none"
                           mn.style.display = "none" 
                            cn.style.display = "none"
                        }
                        else if (res.current.weather[0].main === "Clear" ) {
                            descriptionn.innerHTML = "Clear"
                            mn.style.display = "block"
                            rn.style.display = "none"
                            sn.style.display = "none"
                            cn.style.display = "none"
                        }
 
                        if (res.daily[0].weather[0].main === "Clouds" || res.daily[0].weather[0].main === "Smoke" || res.daily[0].weather[0].main === "Mist" || res.daily[0].weather[0].main === "Haze" || res.daily[0].weather[0].main === "Dust" || res.daily[0].weather[0].main === "Fog" || res.daily[0].weather[0].main === "Sand") {
                            dailyDescn.innerHTML = "Cloudy"
                            dailyCloudn.style.display = "block"
                            dailyRainn.style.display = "none"
                            dailyMoonn.style.display ="none"
                            dailySnown.style.display = "none"
                            dailyDaten.innerHTML = month+"/"+day
                        }
                        else if (res.daily[0].weather[0].main === "Rain" || res.daily[0].weather[0].main === "Thunderstorm" || res.daily[0].weather[0].main === "Drizzle" || res.daily[0].weather[0].main === "Tornado") {
                            dailyDescn.innerHTML= "Rainy"
                            dailyRainn.style.display = "block"
                            dailyCloudn.style.display = "none"
                            dailyMoonn.style.display ="none"
                            dailySnown.style.display = "none"
                            dailyDaten.innerHTML = month+"/"+day
                        }
                        else if(res.daily[0].weather[0].main === "Snow") {
                            dailyDescn.innerHTML= "Snowy"
                            dailySnown.style.display = "block"
                            dailyRainn.style.display = "none"
                            dailyMoonn.style.display ="none"
                            dailyCloudn.style.display = "none"
                            dailyDaten.innerHTML = month+"/"+day
                        }
                        else if(res.daily[0].weather[0].main === "Clear") {
                            dailyDescn.innerHTML= "Clear"
                            dailyMoonn.style.display ="block"
                            dailySnown.style.display = "none"
                            dailyRainn.style.display = "none"
                            dailyCloudn.style.display = "none"
                            dailyDaten.innerHTML = month+"/"+day
                        }
                        
                        if (res.daily[1].weather[0].main === "Clouds" || res.daily[1].weather[0].main === "Smoke" || res.daily[1].weather[0].main === "Mist" || res.daily[1].weather[0].main === "Haze" || res.daily[1].weather[0].main === "Dust" || res.daily[1].weather[0].main === "Fog" || res.daily[1].weather[0].main === "Sand") {
                            dailyDescn1.innerHTML = "Cloudy"
                            dailyCloudn1.style.display = "block"
                            dailyRainn1.style.display = "none"
                            dailyMoonn1.style.display ="none"
                            dailySnown1.style.display = "none"
                            dailyDaten1.innerHTML = month1+"/"+day1
                        }
                        else if (res.daily[1].weather[0].main === "Rain" || res.daily[1].weather[0].main === "Thunderstorm" || res.daily[1].weather[0].main === "Drizzle" || res.daily[1].weather[0].main === "Tornado") {
                            dailyDescn1.innerHTML= "Rainy"
                            dailyRainn1.style.display = "block"
                            dailyCloudn1.style.display = "none"
                            dailyMoonn1.style.display ="none"
                            dailySnown1.style.display = "none"
                            dailyDaten1.innerHTML = month1+"/"+day1
                        }
                        else if(res.daily[1].weather[0].main === "Snow") {
                            dailyDescn1.innerHTML= "Snowy"
                            dailySnown1.style.display = "block"
                            dailyRainn12.style.display = "none"
                            dailyMoonn1.style.display ="none"
                            dailyCloudn12.style.display = "none"
                            dailyDaten1.innerHTML = month1+"/"+day1
                        }
                        else if(res.daily[1].weather[0].main === "Clear") {
                            dailyDescn1.innerHTML= "Clear"
                            dailyMoonn1.style.display ="block"
                            dailySnown1.style.display = "none"
                            dailyRainn1.style.display = "none"
                            dailyCloudn1.style.display = "none"
                            dailyDaten1.innerHTML = month+"/"+day
                        }

                        if (res.daily[2].weather[0].main === "Clouds" || res.daily[2].weather[0].main === "Smoke" || res.daily[2].weather[0].main === "Mist" || res.daily[2].weather[0].main === "Haze" || res.daily[2].weather[0].main === "Dust" || res.daily[2].weather[0].main === "Fog" || res.daily[2].weather[0].main === "Sand") {
                            dailyDescn2.innerHTML = "Cloudy"
                            dailyCloudn2.style.display = "block"
                            dailyRainn2.style.display = "none"
                            dailyMoonn2.style.display ="none"
                            dailySnown2.style.display = "none"
                            dailyDaten2.innerHTML = month2+"/"+day2
                        }
                        else if (res.daily[2].weather[0].main === "Rain" || res.daily[2].weather[0].main === "Thunderstorm" || res.daily[2].weather[0].main === "Drizzle" || res.daily[2].weather[0].main === "Tornado") {
                            dailyDescn2.innerHTML= "Rainy"
                            dailyRainn2.style.display = "block"
                            dailyCloudn2.style.display = "none"
                            dailyMoonn2.style.display ="none"
                            dailySnown2.style.display = "none"
                            dailyDaten2.innerHTML = month2+"/"+day2
                        }
                        else if(res.daily[2].weather[0].main === "Snow") {
                            dailyDescn2.innerHTML= "Snowy"
                            dailySnown2.style.display = "block"
                            dailyRainn2.style.display = "none"
                            dailyMoonn2.style.display ="none"
                            dailyCloudn2.style.display = "none"
                            dailyDaten2.innerHTML = month2+"/"+day2
                        }
                        else if(res.daily[2].weather[0].main === "Clear") {
                            dailyDescn2.innerHTML= "Clear"
                            dailyMoonn2.style.display ="block"
                            dailySnown2.style.display = "none"
                            dailyRainn2.style.display = "none"
                            dailyCloudn2.style.display = "none"
                            dailyDaten2.innerHTML = month+"/"+day
                        }
                        

                        if (res.daily[3].weather[0].main === "Clouds" || res.daily[3].weather[0].main === "Smoke" || res.daily[3].weather[0].main === "Mist" || res.daily[3].weather[0].main === "Haze" || res.daily[3].weather[0].main === "Dust" || res.daily[3].weather[0].main === "Fog" || res.daily[3].weather[0].main === "Sand") {
                            dailyDescn3.innerHTML = "Cloudy"
                            dailyCloudn3.style.display = "block"
                            dailyRainn3.style.display = "none"
                            dailyMoonn3.style.display ="none"
                            dailySnown3.style.display = "none"
                            dailyDaten3.innerHTML = month3+"/"+day3
                        }
                        else if (res.daily[3].weather[0].main === "Rain" || res.daily[3].weather[0].main === "Thunderstorm" || res.daily[3].weather[0].main === "Drizzle" || res.daily[3].weather[0].main === "Tornado") {
                            dailyDescn3.innerHTML= "Rainy"
                            dailyRainn3.style.display = "block"
                            dailyCloudn3.style.display = "none"
                            dailyMoonn3.style.display ="none"
                            dailySnown3.style.display = "none"
                            dailyDaten3.innerHTML = month3+"/"+day3
                        }
                        else if(res.daily[3].weather[0].main === "Snow") {
                            dailyDescn3.innerHTML= "Snowy"
                            dailySnown3.style.display = "block"
                            dailyRainn3.style.display = "none"
                            dailyMoonn3.style.display ="none"
                            dailyCloudn3.style.display = "none"
                            dailyDaten3.innerHTML = month3+"/"+day3
                        }
                        else if(res.daily[3].weather[0].main === "Clear") {
                            dailyDescn3.innerHTML= "Clear"
                            dailyMoonn3.style.display ="block"
                            dailySnown3.style.display = "none"
                            dailyRainn3.style.display = "none"
                            dailyCloudn3.style.display = "none"
                            dailyDaten3.innerHTML = month+"/"+day
                        }

                        if (res.daily[4].weather[0].main === "Clouds" || res.daily[4].weather[0].main === "Smoke" || res.daily[4].weather[0].main === "Mist" || res.daily[4].weather[0].main === "Haze" || res.daily[4].weather[0].main === "Dust" || res.daily[4].weather[0].main === "Fog" || res.daily[4].weather[0].main === "Sand") {
                            dailyDescn4.innerHTML = "Cloudy"
                            dailyCloudn4.style.display = "block"
                            dailyMoonn4.style.display ="none"
                            dailyRainn4.style.display = "none"
                            dailySnown4.style.display = "none"
                            dailyDaten4.innerHTML = month4+"/"+day4
                        }
                        else if (res.daily[4].weather[0].main === "Rain" || res.daily[4].weather[0].main === "Thunderstorm" || res.daily[4].weather[0].main === "Drizzle" || res.daily[4].weather[0].main === "Tornado") {
                            dailyDescn4.innerHTML= "Rainy"
                            dailyRainn4.style.display = "block"
                            dailyMoonn4.style.display ="none"
                            dailyCloudn4.style.display = "none"
                            dailySnown4.style.display = "none"
                            dailyDaten4.innerHTML = month4+"/"+day4
                        }
                        else if(res.daily[4].weather[0].main === "Snow") {
                            dailyDescn4.innerHTML= "Snowy"
                            dailySnown4.style.display = "block"
                            dailyRainn4.style.display = "none"
                            dailyMoonn4.style.display ="none"
                            dailyCloudn4.style.display = "none"
                            dailyDaten4.innerHTML = month4+"/"+day4
                        }
                        else if(res.daily[4].weather[0].main === "Clear") {
                            dailyDescn4.innerHTML= "Clear"
                            dailyMoonn4.style.display ="block"
                            dailySnown4.style.display = "none"
                            dailyRainn4.style.display = "none"
                            dailyCloudn4.style.display = "none"
                            dailyDaten4.innerHTML = month+"/"+day
                        }
                    }
                    
                    else if (d.getHours() > 06 || d.getHours() < 18) {
                        console.log("DAY")
                        morning.style.display = "block"
                        document.body.style.background = "white"
                        sunny.style.display = "block" 
                        temp.innerHTML = res.current.temp + "&#8451";
                        if(res.current.weather[0].main === "Clear") {
                            description.innerHTML = "Sunny"
                            sun.style.display = "block"
                            cd.style.display = "none"
                            rd.style.display = "none"
                            sd.style.display = "none"
                        }
                        else if (res.current.weather[0].main === "Clouds" || res.current.weather[0].main === "Smoke" || res.current.weather[0].main === "Mist" || res.current.weather[0].main === "Haze" || res.current.weather[0].main === "Dust" || res.current.weather[0].main === "Fog" || res.current.weather[0].main === "Sand") {
                            description.innerHTML = "Cloudy"
                            cd.style.display = "block"
                            sun.style.display = "none"
                            rd.style.display = "none"
                            sd.style.display = "none"
                        }
                        else if(res.current.weather[0].main === "Rain" || res.current.weather[0].main === "Thunderstorm" || res.current.weather[0].main === "Drizzle" || res.current.weather[0].main === "Tornado" ) {
                            description.innerHTML = "Rainy"
                            rd.style.display = "block"
                            sun.style.display = "none"
                            cd.style.display = "none"
                            sd.style.display = "none"
                        }
                        else if(res.current.weather[0].main === "Snow") {
                            description.innerHTML = "Snowy"
                            sd.style.display = "block"
                            sun.style.display = "none"
                            cd.style.display = "none"
                            rd.style.display = "none"
                        }

                        if (res.daily[0].weather[0].main === "Clouds" || res.daily[0].weather[0].main === "Smoke" || res.daily[0].weather[0].main === "Mist" || res.daily[0].weather[0].main === "Haze" || res.daily[0].weather[0].main === "Dust" || res.daily[0].weather[0].main === "Fog" || res.daily[0].weather[0].main === "Sand") {
                            dailyDescd.innerHTML = "Cloudy"
                            dailyCloudd.style.display = "block"
                            dailyRaind.style.display = "none"
                            dailySnowd.style.display = "none"
                            dailySund.style.display = "none"
                            dailyDated.innerHTML = month+"/"+day
                        }
                        else if (res.daily[0].weather[0].main === "Rain" || res.daily[0].weather[0].main === "Thunderstorm" || res.daily[0].weather[0].main === "Drizzle" || res.daily[0].weather[0].main === "Tornado") {
                            dailyDescd.innerHTML= "Rainy"
                            dailyRaind.style.display = "block"
                            dailyCloudd.style.display = "none"
                            dailySnowd.style.display = "none"
                            dailySund.style.display = "none"
                            dailyDated.innerHTML = month+"/"+day
                        }
                        else if(res.daily[0].weather[0].main === "Clear") {
                            dailyDescd.innerHTML= "Sunny"
                            dailySund.style.display = "block"
                            dailyRaind.style.display = "none"
                            dailyCloudd.style.display = "none"
                            dailySnowd.style.display = "none"
                            dailyDated.innerHTML = month+"/"+day
                        }
                        else if(res.daily[0].weather[0].main === "Snow") {
                            dailyDescd.innerHTML= "Snowy"
                            dailySnowd.style.display = "block"
                            dailySund.style.display = "none"
                            dailyRaind.style.display = "none"
                            dailyCloudd.style.display = "none"
                            dailyDated.innerHTML = month+"/"+day
                        }
                        
                        if (res.daily[1].weather[0].main === "Clouds" || res.daily[1].weather[0].main === "Smoke" || res.daily[1].weather[0].main === "Mist" || res.daily[1].weather[0].main === "Haze" || res.daily[1].weather[0].main === "Dust" || res.daily[1].weather[0].main === "Fog" || res.daily[1].weather[0].main === "Sand") {
                            dailyDescd1.innerHTML = "Cloudy"
                            dailyCloudd1.style.display = "block"
                            dailyRaind1.style.display = "none"
                            dailySnowd1.style.display = "none"
                            dailySund1.style.display = "none"
                            dailyDated1.innerHTML = month1+"/"+day1
                        }
                        else if (res.daily[1].weather[0].main === "Rain" || res.daily[1].weather[0].main === "Thunderstorm" || res.daily[1].weather[0].main === "Drizzle" || res.daily[1].weather[0].main === "Tornado") {
                            dailyDescd1.innerHTML= "Rainy"
                            dailyRaind1.style.display = "block"
                            dailyCloudd1.style.display = "none"
                            dailySnowd1.style.display = "none"
                            dailySund1.style.display = "none"
                            dailyDated1.innerHTML = month1+"/"+day1
                        }
                        else if(res.daily[1].weather[0].main === "Clear") {
                            dailyDescd1.innerHTML= "Sunny"
                            dailySund1.style.display = "block"
                            dailyRaind1.style.display = "none"
                            dailyCloudd1.style.display = "none"
                            dailySnowd1.style.display = "none"
                            dailyDated1.innerHTML = month1+"/"+day1
                        }
                        else if(res.daily[1].weather[0].main === "Snow") {
                            dailyDescd.innerHTML= "Snowy"
                            dailySnowd1.style.display = "block"
                            dailySund1.style.display = "none"
                            dailyRaind1.style.display = "none"
                            dailyCloudd1.style.display = "none"
                            dailyDated.innerHTML = month1+"/"+day1
                        }

                        if (res.daily[2].weather[0].main === "Clouds" || res.daily[2].weather[0].main === "Smoke" || res.daily[2].weather[0].main === "Mist" || res.daily[2].weather[0].main === "Haze" || res.daily[2].weather[0].main === "Dust" || res.daily[2].weather[0].main === "Fog" || res.daily[2].weather[0].main === "Sand") {
                            dailyDescd2.innerHTML = "Cloudy"
                            dailyCloudd2.style.display = "block"
                            dailyRaind2.style.display = "none"
                            dailySnowd2.style.display = "none"
                            dailySund2.style.display = "none"
                            dailyDated2.innerHTML = month2+"/"+day2
                        }
                        else if (res.daily[2].weather[0].main === "Rain" || res.daily[2].weather[0].main === "Thunderstorm" || res.daily[2].weather[0].main === "Drizzle" || res.daily[2].weather[0].main === "Tornado") {
                            dailyDescd2.innerHTML= "Rainy"
                            dailyRaind2.style.display = "block"
                            dailyCloudd2.style.display = "none"
                            dailySnowd2.style.display = "none"
                            dailySund2.style.display = "none"
                            dailyDated2.innerHTML = month2+"/"+day2
                        }
                        else if(res.daily[2].weather[0].main === "Clear") {
                            dailyDescd2.innerHTML= "Sunny"
                            dailySund2.style.display = "block"
                            dailyRaind2.style.display = "none"
                            dailyCloudd2.style.display = "none"
                            dailySnowd2.style.display = "none"
                            dailyDated2.innerHTML = month2+"/"+day2
                        }
                        else if(res.daily[2].weather[0].main === "Snow") {
                            dailyDescd.innerHTML= "Snowy"
                            dailySnowd2.style.display = "block"
                            dailySund2.style.display = "none"
                            dailyRaind2.style.display = "none"
                            dailyCloudd2.style.display = "none"
                            dailyDated.innerHTML = month2+"/"+day2
                        }

                        if (res.daily[3].weather[0].main === "Clouds" || res.daily[3].weather[0].main === "Smoke" || res.daily[3].weather[0].main === "Mist" || res.daily[3].weather[0].main === "Haze" || res.daily[3].weather[0].main === "Dust" || res.daily[3].weather[0].main === "Fog" || res.daily[3].weather[0].main === "Sand") {
                            dailyDescd3.innerHTML = "Cloudy"
                            dailyCloudd3.style.display = "block"
                            dailyRaind3.style.display = "none"
                            dailySnowd3.style.display = "none"
                            dailySund3.style.display = "none"
                            dailyDated3.innerHTML = month3+"/"+day3
                        }
                        else if (res.daily[3].weather[0].main === "Rain" || res.daily[3].weather[0].main === "Thunderstorm" || res.daily[3].weather[0].main === "Drizzle" || res.daily[3].weather[0].main === "Tornado") {
                            dailyDescd3.innerHTML= "Rainy"
                            dailyRaind3.style.display = "block"
                            dailyCloudd3.style.display = "none"
                            dailySnowd3.style.display = "none"
                            dailySund3.style.display = "none"
                            dailyDated3.innerHTML = month3+"/"+day3
                        }
                        else if(res.daily[3].weather[0].main === "Clear") {
                            dailyDescd3.innerHTML= "Sunny"
                            dailySund3.style.display = "block"
                            dailyRaind3.style.display = "none"
                            dailyCloudd3.style.display = "none"
                            dailySnowd3.style.display = "none"
                            dailyDated3.innerHTML = month3+"/"+day3
                        }
                        else if(res.daily[3].weather[0].main === "Snow") {
                            dailyDescd.innerHTML= "Snowy"
                            dailySnowd3.style.display = "block"
                            dailySund3.style.display = "none"
                            dailyRaind3.style.display = "none"
                            dailyCloudd3.style.display = "none"
                            dailyDated.innerHTML = month3+"/"+day3
                        }

                        if (res.daily[4].weather[0].main === "Clouds" || res.daily[4].weather[0].main === "Smoke" || res.daily[4].weather[0].main === "Mist" || res.daily[4].weather[0].main === "Haze" || res.daily[4].weather[0].main === "Dust" || res.daily[4].weather[0].main === "Fog" || res.daily[4].weather[0].main === "Sand") {
                            dailyDescd4.innerHTML = "Cloudy"
                            dailyCloudd4.style.display = "block"
                            dailyRaind4.style.display = "none"
                            dailySnowd4.style.display = "none"
                            dailySund4.style.display = "none"
                            dailyDated4.innerHTML = month4+"/"+day4
                        }
                        else if (res.daily[4].weather[0].main === "Rain" || res.daily[4].weather[0].main === "Thunderstorm" || res.daily[4].weather[0].main === "Drizzle" || res.daily[4].weather[0].main === "Tornado") {
                            dailyDescd4.innerHTML= "Rainy"
                            dailyRaind4.style.display = "block"
                            dailyCloudd4.style.display = "none"
                            dailySnowd4.style.display = "none"
                            dailySund4.style.display = "none"
                            dailyDated4.innerHTML = month4+"/"+day4
                        }
                        else if(res.daily[4].weather[0].main === "Clear") {
                            dailyDescd4.innerHTML= "Sunny"
                            dailySund4.style.display = "block"
                            dailyRaind4.style.display = "none"
                            dailyCloudd4.style.display = "none"
                            dailySnowd4.style.display = "none"
                            dailyDated4.innerHTML = month4+"/"+day4
                        }
                        else if(res.daily[4].weather[0].main === "Snow") {
                            dailyDescd.innerHTML= "Snowy"
                            dailySnowd4.style.display = "block"
                            dailySund4.style.display = "none"
                            dailyRaind4.style.display = "none"
                            dailyCloudd4.style.display = "none"
                            dailyDated.innerHTML = month4+"/"+day4
                        }
                    }

                    
                })
        )
    }
