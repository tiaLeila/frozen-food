import React, { useState } from 'react';

import Modal from './Modal';

const PopupFeedbackMealsPlan = () => {
  const [ isToggled, setToggled ] = useState(false);

  return (
    <>
      <button onClick={ () => setToggled(true) } >open</button>
      <Modal isOpen={isToggled} onRequestClose={ () => setToggled(false) }  >
        <div
            style={{
              padding: "10px",
              display: "flex",
              height: "100%",
              width: "100%",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-evenly"
            }}
          >
            <h1>Hello and Awake World!!! ;-)</h1>

            <p>
               Pariatur elit eu deserunt voluptate ipsum ad esse exercitation Lorem laboris exercitation officia labore magna.
            </p>

            <button
              style={{
                fontSize: "1.2rem",
                color: "#fff",
                padding: "10px 25px",
                marginTop: "20px",
                backgroundColor: "#00d1a4",
                border: "none",
                borderRadius: "4px",
                boxShadow: "2px 2px 2px #0002",
                width: "fit-content",
              }}
              onClick={ () => setToggled(false) }
            >Beleza!</button>
          </div>
      </Modal>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default PopupFeedbackMealsPlan;