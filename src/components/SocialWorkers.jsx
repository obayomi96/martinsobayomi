import React from 'react';
// import {workerObect} from '../workerObject';

const SocialWorker = () => {
  const workerObect = [
    {
      id: 0,
      name: "Benjamin Afolabi",
      imageUrl: "https://via.placeholder.com/150",

      role: "Psychological Expert",
    },
    { id: 1,
      name: "Wale Ojo",
      imageUrl: "https://via.placeholder.com/150",

      role: "Psychological Expert",
    },
    {
      id: 2,
      name: "Bella Okeke",
      imageUrl: "https://via.placeholder.com/150",

      role: "Psychological Expert",
    },
    {
      id: 2,
      name: "Richad Williams",
      imageUrl: "https://via.placeholder.com/150",

      role: "Psychological Expert",
    },
    {
      id: 2,
      name: "Peter Haruna",
      imageUrl: "https://via.placeholder.com/150",

      role: "Psychological Expert",
    },
    {
      id: 2,
      name: "Stella Dominic",
      imageUrl: "https://via.placeholder.com/150",

      role: "Psychological Expert",
    },
  ];

  const sWorkers = workerObect.map(s => {
    return (
      <div className="cards" key={s.id}>
        <div className="img-content">
          <img className="worker-img" src={s.imageUrl} alt="social worker url" />
          <div style={{display: "block", marginRight: "0", marginLeft: "50px"}}>
            <h4>{s.name}</h4>
            <p>{s.role}</p>
            <button>Contact</button>
          </div>
        </div>
      </div>
    );
  })

  return (
    <>
      <h1 style={{width: "100%"}}>Call our social workers</h1>
      <div className="workers-cards">
        {sWorkers}
      </div>
    </>
  )
}

export default SocialWorker;
