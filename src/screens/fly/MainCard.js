import React from "react";
import "./Main.css";
import { connect } from "react-redux";
import { getFlys, setFav, delFav, updateDate } from "../../redux/fly-reducer";
import { getAuth } from "../../redux/auth-reducer";
import Records from "./Records";
import img3 from "../../img/1488.gif";
import img4 from "../../img/Group 4.png";
import img5 from "../../img/log out.png";
import DatePicker from "react-date-picker";
import car1 from "../../img/Rectangle 23.png";
import car2 from "../../img/Rectangle 24.png";
import car3 from "../../img/Rectangle 28.png";
import car4 from "../../img/Intersect.png";

let mapStateToProps = (state) => {
  return {
    flys: state.flyPage.flys,
    loading: state.flyPage.loading,
    origin: state.flyPage.origin,
    destination: state.flyPage.destination,
    cur: state.flyPage.cur,
    date: state.flyPage.date,
    fav: state.flyPage.fav,
  };
};

class MainCard extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.date !== prevProps.date) {
      this.props.getFlys(
        this.props.date
          .toLocaleDateString("pt-br")
          .split("/")
          .reverse()
          .join("-")
      );
    }
  }

  render() {
    let preview;

    if (!this.props.loading && !this.props.flys) {
      preview = null;
    } else if (this.props.loading && !this.props.flys) {
      preview = (
        <div>
          <img src={img3} />
        </div>
      );
    } else if (!this.props.loading && this.props.flys) {
      preview = (
        <Records
          flys={this.props.flys}
          destination={this.props.destination}
          origin={this.props.origin}
          cur={this.props.cur}
          date={this.props.date}
          setFav={this.props.setFav}
          delFav={this.props.delFav}
        />
      );
    }
    return (
      <div className="app-wrapper">
        <div className="log">
          <div>Выйти</div>
          <button onClick={()=> this.props.getAuth(false)}>
            <img src={img5} />
          </button>
        </div>
        <div className="card">
          <div className="card_text">
            <div className="card_text_1">
              Вылеты
              <span>
                <img src={img4} />
              </span>
              SVO - JFK
            </div>

            <DatePicker
              value={this.props.date}
              format="dd-MMM-y"
              onChange={(value) => {
                this.props.updateDate(value);
              }}
            />
          </div>

          <div className="slider">
            <div>
              <img src={car1} />
            </div>

            <div>
              <img src={car2} />
            </div>

            <div>
              <img src={car3} />
            </div>

            <div>
              <img src={car4} />
            </div>
          </div>
          <div className="fav">
            Добавлено в Избранное: <span>{this.props.fav.length}</span> рейсов
          </div>

          {preview}
        </div>
      </div>
    );
  }
}

let MainComponent = connect(mapStateToProps, {
  getFlys,
  setFav,
  delFav,
  updateDate,
  getAuth
})(MainCard);

export default MainComponent;
