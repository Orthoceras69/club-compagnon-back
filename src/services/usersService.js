import User  from "#src/models/Users";
import bcrypt from "bcryptjs"

const exposeServices = {
    findOneUserByEmail:async ({email})=>{
        try {
            const findUser = await User.findOne({email})
            return findUser
        } catch (error) {
            throw error
        }
    },
    findUserByRefreshToken:async ({refreshToken})=>{
        try {
            const findUser = await User.findOne({refreshToken})
            return findUser
        } catch (error) {
            throw error
        }
    },
    findAllUsers: async ()=>{
        try {
            const allUsers = await User.find()
            return allUsers
        } catch (error) {
            throw error
        }
    },
    createUser: async (rawData)=>{
        const {password} = rawData
        const salt = bcrypt.genSaltSync(4);
        const hash = bcrypt.hashSync(password, salt);
        const newUserData = {
            ...rawData,
            password:hash
        }
        try {
            const toSave = new User(newUserData)
            const newUser = toSave.save()   
            return newUser
        } catch (error) {
            throw error
        }
    },
    updateUser: async ({id,body})=>{
        try {
            const updatedUser = await User.findOneAndUpdate(
                {_id:id},
                body,
                {new:true}
            ) 
            return updatedUser
        } catch (error) {
            throw new Error(error)
        }
    },
    updateUserToken: async ({userId,refreshToken})=>{
        const query = {
            _id:userId
        }
        const updateQ = {
            $set:{
                refreshToken
            }
        }
        try {
            const toUpdate = await User.findOneAndUpdate(query,updateQ,{new:true})
            return toUpdate
        } catch (error) {
            throw error
        }
    },
    deleteUser: async ({id,body})=>{
        try {
            const deleteUser = await User.deleteOne(
                {_id:id},
                body,
                {new:true}
            ) 
            return  deleteUser
        } catch (error) {
            throw new Error(error)
        }
    }
}

export default exposeServices