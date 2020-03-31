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
    }

}