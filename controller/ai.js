

const mysql = require('mysql');

const axios = require('axios');



const runMySql=async (req, res, next) => {
  try{
    let result

  let sql=req.body.sql
  console.log(sql)

  let previousQuestions=req.body.previousQuestions
  console.log(previousQuestions)

// make request openai
async function makePostRequest(naturalLanguage) {
  const url = 'http://localhost:8090/api/ai/openai-api';
  const data = {
      naturalLanguage
  };
  const config = {
      headers: {
          'Content-Type': 'application/json'
      }
  };

  try {
      const response = await axios.post(url, data, config);
      console.log('Data posted successfully:', response.data);
  } catch (error) {
      console.error('Error occurred:', error);
  }
}

makePostRequest();






  const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'Cool1234567890-',
    database: 'bmg'
  });
  
  connection.connect(err => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
    }
    console.log('Connected to MySQL');
  

    connection.query(response.choices[0].message.content, (err, results) => {
      if (err) {
        console.error('Error selecting data:', err);
      } else {
        console.log('Selected data:');
        console.log(results); // Log the query results
            connection.end();
  
  
        res.status(200).json({
          success: "success",
          sql:sql,
          result:results,
        });
      }
  
    });
  });




  }catch(e){
    res.status(404).json({
      message: "err",
      err:e,
    });
  }
  
};

module.exports = {

  runMySql
};
