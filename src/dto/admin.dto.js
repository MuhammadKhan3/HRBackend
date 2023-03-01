
const insertRoleDto=(data)=>{
    return{

    }
}

const signupDto=(data)=>{
    return{
        id:data?.id,
        email:data?.email,
        password:data?.password,
        active:data?.active
    }
}

module.exports={insertRoleDto,signupDto}