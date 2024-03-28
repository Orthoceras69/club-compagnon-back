import authService from '#src/services/authService'
import usersService from '#src/services/usersService'
import {signJwt,verifyJwt} from '#src/utils/jwtoken'

const exposeController = {
    login:async (req,res)=>{
        const {body} = req
        const user = await usersService.findOneUserByEmail(body)
        
        if(!user) return res.sendStatus(401)
        const comparePwd = await authService.comparePassword({password:body.password,storedPassword:user.password})
        const tokenPayload = {
            lastName:user.lastName,
            firstName:user.firstName,
            email:user.email,
            admin:user.admin,
        }
        console.log(tokenPayload)
        if(comparePwd){ 
            const token = signJwt({payload:tokenPayload,expiresIn:'5min'}) 
            const refreshToken = signJwt({payload:tokenPayload,expiresIn:'7d'}) 
            const accessToken = {access_token:token,token_type:'Bearer'}
            const updateRefresh = await usersService.updateUserToken({userId:user._id,refreshToken,admin:user.admin})
            res.cookie('admin',tokenPayload.admin)
            return res.cookie('refreshToken', refreshToken, { httpOnly: true, sameSite: 'strict' }).json(accessToken)
        }
        return res.sendStatus(401)
    },
    refreshToken:async(req,res)=>{
        const {cookies} = req
        if (!cookies?.refreshToken) return res.sendStatus(401)
        const refreshToken = cookies.refreshToken
        res.clearCookie('refreshToken',{httpOnly:true,sameSite:'None',secure:true})

        const foundUser = await usersService.findUserByRefreshToken({refreshToken})
        if(!foundUser) return res.sendStatus(403)
        try {
            const decoded = verifyJwt(refreshToken)
            const tokenPayload = {
                lastName:foundUser.lastName,
                firstName:foundUser.firstName,
                email:foundUser.email,
                admin:foundUser.admin
            }
            if(decoded.email!==foundUser.email) return res.sendStatus(403)
            const accessToken = signJwt({payload:tokenPayload,expiresIn:'1d'}) 
            return res.json({accessToken,token_type:'Bearer'})
        } catch (error) {
            console.log(error)
            return res.sendStatus(401); 
        }
    }
}

export default exposeController