import express from "express";
import bodyParser from "body-parser";
// import pg from "pg";


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());
app.set("view engine", "ejs");

// const database = {
//   host:'localhost',
//   user: 'postgres',
//   password:'Phoenix001',
//   database: 'world',
//   port:5432
// };

const visited_states = [
  { id: 1, state_code: 'IN-JK', name: 'Jammu and Kashmir' },
  { id: 2, state_code: 'IN-DL', name: 'Delhi' },
  { id: 3, state_code: 'IN-MP', name: 'Madhya Pradesh' },
  { id: 4, state_code: 'IN-RJ', name: 'Rajasthan' },
  { id: 5, state_code: 'IN-MH', name: 'Maharashtra' }
]

async function getStates(){
  // const db = new pg.Client(database);
  try {
    // await db.connect();
    // const result = await db.query('SELECT * FROM visited_states;');
    // console.log(result.rows);
    
    // return result.rows;
    return visited_states;
  } catch (error) {
    console.error('Error fetching row count:', error);
    throw error; 
  } finally {
    // await db.end();
  }
}

async function addState(data){
  let code = data.stateCode;
  let name = data.stateName;

  let found = visited_states.findIndex(state => state.state_code == 'code');
  if(found){
    return
  }
  

  let newState = {
    id: visited_states.length + 1, // Assign a new id based on the maximum id in the array
    state_code: code,
    name: name,
  };
  console.log("new data --> ",newState);

  visited_states.push(newState);
  console.log(visited_states);


  // const db = new pg.Client(database);
  // db.connect();



  // try{
  //   await db.query('INSERT INTO visited_states(state_code, name) values ($1,$2)',[code, name]);
  // } catch(e){
  //   console.log(e.message);
  //   return {error: e.message};
  // } finally{
  //   db.end();
  // }
  
}


app.get("/", async (req, res) => {
  try {
    const visitedStates = await getStates();
    res.render('index',  { visitedStates: JSON.stringify(visitedStates) });
  } catch (error) {
    console.error('Error fetching row count:', error);
    res.status(500).send('Internal Server Error');
  }

});

app.post("/add", async(req,res)=>{
  console.log(req.body);
  try {
    await addState(req.body);
    res.redirect('/');
  } catch (error) {
    console.error('Error adding state:', error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
;