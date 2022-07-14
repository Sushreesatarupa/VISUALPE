
// create an express app
const express = require("express");
const cors = require("cors");
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
const app = express();
const config = require("./config");
var axios = require("axios");
const localStorage = require("localStorage");

const createData = require("./util/consent_detail");
const requestData = require("./util/request_data");
// var AuthController = require('./AuthController');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static("public"));


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://sayansree:${config.mongodb_secret}@cluster0.eywtc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

var db=null
var users=null
async function setup() {
  try {
    await client.connect();
    db= client.db("VisualPe");
    users = db.collection('users');
    console.log("Connected successfully to server");
  } catch(err) {
    await client.close();
  }
}
setup().catch(console.dir);

app.get("/", function (req, res) {
  res.send("Hello");
});


const checkPhone=(phn)=>{//verified
  console.log("check phone")
  return myPromise = new Promise(async(success, fail) =>{
    const res=await users.findOne({phone:phn})
    if(res){
      success();
    }else
      fail();
  })
 
}
const addUser=(phn,pin)=>{
  console.log("add user")
  return myPromise = new Promise(async(success, fail) =>{
    users.insertOne({phone:phn,
      pinHash:pin,
      clientID:null,
      dataSessionID:null,
      fiData:null
    }).then(res=>success())
    .catch(err=>fail())
  })
}
const checkAuth=(phn,pin)=>{//verified
  console.log("check auth")
  return myPromise = new Promise(async(success, fail) =>{
    const res=await users.findOne({phone:phn},{projection:{_id:0,phone:1,pinHash:1}})
    if(res){
      success(res.pinHash==pin);
    }else
      fail();
  })
}
const addId=(phn,id)=>{
  console.log("addId")
  return myPromise = new Promise(async(success, fail) =>{
    users.updateOne({phone:phn},{$set:{clientID:id}})
    .then(res=>success())
    .catch(err=>fail())
  })

}
const addFiData=(consent_id,data)=>{
  console.log("add fi data")
  return myPromise = new Promise(async(success, fail) =>{
    users.updateOne({clientID:consent_id},{$set:{fiData:data}})
    .then(res=>success())
    .catch(err=>fail())
  })
}
const getFiData=(phn)=>{
  console.log("get fi data")
  return myPromise = new Promise(async(success, fail) =>{
    const res=await users.findOne({phone:phn},{projection:{_id:0,phone:1,fiData:1}})
    if(res)
      success(res.fiData);
    else
      fail();
  })
}
const delUser=(phn)=>{
  console.log("del user")
  return myPromise = new Promise(async(success, fail) =>{
    users.deleteOne({phone:phn})
    .then(res=>success())
    .catch(err=>fail())
  })
}
const getid=(phn)=>{
  console.log("get id")
  return myPromise = new Promise(async(success, fail) =>{
    const res=await users.findOne({phone:phn},{projection:{_id:0,phone:1,clientID:1}})
    if(res){
      success(res.clientID);
    }else
      fail();
  })
}
app.get('/checklogin', (req, res)=> {
  var token = req.headers['x-access-token'];
  if (!token) return res.send({ auth: false,wait:false, message: 'No token provided.' });
  jwt.verify(token,config.JWT_secret, (err, decoded)=> {
    if (err) return res.send({ auth: false,wait:false, message: 'Failed to authenticate token.' });
    getid(decoded.phone)
    .then((resp)=>{
      console.log("db:login successful")
      res.send({auth:true,wait:resp==null,message:"login successful"});
    }).catch(()=>console.log("db: getid error"))
  });
});

