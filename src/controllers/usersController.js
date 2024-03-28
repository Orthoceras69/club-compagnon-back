import usersService from '#src/services/usersService'

const exposeController = {
    allUsers:async (req,res)=>{
        const allUsers = await usersService.findAllUsers()
        return res.json(allUsers)
    },
    createUser:async (req,res)=>{
        const {body}  = req
        try {
            const registeredUser = await usersService.createUser(body)     
            return res.json(registeredUser)
        } catch (error) {
           return res.sendStatus(400)
        }        
    },
    updateUser:async (req,res)=>{
        const {body} = req
        const {id} = req.params
        try {
            const toUpdate = await usersService.updateUser({id,body})     
            return res.json(toUpdate)
        } catch (error) {
           return res.sendStatus(400)
        }
    },
    deleteUser:async (req,res)=>{
        const {body} = req
        const {id} = req.params
        try {
            const toDelete = await usersService.deleteUser({id,body})             
            return res.json(toDelete)
        } catch (error) {
            return res.sendStatus(400)
        }
    }
}

export default exposeController