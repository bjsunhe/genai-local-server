

const mysql = require('mysql');





const runMySql=async (req, res, next) => {
  try{
    let result

  let sql=req.body.sql
  console.log(sql)

  let previousQuestions=req.body.previousQuestions
  console.log(previousQuestions)





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
