const bcrypt = require('bcryptjs')
//加密
const enbcrypt = (password:string) =>{
  let salt = bcrypt.genSaltSync(5);
  let hash = bcrypt.hashSync(password,salt)
  console.log(hash)
  return hash
}
//解密
const decrypt = (password:string,hash:string)=>{
  return bcrypt.compareSync(password,hash)
}
module.exports ={
  enbcrypt,
  decrypt
}