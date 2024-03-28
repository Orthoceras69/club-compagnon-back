import jwt from 'jsonwebtoken'
const secretKey = 'secret_key';

const signJwt = ({payload,expiresIn})=>{
    return jwt.sign(payload, secretKey, { expiresIn });
}
    
const verifyJwt = (payload)=>{
    return jwt.verify(payload, secretKey);
}

export {
    signJwt,
    verifyJwt
}