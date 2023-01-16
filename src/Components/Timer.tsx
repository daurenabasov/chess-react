import React, { FC, useEffect, useRef, useState } from "react";
import { Player } from "../Models/Player";
import { Colors } from "../Models/Color";

interface TimerProps {
  currentPlayer: Player | null;
  restart: () => void;
}

const Timer: FC<TimerProps> = ({ currentPlayer, restart }) => {
  const [blackTime, setBlackTime] = useState(300);
  const [whiteTime, setWhiteTime] = useState(300);

  const timer = useRef<null | ReturnType<typeof setInterval>>(null);

  useEffect(() => {
    startTime();
  }, [currentPlayer]);
  function startTime() {
    if (timer.current) {
      clearInterval(timer.current);
    }

    const callback =
      currentPlayer?.color === Colors.WHITE
        ? decrementWhiteTime
        : decrementBlackTime;
    timer.current = setInterval(callback, 1000);
  }

  function decrementBlackTime() {
    setBlackTime((prev) => prev - 1);
  }
  function decrementWhiteTime() {
    setWhiteTime((prev) => prev - 1);
  }

  const handleRestart = () => {
    setWhiteTime(300);
    setBlackTime(300);
    restart();
  };

  return (
    <div>
      <div>
        <button onClick={handleRestart} className="btn-hover color-7">
          Restart Game
        </button>
        <h2>Черные - {blackTime}</h2>

        <h2>Белые - {whiteTime}</h2>
      </div>
    </div>
  );
};

export default Timer;
