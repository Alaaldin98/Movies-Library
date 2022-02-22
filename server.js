`use strict`

const express = require ("express");


// const trendings = require("https://api.themoviedb.org/3/trending/all/week?api_key=37ddc7081e348bf246a42f3be2b3dfd0&language=en-US");

// const recipes = require("Movie Data/data.json");
// const recipes = require("Movie Data/data.json");
const app = express();
const axios = require("axios")

// function Recipe(title,poster_path,overview ){
//     this.title = title;
//     this.poster_path = poster_path;
//     this.overview = overview;
// };

// app.get(`/`,datab);
app.get(`/favorite`,favoriteHander);
app.get(`/search`,searcheHander);
app.get(`/movie`,movieHander);
// app.get(`/`,testHandler);
app.use("*", notFoundHandler);
app.use("*", notFoundHandle);

// app.get(`/`,dataHandler);
app.get(`/trending`,apiHandler);
// app.get(`/trending`,trendingHandler);

// function dataHandler(req, res){
//     // console.log(datas);
//     let result = [];
//     recipes.data.forEach((value) => {
//         let onedata = new Recipe(value.title, value.poster_path,value.overview);
//         result.push(onedata);
//     });
//     return res.status(200).json(result);
// };
function apiHandler(req, res){
    // console.log(datas);
    let result = [];
   
    axios.get("https://api.themoviedb.org/3/trending/all/week?api_key=d7a628cc10c5bd1eb433f180b9afa2b0&language=en-US")
.then(apiresponse => {
    
    console.log(apiresponse);  
   });
    return res.status(200).json(result);
};

function searcheHander(req, res){
    // console.log(datas);
    let result = [];
    axios.get("https://api.themoviedb.org/3/search/movie?api_key=d7a628cc10c5bd1eb433f180b9afa2b0&language=en-US&query=The&page=2")
.then(apiresponse => {
    console.log(apiresponse);  
   });
    return res.status(200).json(result);
};

function movieHander(req, res){
    // console.log(datas);
    let result = [];
    axios.get("https://www.themoviedb.org/movie/589761/watch?api_key=d7a628cc10c5bd1eb433f180b9afa2b0")
.then(apiresponse => {
    console.log(apiresponse);  
   });
    return res.status(200).json(result);
};

function favoriteHander(request, response){
    return response.send("Welcome to Favorite Page");
};

// function testHandler(request, response){
//     return response.send("Hello Alaa");
// };




app.listen(3000, () => {
    console.log("The callback should use the provided JSON data.");
});

function notFoundHandler(req, res){
    return res.status(404).send("page not found error");
};
function notFoundHandle(req, res){

return req.status(500).send("Sorry, something went wrong");
};