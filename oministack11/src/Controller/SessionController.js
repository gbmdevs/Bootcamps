const connection = require('../database/connections');

module.exports = {
    async create(request,response){
       const { id } = request.body; 
       const result = await connection('ongs')
            .where('id', id).select('name')
            .first(); 

       if(!result){
         return response.status(400)
                   .json({ error: "No ONG found with this ID"});
       }
       console.log(result);
       return response.json(result);      
    }
}