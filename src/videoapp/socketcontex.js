import React, { createContext, useState, useRef, useEffect } from "react";
import { io } from "socket.io-client";
import Peer from "simple-peer";
// import SimplePeer from 'simple-peer';

const SocketContext = createContext();

// const socket = io("http://localhost:5000");
const socket = io("https://vcb-production.up.railway.app/");

const ContextProvider = ({ children }) => {
  const [stream, setStream] = useState(null);
  const [me, setMe] = useState("");
  const [call, setCall] = useState("");
  const [callaccepted, setCallaccepted] = useState("false");
  const [callended, setCallended] = useState("false");
  const [name, setName] = useState("");

  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: true,
      })
      .then((currentstream) => {
        setStream(currentstream);

        myVideo.current.srcObject = currentstream;
      });

    socket.on("me", (id) => setMe(id));

    socket.on("calluser", ({ from, name: callerName, signal }) =>
      setCall({ isReceivedCall: true, from, name: callerName, signal })
    );
  }, []);

  const answerCall = () => {
    setCallaccepted(true);
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: stream,
    });

    peer.on("signal", (data) => {
      socket.emit("answercall", { signal: data, to: call.from });
    });

    peer.on("stream", (currentstream) => {
      userVideo.current.srcObject = currentstream;
    });

    peer.signal(call.signal);

    connectionRef.current = peer;
  };

  const callUser = (id) => {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream: stream,
    });

    peer.on("signal", (data) => {
      socket.emit("calluser", {
        userToCall: id,
        signalData: data,
        from: me,
        name,
      });
    });

    peer.on("stream", (currentstream) => {
      userVideo.current.srcObject = currentstream;
    });

    socket.on("callaccepted", (signal) => {
      setCallaccepted(true);

      peer.signal(signal);
    });

    connectionRef.current = peer;
  };

  const leaveCall = () => {
    setCallended(true);
    connectionRef.current.destroy();

    window.location.reload();
  };

  return (
    <SocketContext.Provider
      value={{
        call,
        callaccepted,
        myVideo,
        userVideo,
        stream,
        setName,
        callended,
        me,
        callUser,
        leaveCall,
        answerCall,
      }}
    >
        {children}
    </SocketContext.Provider>
  );
};


export {ContextProvider, SocketContext}