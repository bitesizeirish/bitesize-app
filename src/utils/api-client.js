import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.bitesize.irish',
  headers: {
   // 'X-Auth-Token': 'f2b6637ddf355a476918940289c0be016a4fe99e3b69c83d',
   'Authorization': 'Bearer {token}',
   'Content-Type': 'application/json'
    
  }
});
