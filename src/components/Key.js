// import * as Tone from 'tone';
import PropTypes from 'prop-types';

// import React, { useEffect } from 'react';

// window.addEventListener('keydown', playNote);

function Key({ note, onClick }) {
  return (
    <div
      className={`key ${
        note.toLowerCase().includes('b') ? 'black-key' : 'white-key'
      }`}
      tabIndex="0"
      onClick={onClick}
    ></div>
  );
}

Key.propTypes = {
  note: PropTypes.string,
};

export default Key;
