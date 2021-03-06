import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import seatSelect from './reducers';
import MovieInfo from './components/MovieInfo';
import SeatSelected from './components/SeatSelected';
import SeatSelector from './container/SeatSelector';
import './Index.css';

let store = createStore(seatSelect);

class Seat extends Component {
  // state = {
  //   selectSeat: [];//将要选择的座位
  // }
  // 添加座位
  // addSeat = (seat) => {
  //   this.setState(prevState => ({
  //     selectSeat: [...prevState.selectSeat, seat]
  //   }));
  // }
  // 取消座位
  // removeSeat = (id) => {
  //   this.setState({
  //     selectSeat: this.state.selectSeat.filter(seat => seat.id !== id)
  //   });//筛选掉 -> 重新渲染
  // }

  render() {
    // const { selectSeat } = this.state;
    return (
      <Provider store={store}>
        <div className="seat">
          <div className="tOperator">
            <i className="tOperator__icon tOperator__icon--blackBack" onClick={() => { window.history.back(); }} />
            万达影院
            <i className="tOperator__icon tOperator__icon--blackShare" />
          </div>
          <MovieInfo />
          <div className="seat__main">
            {/* 背景图片 */}
            <div className="seat__tip" />
            <div className="seat__graph">
              <div className="seat__screen">T13屏幕</div>
              <div className="seat__map"><SeatSelector /></div>
            </div>
          </div>
          <SeatSelected />
        </div>
      </Provider>
    );
  }
}

// Seat.propTypes = {};

export default Seat;
