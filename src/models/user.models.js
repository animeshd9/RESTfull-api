const moongose=require('mongoose')
const bcrypt = require('bcrypt')
const Schema=moongose.Schema

const UserSchema=new Schema ({
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match:/^\S+@\S+\.\S+$/

    },
    password:{
        type:String,
        required: true,
        minlength: 6,
        maxlength: 128
    },
    firstName:{
        type:String,
        required: true,
        maxlength:128
    },
    lastName:{
        type:String,
        required: true,
        maxlength:128
    }
}, {
    timestamps:true,
})

/**
 * pre save hooks
 * validation
 */


// UserSchema.pre('save')
UserSchema.pre('save', async function (next) {
    try{
        if(this.isNew){
            const salt =  await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(this.password,salt)
            this.password = hashedPassword
        }
    }catch(err){
        next(err)
    }
})
// password vaildation
UserSchema.methods.isValidPassword = async function(password){
    try{
        // if (password===this.password)
        // return password
        return  await bcrypt.compare(password,this.password)
    }catch(err){
        console.log(err)
        return err
    }
}

module.exports=moongose.model('User',UserSchema)