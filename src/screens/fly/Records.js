import "./Main.css";

import img1 from "../../img/fly.png";
import img2 from "../../img/arrow.png";
import pink from '../../img/pink.png';
import white from '../../img/white.png';
import { useState } from "react";

function getDate(date) {
  let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let day = date.getDate();
  let month = monthNames[date.getMonth()];
  let year = date.getFullYear();
  return `${day} ${month}, ${year}`;
}

const Record = (props) => {

  let getPrice = (usd, cur) => {
    let rub = Math.round(usd * cur);
    return `${Math.trunc(rub/1000)} ${rub - Math.trunc(rub/1000)* 1000} ₽`
  }

  let [state, setState] = useState(true);

  let handleToggle = (url) => {
    if(state) {
        props.setFav(url);
        setState(false);
    } else {
        props.delFav(url);
        setState(true);
    }
 };

  return (
    <div className="record">
      <img src={img1}/>
      <div className="info">
        <div className="info_1">
          {props.origin}
          <span>
            <img src={img2}/>
          </span>
          {props.destination}
        </div>

        <div className="info_2">
          {getDate(props.date)}
          <span>-</span>
          {props.time}
        </div>

        <div className="info_3">{props.company}</div>
      </div>

      <div className="price">
        <button onClick={() => handleToggle(props.detail_url)} className='add_f'>
          {state ? 
          <img src={white}/> :
          <img src={pink}/>
          }
        </button>
        <div>
          <span>Price:</span>
          {getPrice(props.price, props.cur)}
        </div>
      </div>
    </div>
  );
};

const Records = (props) => {
  let RecordEl = props.flys.map((p) => (
    <>
    <Record
      origin={props.origin}
      destination={props.destination}
      date={props.date}
      time={p.departure_time}
      company={p.airlines}
      price={p.price}
      detail_url={p.detail_url}
      cur={props.cur}
      setFav={props.setFav}
      delFav={props.delFav}
    />
    <hr className='line'/>
    </>
  ));
  return <div className="items">{RecordEl}</div>;
};

export default Records;
