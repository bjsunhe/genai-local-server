

const mysql = require('mysql');

const axios = require('axios');



const runMySql=async (req, res, next) => {
  try{
    let result

  let sql=req.body.sql
  console.log(sql)

  let previousQuestions=req.body.previousQuestions
  console.log(previousQuestions)


  const url = 'http://34.125.249.167:8888/api/ai/openai-api';
  const data = {
      sql,
      previousQuestions

  };
  const config = {
      headers: {
          'Content-Type': 'application/json'
      }
  };

  // const response = await axios.post(url, data, config);
  // console.log('Data posted successfully:');
  // console.log(response)
  

  const process = await fetch(
    "http://34.125.249.167:8888/api/ai/openai-api",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sql,
        previousQuestions
      }),
    }
  );

  console.log(process.json().then(data=>console.log(data)));






  // const connection = mysql.createConnection({
  //   host: '127.0.0.1',
  //   user: 'root',
  //   password: 'Cool123456789',
  //   database: 'bmg'
  // });
  
  // connection.connect(err => {
  //   if (err) {
  //     console.error('Error connecting to MySQL:', err);
  //     return;
  //   }
  //   console.log('Connected to MySQL');
  

  //   connection.query(response.choices[0].message.content, (err, results) => {
  //     if (err) {
  //       console.error('Error selecting data:', err);
  //     } else {
  //       console.log('Selected data:');
  //       console.log(results); // Log the query results
  //           connection.end();
  
  
  //       res.status(200).json({
  //         success: "success",
  //         sql:sql,
  //         result:results,
  //       });
  //     }
  
  //   });
  // });




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
