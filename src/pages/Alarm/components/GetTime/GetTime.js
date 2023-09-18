import React from "react";
import { Timer } from "../Timer/Timer";
import styles from "./GetTime.module.css";

export default class GetTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: '',
      autostart: true,
      step: 1000,
    }

  }

  render() {
    return (
      <>
        <div className={styles["askUser"]}>
          <span>Встановити таймер на </span>
          <input
            type="datetime-local"
            step="1"
            value={this.state.time}
            min="2023-08-31T00:00"
            max="2023-09-31T00:00"
            onChange={(e) => {
              this.setState({ time: e.target.value });
            }}

          />
          <button
            value={this.state.autostart}
            onClick={() => {
              if (this.state.autostart === true) {
                this.setState({ autostart: false });
              } else {
                this.setState({ autostart: true });
              }

            }}
          > Старт / Пауза</button>

          <div>Частота оновлення часу таймера:</div>
          <div >
            <input
              type="radio"
              id='1000'
              name="interval"
              value='1000'
              onChange={() => {
                this.setState({ step: 1000 });
              }}
            />
            <label for="oneSecond">1 секунда</label>
            <input
              type="radio"
              id='100'
              name="interval"
              value='100'
              onChange={() => {
                this.setState({ step: 100 })
              }}
            />
            <label for="hundredMiliseconds">100 мілісекунд</label>
            <input
              type="radio"
              id='2000'
              name="interval"
              value='2000'
              onChange={() => {
                this.setState({ step: 2000 })
              }}
            />
            <label for="twoSeconds">2 секунди</label>
            <input
              type="radio"
              id='10000'
              name="interval"
              value='10000'
              onChange={() => {
                this.setState({ step: 10000 })
              }}
            />
            <label for="tenSeconds">10 секунд</label>
          </div>
        </div>
        <Timer userTime={this.state.time} autostart={this.state.autostart} step={this.state.step} />

      </>
    );
  }
}

