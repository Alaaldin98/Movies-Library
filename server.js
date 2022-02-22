`use strict`

// const { strict } = require("assert");
const express = require ("express");
const datas = require("home/alaaldin/Movies-Library/Movie Data/data.json");
const app = express();


function datab(title,poster_path,overview ){
    this.title = title;
    this.poster_path = poster_path;
    this.overview = overview;
};

// app.get(`/`,datab);
app.get(`/favorite`,favoriteHander);
// app.get(`/`,testHandler);
app.use("*", notFoundHandler);
app.use("*", notFoundHandle);

app.get(`/datas`,dataHandler);


function dataHandler(req, res){
    // console.log(datas);
    let result = [];
    datas.data.forEach((value) => {
        let onedata = new datab(value.title, value.poster_path,value.overview);
        result.push(onedata);
    });
    return res.status(200).json(result);
};




function favoriteHander(request, response){
    return response.send("Welcome to Favorite Page");
};

// function testHandler(request, response){
//     return response.send("Hello Alaa");
// };

function notFoundHandler(req, res){
    return res.status(404).send("page not found error");
};
function notFoundHandle(req, res){

return req.status(500).send("Sorry, something went wrong");
};


app.listen(3000, () => {
    console.log("The callback should use the provided JSON data.");
});