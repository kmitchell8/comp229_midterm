/*
 * File Name: server.js
 * Student’s Name: Kevon Mitchell
 * Student ID: 301508202
 * Date: October 14, 2025
 */

//import express from 'express'; //using tpye: "module"
const express = require('express');//using type="commonjs"
//const cors = require('cors');


const app = express();
//enable cors
//app.use (cors());
app.use(express.json());
let sports = [
    'Soccer',
    'Handball',
    'Volleyball',
    'Cricket',
    'Swimming'
];
/*
const products =[
    {
    laptopname: "Hp laptop",
    price: 1450,
    }

]*/

//API endpoint to fetch product details
let api_string = '/api/kevonmitchellitchellitems'
app.get(api_string, (req, res,) => {

    const sportsData = []
    sports.forEach((sport, index) => {
        sportsData.push({//formats index/name from the sports array and adds tothe sportsData array
            id: index,
            sportName: sport
        });

    });
    res.json(sportsData);
});

app.get(`${api_string}/:id`, (req, res) => {
    const index = req.params.id;
    const sport = sports[index];
    res.json({ id: index, sportName: sport });
});

app.post(api_string, (req, res) => {
    const { sportName } = req.body;
    sports.push(sportName);//adds elements to the end of the array
    const id = sports.length - 1
    //res.json({})
    res.json({ id: id, sportName: sportName });
})

app.put(`${api_string}/:id`, (req, res) => {
    const index = req.params.id;
    const {sportName} = req.body;
    //const name = sports[index];
    sports[index]=sportName;
    res.json({id: index, sportName: sportName});

})

app.delete(`${api_string}/:id`, (req, res) => {
    const index = req.params.id;
    const deletedSport = sports.splice(index, 1);//method to remove 1 item froma arry based on index
    //res.json({id: index, SportName:sports[index]});
})
const PORT = 8080;
/*
server.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}/`);
});*/

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}${api_string}`);
})