app.post("/consent/:mobileNumber", (req, res) => {
  // localStorage.setItem("consent", "Pending");
 
  var token = req.headers['x-access-token'];
  if (token) 
    jwt.verify(token,config.JWT_secret, (err, decoded)=> {
    if (!err) res.send({ url:"https://ansuman528.github.io/VisualPe", token: token });
    })
  obj={
    phone : req.params.mobileNumber,
    hash : bcrypt.hashSync((new Date()).toUTCString(), 8)
  }
  
  var tokenjwt = jwt.sign(obj, config.JWT_secret, {expiresIn: 86400 });

  checkPhone(req.params.mobileNumber)
  .then(()=>{
        checkAuth(req.params.mobileNumber,req.body.pin)
        .then(resp=>{
          console.log(`login auth:${res}`)
          if(resp)
            res.send({ url:"https://ansuman528.github.io/VisualPe", token: tokenjwt }); 
          else
            res.send({ url:"https://ansuman528.github.io/VisualPe/login.html", token: null });
        return
        }).catch(()=>{
          console.log("login error")
          res.sendStatus(500)}
        )
     
  }).catch(()=>{
    console.log("new user")
    let body = createData(req.params.mobileNumber);
    var requestConfig = {
      method: "post",
      url: config.api_url + "/consents",
      headers: {
        "Content-Type": "application/json",
        "x-client-id": config.client_id,
        "x-client-secret": config.client_secret,
        },
      data: body,
    };
  axios(requestConfig)
    .then( (response)=> {
      let url = response.data.url;
      //write phone no pin to db
      addUser(req.params.mobileNumber,req.body.pin)
      .then(()=>{
        console.log("new user registered")
        res.send({"url":url,"token":tokenjwt});
      })
      .catch(()=>console.log("error adding user"))
      
    })
    .catch(function (error) {
      console.log(error);
      console.log("Error AA create consent req");
    });
    
  })
    
  

});

////// CONSENT NOTIFICATION
var body={}
app.post("/visualpay", (req, res) => {
   body = req.body;
  if (body.type === "CONSENT_STATUS_UPDATE") {
    if (body.data.status === "ACTIVE") {
      console.log("web: Consent ACTIVE notification");
      addId(body.data.Detail.Customer.id.split("@")[0],body.consentId)
      .then(()=>console.log("db: added cons ID "))
      .catch(()=>console.log("db: failed to add cons ID"))
      fi_data_request(body.consentId);
    } else {
      console.log("web: consent rejected")
      delUser(body.data.Detail.Customer.id.split("@")[0])
      .then(()=>console.log("db: del usr done"))
      .catch(()=>console.log("db: del use failed"))
      // localStorage.setItem("jsonData", "Rejected");
    }
  }
  if (body.type === "SESSION_STATUS_UPDATE") {
    if (body.data.status === "COMPLETED") {
      console.log("web: FI COMPLETE notification");
      fi_data_fetch(body.dataSessionId,body.consentId);
    } else {
      console.log("web: FI PENDING notification");
      // localStorage.setItem("jsonData", "PENDING");
    }
  }
  res.send("OK");
});
app.get("/visualpay", (req, res) => {
  res.send(body);
})
////// FI DATA REQUEST

const fi_data_request = async (consent_id) => {
  console.log("In FI data request");
  let request_body = requestData(consent_id);
  var requestConfig = {
    method: "post",
    url: config.api_url + "/sessions",
    headers: {
      "Content-Type": "application/json",
      "x-client-id": config.client_id,
      "x-client-secret": config.client_secret,
    },
    data: request_body,
  };

  axios(requestConfig)
    .then(function (response) {
      console.log("Data request sent");
    })
    .catch(function (error) {
      console.log(error);
      console.log("web: Error data session request");
    });
};

////// FETCH DATA REQUEST

const fi_data_fetch = (session_id,consent_id) => {
  console.log("In FI data fetch");
  var requestConfig = {
    method: "get",
    url: config.api_url + "/sessions/" + session_id,
    headers: {
      "Content-Type": "application/json",
      "x-client-id": config.client_id,
      "x-client-secret": config.client_secret,
    },
  };
  axios(requestConfig)
    .then(function (response) {
      addFiData(consent_id,response.data)
      .then(()=>console.log("db: added data to local storage"))
      .catch(()=>console.log("db: add data error"))
      localStorage.setItem("jsonData", JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
      console.log("web: fetch data Error");
    });
};

// app.post("/redirect", (req, res) => {
//   res.send(localStorage.getItem("consent"));
// });

///// GET DATA
app.get("/get-data/DEPOSIT", (req, res) => {
  // res.send(JSON.parse(localStorage.getItem("jsonData")));
  var token = req.headers['x-access-token'];
  if (token) 
    jwt.verify(token,config.JWT_secret, (err, decoded)=> {
    if (err) res.sendStatus(403)
      getFiData(decoded.phone)
      .then((resp)=>{
        console.log("db: data retrive success")
        res.send(resp)
      }).catch(()=>console.log("db : error data retrive"))
    })
    else res.sendStatus(403)
});
app.get("/get-data/:type", (req, res) => {
  res.send(config.fiData[req.params.type]);
});

app.listen(config.port || 5000, () => console.log("Server is running..."));
