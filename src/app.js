const express = require("express");
const app = express();
const port = 3000;

const hbs = require("hbs");
const request = require('request')
const path = require("path");


const publicDirectory = path.join(__dirname, "../public");

app.use(express.static(publicDirectory));

app.set("view engine", "hbs");

const viewsPath = path.join(__dirname, "../templates/views");
app.set("views", viewsPath);

const pathPartiales = path.join(__dirname, "../templates/partials");
hbs.registerPartials(pathPartiales);




app.get("", (req, res) => {

    const url = 'http://newsapi.org/v2/top-headlines?country=eg&category=entertainment&apiKey=9766753375a64b608e931cfa151c00ca'

    request({ url, json: true }, (error, response) => {

        if (error) {
            console.log("error")
            return res.send('Unable to connect')
        } else if (response.body.message) {
            console.log("message")
            return res.send('check your ApiKey')
        } else {

            console.log(response.body.articles)
            const data = response.body.articles
            console.log('we are hre')
            console.log(response.body.articles.urlToImage)
            res.render('index', {
                title: 'News Page',
                name: 'zeinab',
                data: data
            })
        }
    })

});




app.listen(port, () => {
    console.log("Server is running");
});




// nodemon src/app.js -e js,hbs