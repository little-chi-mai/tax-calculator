import React from 'react';

export default function InfoBox(props) {
  return (
    <div className="info-box">
      <p><span className="info-box__dot">i</span>{props.text}</p>
    </div>
  )
}