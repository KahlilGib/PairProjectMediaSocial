const {User, Post, Like, Profile, User_Follower} = require("./models")
const { moment } = require(`moment`)

const express = require("express")
const app = express()
const port = 3003
const cron = require('node-cron');
const Controller = require("./controllers");
var bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.set('view engine', 'ejs');
app.use(require("./routes"))
app.use(express.json()); // for JSON data

app.get("/", Controller.registration)

app.use(express.json());



    console.log(">>>")
    // Controller.cleanUpExpiredPostTask()
    const job = cron.schedule('* * * * * *', () => {

        console.log(">>>")
        Controller.cleanUpExpiredPostTask()
    })
    
    job.start()
      

   job.start()



app.listen(port, () => {
    console.log(`Listening port ${port}`)
})

