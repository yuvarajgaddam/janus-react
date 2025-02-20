import React, { useState } from 'react';

function LandingPage({ onPublisherClick, onSubscriberClick }) {
  const [pubRoomId, setPubRoomId] = useState('');
  const [subRoomId, setSubRoomId] = useState('');
  const [pubId, setPubId] = useState('');
  const [pubPrivateId, setPubPrivateId] = useState('');

  return (
    <div className="landing-page">
      <h1>Welcome to Janus Video Room</h1>
      <div>
        <input
          type="text"
          placeholder="Enter Room ID"
          value={pubRoomId}
          onChange={(e) => setPubRoomId(e.target.value)}
        />
        <button onClick={() => onPublisherClick(pubRoomId)}>Create Room (Publisher)</button>
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter Room ID"
          value={subRoomId}
          onChange={(e) => setSubRoomId(e.target.value)}
        />
         <input
          type="text"
          placeholder="Enter Pub ID"
          value={pubId}
          onChange={(e) => setPubId(e.target.value)}
        />
         <input
          type="text"
          placeholder="Enter PubPrivate ID"
          value={pubPrivateId}
          onChange={(e) => setPubPrivateId(e.target.value)}
        />
        <button onClick={() => onSubscriberClick(subRoomId, pubId, pubPrivateId)}>Join Room (Subscriber)</button>
      </div>
    </div>
  );
}

export default LandingPage;