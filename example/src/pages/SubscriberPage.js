import React, { useState } from 'react';
import { JanusComponent, JanusVideoRoom, JanusPublisher, JanusSubscriber, JanusPlayer, JanusChat } from 'react-janus-components';
import { useParams } from 'react-router-dom';

function SubscriberPage() {
  let { roomId } = useParams();
    roomId = Number(roomId);
  const { pubId } = useParams();
  const { pubPrivateId } = useParams();
  const [publId, setPublId] = useState(null);
  const [room, setRoom] = useState(null);
    const [pubPvtId, setPubPvtId] = useState(null);
  const [chatroom, setChatroom] = useState(null);

  return (
    <div className="subscriber-page">
      <h1>Subscriber Room: {roomId}</h1>
      <JanusComponent server="ws://192.168.29.38:8188">
        <JanusVideoRoom>
          <JanusPublisher
            opaqueId={`publisher-${roomId}`}
            secret="1234"
            username="SUBSCRIBE"
            room={roomId}
            isPublisher={false}
            setRoom={setRoom}
            setPubId={setPublId}
            setPubPvtId={setPubPvtId}
          >
            <JanusPlayer readyText="Publisher is ready" />
          </JanusPublisher>
          <JanusSubscriber
            opaqueId={`subscriber-${roomId}`}
            room={Number(roomId)}
            pubId={Number(pubId)}
            pubPvtId={Number(pubPrivateId)}
          >
            <JanusPlayer readyText="Subscriber is ready" />
          </JanusSubscriber>
        </JanusVideoRoom>
        <JanusChat
          opaqueId={`subscriber-${roomId}`}
          isPublisher={false}
          chatroom={chatroom}
          setChatroom={setChatroom}
          username="subscriber"
          display="Subscriber"
        />
      </JanusComponent>
    </div>
  );
}

export default SubscriberPage;