import * as Tone from 'tone';
// import PropTypes from 'prop-types';
import Key from './Key';

// import React, { useRef } from 'react';

window.addEventListener('keydown', playNote);

function playNote(event) {
  if (event.keyCode === 65) {
    handleClick('C4');
  }
  if (event.keyCode === 87) {
    handleClick('Db4');
  }
  if (event.keyCode === 83) {
    handleClick('D4');
  }
  if (event.keyCode === 69) {
    handleClick('Eb4');
  }
  if (event.keyCode === 68) {
    handleClick('E4');
  }
}

function handleClick(note, duration) {
  const synth = new Tone.Synth().toDestination();
  const now = Tone.now();
  synth.triggerAttackRelease(note, duration || '8n', now);
}

function Keyboard() {
  const notes = ['C4', 'Db4', 'D4', 'Eb4', 'E4', 'F4'];

  const allKeys = notes.map((n) => (
    <Key key={n} note={n} onClick={() => handleClick(n)} />
  ));

  return <div className="piano">{allKeys}</div>;
}

export default Keyboard;
