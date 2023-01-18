

import { insertLast, xhrData } from "./lib/index.js";



xhrData.get(
  'https://jsonplaceholder.typicode.com/users/1',
  (res) => {
    console.log(res);
  },
  (err) =>{
    console.log(err);
  }
)

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  