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
        const { page = 1 } = request.query;  

        const resultIndex = await connection('incidents')
        .limit(5)
        .offset((page - 1 )* 5)
        .select('*');
         
        const [count] = await connection('incidents').count();
        console.log(count);
        
        response.header('X-Total-Count', count['count(*)']);

        return response.json(resultIndex);
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