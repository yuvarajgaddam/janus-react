import React, { useState } from 'react';
import { JanusComponent, JanusVideoRoom, JanusPublisher, JanusPlayer, JanusChat, JanusSubscriber } from 'react-janus-components';
import { useParams } from 'react-router-dom';

function PublisherPage() {
  let { roomId } = useParams();
  roomId = Number(roomId);
  const [room, setRoom] = useState(null);
  const [pubId, setPubId] = useState(null);
  const [pubPvtId, setPubPvtId] = useState(null);
  const [enableSubscriber, setEnableSubscriber] = useState(false);
  const [room1, setRoom1] = useState(null);
  const [pubId1, setPubId1] = useState(null);
  const [pubPvtId1, setPubPvtId1] = useState(null);

  const [chatroom, setChatroom] = useState(null);

  return (
    <div className="publisher-page">
      <h1>Publisher Room: {roomId}</h1>
      <div>
        <label>Publisher ID:</label>
        <input
          type="text"
          value={pubId || ""}
          onChange={(e) => setPubId(e.target.value)}
          placeholder="Enter Publisher ID"
        />
      </div>
      <div>
        <label>Publisher Private ID:</label>
        <input
          type="text"
          value={pubPvtId || ""}
          onChange={(e) => setPubPvtId(e.target.value)}
          placeholder="Enter Publisher Private ID"
        />
      </div>
      <button onClick={() => setEnableSubscriber(true)}>Enable Subscriber</button>

      <JanusComponent server="ws://192.168.29.38:8188">
        <JanusVideoRoom>
          <JanusPublisher
            opaqueId={`publisher-${roomId}`}
            secret="1234"
            username="publisher"
            room={roomId}
            setRoom={setRoom1}
            setPubId={setPubId1}
            setPubPvtId={setPubPvtId1}
          >
            <JanusPlayer readyText="Publisher is ready" />
          </JanusPublisher>
          {enableSubscriber && pubId && pubPvtId && (
            <JanusSubscriber
              opaqueId="test12234"
              room={roomId}
              pubId={Number(pubId)}
              pubPvtId={Number(pubPvtId)}
            >
              <JanusPlayer
                readyText="Something"
              />
            </JanusSubscriber>
          )}
        </JanusVideoRoom>
        <JanusChat
          opaqueId={`publisher-${roomId}`}
          isPublisher={true}
          chatroom={roomId}
          setChatroom={setChatroom}
          username="publisher"
          display="Publisher"
        />
      </JanusComponent>
    </div>
  );
}

export default PublisherPage;