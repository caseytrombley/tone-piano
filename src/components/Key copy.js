import * as Tone from 'tone';
import PropTypes from 'prop-types';

import React, { useState } from 'react';

// window.addEventListener('keydown', playNote);

function Key({ note, duration }) {
  const [notePlayed, setNotePlayed] = useState(null);

  function handleClick() {
    const synth = new Tone.Synth().toDestination();
    const now = Tone.now();
    synth.triggerAttackRelease(note, duration || '8n', now);
  }

  function handleKeyDown(event) {
    console.log('yes');
    if (event.keyCode === 65) {
      console.log('yes');
    }
    // if (event.keyCode === 87) {
    //   playDb4();
    // }
    // if (event.keyCode === 83) {
    //   playD4();
    // }
    // if (event.keyCode === 69) {
    //   playEb4();
    // }
    // if (event.keyCode === 68) {
    //   playE4();
    // }
    // if (event.keyCode === 70) {
    //   playF4();
    // }
    // if (event.keyCode === 84) {
    //   playGb4();
    // }
    // if (event.keyCode === 71) {
    //   playG4();
    // }
    // if (event.keyCode === 89) {
    //   playAb4();
    // }
    // if (event.keyCode === 72) {
    //   playA4();
    // }
    // if (event.keyCode === 85) {
    //   playBb4();
    // }
    // if (event.keyCode === 74) {
    //   playB4();
    // }
    // if (event.keyCode === 75) {
    //   playC5();
    // }
  }

  return (
    <div
      className={`key ${
        note.toLowerCase().includes('b') ? 'black-key' : 'white-key'
      }`}
      onClick={() => handleClick()}
      onKeyDown={(event) => handleKeyDown()}
      tabIndex="0"
    ></div>
  );
}

Key.propTypes = {
  note: PropTypes.string,
  duration: PropTypes.string,
};

export default Key;
