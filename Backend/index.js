const express = require('express');
const cors = require('cors');
require('dotenv').config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const app = express();

// middleware
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send("server is getting hot")
})





const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.mndvni1.mongodb.net/?appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // client api
    const jobsCollection = client.db('Job-Portal').collection('jobsCollection');
    const applicationCollection = client.db('Job-Portal').collection('applications');

    app.get('/jobs', async (req, res) => {


      const email=req.query.email;
      const query={};
      if(email){
        query.hr_email=email
      }


      const cursor = jobsCollection.find(query);
      const result = await cursor.toArray()
      res.send(result);
    })
    // post applications data

    app.post('/applications', async (req, res) => {
      const applicationsData = req.body;
      const result = await applicationCollection.insertOne(applicationsData);
      res.send(result);
    })

    app.get('/jobs/:id', async (req, res) => {
      const id = req.params.id

      const query = { _id: new ObjectId(id) }
      const result = await jobsCollection.findOne(query);
      res.send(result);


    })

    app.post('/jobs',async(req,res)=>{
      const jobsData=req.body;
      const result=await jobsCollection.insertOne(jobsData);
      res.send(result)
    })

    app.get('/applications', async (req, res) => {
      const email = req.query.email;
      const query = {
        email: email
      }
      const result = await applicationCollection.find(query).toArray();
      res.send(result);
    })

    // find the applied jobs

    app.get('/applications/job/:id',async(req,res)=>{
      const id=req.params.id;
      const query={jobId:id};
      const result=await applicationCollection.find(query).toArray();
      res.send(result);
    })

    // could be done but not should be done
    // app.get('/jobsByEmailAddress',async(req,res)=>{
    //   const email= req.query.email;
    //   const query={hr_email: email}
    //   const result=await jobsCollection.find(query).toArray();
    //   res.send(result);
    // })



    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);






app.listen(port, () => {
  console.log(`server is running in port number ${port}`);

})

