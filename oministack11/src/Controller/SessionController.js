const connection = require('../database/connections');

module.exports = {
    async create(request,response){
       const { id } = request.body; 
       const result = await connection('ongs')
            .where('id', id).select('name'); 

       if(!result){
         return response.status(400)
                   .json({ error: "No ONG found with this ID"});
       }
       return response.json(result);      
    }
}