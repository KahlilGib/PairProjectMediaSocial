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

// console.log(cron.validate('*/5 * * * *'))
// const job = cron.schedule('*/5 * * * * ', async () => {

//     console.log(">>>")
//     // Controller.cleanUpExpiredPostTask()
//     const oneWeekAgo = moment().subtract(7,'d').format('YYYY-MM-DD');
//    const result = await Post.destroy({
//         where: {
//           createdAt: {
//             [Op.lt]: oneWeekAgo,
//           },
//         },
//       })

//       console.log("======")
      
      
//    })

//    job.start()

const CronJob = require('cron').CronJob;

const exampleJob = new CronJob(`*/2 * * * * *`,()=>{
    console.log(">>>>>>");
});
Controller.cleanUpExpiredPostTask()

exampleJob.start();

app.listen(port, () => {
    console.log(`Listening port ${port}`)
})

