import axios from "axios";

let instance = axios.create({
  params: {
    departure_airport_code: 'SVO',
    arrival_airport_code: 'JFK'
  },
  headers: {
    'x-rapidapi-key': '7e539976e8msh2b15b4a0045bd0ap112480jsnb12c58546671',
    'x-rapidapi-host': 'google-flights-search.p.rapidapi.com'
  }
});


let instance_2 = axios.create({
  baseURL: 'https://free.currconv.com/api/v7/convert?q=USD_RUB&compact=ultra&apiKey=3060313687be6d13ad10'
})







export const flyAPI = {
  getFlys(date) {
    return instance.get(`https://google-flights-search.p.rapidapi.com/search?departure_airport_code=SVO&arrival_airport_code=JFK&departure_date=${date}`).then((responce) => {
      console.log(responce.data.flights)
      return responce.data.flights;
    });
    
  },

  getCur() {
    return instance_2.get().then((responce) => {
      return responce.data["USD_RUB"];
    });
  }
};


