
const Player = require("../models/player")

const playerController ={ 
    createPlayer: async (req,res) =>{
        let {name,lastname,date,height,country,city,photo,captain,position,sex} = req.body
        try{
            let player = await new Player({name,lastname,date,height,country,city,photo,captain,position,sex}).save()
            if(player){
                res.status(201).json({
                    message: "Player created",
                    success: true
                })
            }
        }catch(error){
            console.log(error)
            res.status(400).json({
                message: "Player no created",
                success: false
            })
        }
    },
    getAllPlayer: async(req,res) =>{
        let query= {}

        try{
            let player = await Player.find({query})
            res.status(200).json({
                message: "todos los usuarios encontrados",
                response: player,
                success: true
            })
        }catch(error){
            console.log(error)
            res.status(400).json({
                message: error.message,
                success: false
            })
        }
    },
    getOnePlayer: async(req,res)=>{
        let {id} = req.params
        try{
            let player = await Player.findOne({_id:id})
            if(player){
                res.status(200).json({
                    message: "you get one player",
                    response: player,
                    success: true
                }) 
            }else{
                res.status(400).json({
                    message: "couldn't find player",
                    success: false
                }) 
            }
        }catch(error){
            console.log(error)
            res.status(404).json({
                message: error.message,
                success: false
            }) 
        }
    },
    deletePlayer: async(req,res)=>{
        const {id} =req.params
        try{
            let player = await Player.findOneAndDelete({_id:id})
            if(player){
                res.status(200).json({
                    message: "player deleted successfully",
                    success: true
                })
            }else{
                res.status(400).json({
                    message: "couldn't find player",
                    success: false
                })
            }

        }catch(error){
            console.log(error)
            res.status(404).json({
                message: error.message,
                success: false
            })
        }
    },
    updatePlayer: async(req,res)=>{
        let {id} = req.params
        let updatePlayer = req.body
        try{
            let update = await Player.findOneAndUpdate({_id:id}, updatePlayer)
            if(update){
                res.status(200).json({
                    message: "player update successfully",
                    success: true
                })
            }else{
                res.status(404).json({
                    message: "player not found",
                    success: false
                })
            }
        }catch(error){
            res.status(404).json({
                message: error.message,
                success: false
            })
        }
    }
}

module.exports = playerController