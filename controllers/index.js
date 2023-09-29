const { where } = require("sequelize")
const {User, Post, Like, Profile, User_Follower} = require("../models")
const { Op } = require('sequelize');
const { moment } = require(`moment`)
const db = require("../models");
const user = require("../models/user");
let bcrypt = require('bcryptjs');

class Controller {
    static registration(req, res) {
        res.render("registration")
    }

    static createUser(req, res) {
        const data = req.body
        const user = {
            username: data.username,
            email: data.email,
            password: data.password,
            role: data.role,
        }
        console.log(">>> body" , data)
        db.User.create(user)
            .then(result => {
                console.log("result add >>>",result)
                res.redirect('/login');
            })
            .catch( err => {
                console.log("------ err", err)
            })

    }

    static login(req, res) {
        res.render("login")
    }

    static postLogin(req, res) {
        const data = req.body
        const user = {
            email: data.email,
            password: data.password,
        }
        console.log(">>> body" , data)
        User.findOne({ where: { email } })
        .then((user) => {
          if (user) {
            const isValidPassword = bcrypt.compareSync(password, user.password);
  
            if (isValidPassword) {
              req.session.userId = user.id;
              req.session.role = user.role;
  
              return res.redirect(`/registration`);
              // return res.redirect(`/profiles/create/${user.id}`);
            } else {
              const error = 'Sorry, your password was incorrect. Please double-check your password.';
              return res.redirect(`/registration`);
            }
          } else {
            const error = 'Sorry, your email was incorrect. Please double-check your email.';
            return res.redirect(`/registration`);
          }
        })
        .catch((err) => {
          console.log(err);
          res.send(err);
        });
    }

    static ownUser(req, res) {
        res.send("ownUser")
    }

    static post(req, res) {
        res.send("post")
    }

    static createMeme(req, res) {
        res.send("createMeme")
    }

    static voteMeme(req, res) {
        res.send("voteMeme")
    }

    static isFunnyMeme(req, res) {
        res.send("isFunnyMeme")
    }

    static cleanUpExpiredPostTask() {
        const oneWeekAgo = moment().subtract(7,'d').format('YYYY-MM-DD');
        console.log(`=========`);
        Post.destroy({
            where: {
              createdAt: {
                [Op.lt]: oneWeekAgo,
              },
            },
          })
            .then((result) => {
              console.log(`berhasil`);
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

module.exports = Controller