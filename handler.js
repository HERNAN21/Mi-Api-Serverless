'use strict';
const serverless = require('serverless-http');
const axios = require('axios');
const translate = require('./translate');
const mysql = require('serverless-mysql')({
  config: {
    host: 'aws-database-1.co8d1inhkrfa.us-east-1.rds.amazonaws.com',
    database: 'prueba01',
    user: 'admin',
    password: '123toor2024',
  },
});



// Endpoint GET
const SWAPI_URL = 'https://swapi.py4e.com/api';
module.exports.getEndpoint = async (event, context) => {
  try {
    const response = await axios.get(`${SWAPI_URL}/people/1`);
    const translatedData = translate.translateToSpanish(response.data);
    return {
      statusCode: 200,
      body: JSON.stringify(translatedData),
    };
    // return JSON.stringify({hola:'hola'})
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};


// Endpoint POST
module.exports.postEndpoint = async (event, context) => {
  try {
    const requestBody = JSON.parse(event.body);
    // console.log(requestBody);
    // Conectar a la base de datos MySQL
    await mysql.query('INSERT INTO persona SET ?', [requestBody]);
    
    return {
      statusCode: 201,
      body: JSON.stringify({ message: 'Data created successfully' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};

module.exports.getPersonaEndpoint = async (event) => {
  try {
    const [rows, fields] = await mysql.query('SELECT * FROM persona');
    return {
      statusCode: 200,
      body: JSON.stringify(rows),
    };
  } finally {
    await mysql.end();
  }
};

// module.exports = {
//   getEndpoint: serverless(getEndpoint),
//   postEndpoint: serverless(postEndpoint),
//   getPersonaEndpoint: serverless(getPersonaEndpoint),
// };
