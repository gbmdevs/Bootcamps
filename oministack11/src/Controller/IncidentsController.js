const connection = require('../database/connections');

module.exports = {
    async create(request, response){
        const { title , description , value } = request.body;
        const ong_id = request.headers.authorization;
        console.log(ong_id);

        const result = await connection('incidents').insert({
           title,
           description,
           value,
           ong_id
        })

        return response.json(result[0]);
    },
    async index(request, response){
          const resultIndex = await connection('incidents').select('*'); 
          response.json(resultIndex);
    },
    async delete(request, response){
        const { id } = request.params;
        const ong_id = request.headers.authorization; 
        const result = await connection('incidents').select('ong_id')
        .where('id', id).first();
          
        if( ong_id !== result.ong_id ){
             return response.status(401).json({error: 'Operation not permitted.'});
        }

        await connection('incidents').where('id', id).delete();
        return response.status(204).send();
    }

} 