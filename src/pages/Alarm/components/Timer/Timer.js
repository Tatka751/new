import React from "react";
import styles from "./Timer.module.css";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.hours = '0';
    this.minutes = '0';
    this.seconds = '0';
    this.userInputTime = this.props.userTime;
    this.userInputAutostart = this.props.autostart;
    this.interval = this.props.step
  }

  componentDidMount() {

  }

  componentDidUpdate() {
    let nowDateTime = new Date();
    const nowTime = nowDateTime.getTime()



    let userDateTime = new Date(this.props.userTime)
    const needTime = userDateTime.getTime();

    let rizn = needTime - nowTime;
    if (rizn > 0) {
      if (this.props.autostart === true) {

        this.hours = Math.floor((rizn % (1000 * 60 * 60 * 60)) / (1000 * 60 * 60));
        this.minutes = Math.floor((rizn % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((rizn % (1000 * 60)) / 1000);


        this.minutes = this.minutes < 10 ? "0" + this.minutes : this.minutes;
        this.seconds = this.seconds < 10 ? "0" + this.seconds : this.seconds;
        this.nowHhours = Math.floor((rizn % (1000 * 60 * 60 * 60)) / (1000 * 60 * 60));
        this.nowMinutes = Math.floor((rizn % (1000 * 60 * 60)) / (1000 * 60));
        this.nowSeconds = Math.floor((rizn % (1000 * 60)) / 1000);

        clearInterval(this.timerID);
        let step = Number(this.props.step);

        this.timerID = setInterval(
          () => { this.tick(); },
          step


        );


        if (rizn <= step) {
          this.hours = 0;
          this.minutes = 0;
          this.seconds = 0;
          clearInterval(this.timerID);
          this.timerID = setInterval(
            () => { this.tick(); },
            step);

          //this.props.autostart = false;

          alert(`Час вийшов`);
        }






      }
    }


  }


  componentWillUnmount() {

    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div className={styles["timer"]}>
        <div>Залишилось часу: {this.hours} : {this.minutes} : {this.seconds}</div>
      </div>


    );
  }
}

export { Timer };
