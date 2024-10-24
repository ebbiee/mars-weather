export default class marsPhotos{
    static getWeather(){
        return fetch(`https://api.maas2.apollorion.com`)
        .then(function(response){
            if(!response.ok){
                throw Error(response.statusText)
            }
            return response.json()
        })
        .catch(function(error){
            return error
        })
    }
    static roverPicture(){
        return fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=${process.env.API_KEY}`)
        .then(function(response){
            if(!response.ok){
                throw Error(response.statusText)
            }
            return response.json()
        })
        .catch(function(error){
            return error
        })
    }
    static secondRoverPicture(){
        return fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${process.env.API_KEY}`)
        .then(function(response){
            if(!response.ok){
                throw Error(response.statusText)
            }
            return response.json()
        })
        .catch(function(error){
            return error
        })
    }
    
    static picutreOfTheDay(){
        return fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`)
        .then(function(response){
            if(!response.ok){
                throw Error(response.statusText)
            }
            return response.json()
        })
        .catch(function(error){
            return error
        })
    }
}