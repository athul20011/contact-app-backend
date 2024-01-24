//BackEnd logic

const db = require('../services/db')


const getAllcontacts = ()=>{
    return db.contacts.find().then((result)=>{
        if(result){
            return{
                statusCode:200,
                contacts:result
            }

        }
        else{
            return{
                statusCode:404,
                message:'cant find contacts'
            }
          

        }

    })
}

const addcontacts=(id,username,phone,email,street,city)=>{
    return db.contacts.findOne({id}).then((result)=>{
        if(result){
            return{
                statusCode:404,
                message:"contact already exists"
            }
        }
        else{
            const newContact = new db.contacts({id,username,phone,email,street,city})
            newContact.save()
            return{
                statusCode:200,
                message:"contact add successfully"
            }

        }
    })
}
//delete 
const deletecontact=(id)=>{
    return db.contacts.deleteOne({id}).then((result)=>{
            return{
                statusCode:200,
                message:"delete successfully"
            }
    })
    .catch((error)=>{
        return{
            statusCode:401,
            message:"failed to delete "
        }
    })
  }
//view 
  const viewcontact=(id)=>{
    return db.contacts.findOne({id}).then((result)=>{
        if(result){
            return{
                statusCode:200,
                contacts:result
            }

        }
        else{
            return{
                statusCode:404,
                message:'cant find contacts'
            }
          

        }
    })
}

const updatecontact=(id,username,phone,email,street,city)=>{//updated data
    return db.contacts.findOne({id}).then((result)=>{//result - 
        if(result){
            result.id = id;
            result.username = username;
            result.phone = phone;
            result.email = email;
            result.street = street;
            result.city = city

            result.save()
            
                return {
                    statusCode:200,
                    message:"contact data updated successfully"
                }
        }
        else{
                return {
                    statusCode:404,
                    message:'cant find contact'
                }
        }
    })
}
module.exports = {
    getAllcontacts,
    addcontacts,
    deletecontact,
    viewcontact,
    updatecontact
}