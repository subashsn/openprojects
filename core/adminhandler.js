var Idea = require("../models/idea")
var User = require("../models/user")
var notify = require("./notification.js")

module.exports.ideacontrol = function (req,res){
    Idea.findOne({'_id':req.body.idea_id},function(err, idea) {
        if(err||!idea){
            res.send('Error')
        }
        else{
            if (req.body.setstatus=='Inprogress'){
                    idea.astatus = 'Inprogress'
                    idea.participants = req.body.participants
                    idea.save()
                    notify.ideastatusupdate(idea)
            }
            else{
                    idea.astatus = req.body.setstatus
                    idea.save()
                    notify.ideastatusupdate(idea)
            }
            res.send('done')
        }
    })
}

module.exports.ideas = function (req,res){
    res.send('TODO ')
}