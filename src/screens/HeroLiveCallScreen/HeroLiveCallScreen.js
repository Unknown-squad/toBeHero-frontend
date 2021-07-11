import React, { useEffect, useRef, useState } from "react";
import HeroHomeHeader from "../../components/HeroHomeHeader";
import "./HeroLiveCallScreen.scss";
import Meta from "../../components/Meta";
import { useDispatch, useSelector } from "react-redux";
import { getSubscriptionsForChildHomeActions } from "../../actions/getSubscriptionsForChildHomeActions";
import iconLoading from "../../images/icon-loading.svg";
import Peer from "simple-peer";
import io from "socket.io-client";
import { useRouteMatch } from "react-router";
import { useHistory } from "react-router";
const socket = io.connect(`${process.env.REACT_APP_SOCKET_SERVER_DOMAIN}`);

const HeroLiveCallScreen = () => {
  let history = useHistory();
  let match = useRouteMatch();
  const [me, setMe] = useState("");
  const [stream, setStream] = useState();
  const [receivingCall, setReceivingCall] = useState(false);
  const [caller, setCaller] = useState("");
  const [callerSignal, setCallerSignal] = useState();
  const [callAccepted, setCallAccepted] = useState(false);
  const [idToCall, setIdToCall] = useState("");
  const [callEnded, setCallEnded] = useState(false);

  // =================================
  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();
  // ============================================

  const appointmentId = match.params.appointmentId;
  const subscriptionId = match.params.subscriptionId;
  const appointmentTitle = match.params.appointmentTitle;
  const getSubscriptionsForChildHome = useSelector(
    (state) => state.getSubscriptionsForChildHome
  );
  const { loading, error, data } = getSubscriptionsForChildHome;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!data.items[0].mentorId.fullName) {
      dispatch(getSubscriptionsForChildHomeActions());
    }

    // =========================

    history.listen((navData) => {
      if (navData.pathname === "/hero/home") {
        history.go(0);
      }
    });

    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setStream(stream);
        myVideo.current.srcObject = stream;
      });

    socket.on("me", (id) => {
      setMe(id);
    });

    socket.emit(`hero-send-id`, subscriptionId);

    // console.log(me);

    socket.on("callUser", (data) => {
      setReceivingCall(true);
      setCaller(data.from);
      setCallerSignal(data.signal);
    });
  }, [dispatch, data, history, subscriptionId]);

  // ==== video call functions ====
  const callUser = (id) => {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream: stream,
    });
    peer.on("signal", (data) => {
      socket.emit("callUser", {
        userToCall: id,
        signalData: data,
        from: me,
      });
    });
    peer.on("stream", (stream) => {
      userVideo.current.srcObject = stream;
    });
    socket.on("callAccepted", (signal) => {
      setCallAccepted(true);
      peer.signal(signal);
    });

    connectionRef.current = peer;
  };

  const answerCall = () => {
    setCallAccepted(true);
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: stream,
    });
    peer.on("signal", (data) => {
      socket.emit("answerCall", { signal: data, to: caller });
    });
    peer.on("stream", (stream) => {
      userVideo.current.srcObject = stream;
    });

    peer.signal(callerSignal);
    connectionRef.current = peer;
  };

  const leaveCall = () => {
    setCallEnded(true);
    socket.emit("call-ended", subscriptionId, appointmentId);
    connectionRef.current.destroy();
  };

  return (
    <>
      <Meta title="Welcome Our Hero !"></Meta>
      <HeroHomeHeader></HeroHomeHeader>
      <section className="hr-section-22">
        <h4>{appointmentTitle}</h4>
        <div className="container">
          <div className="name-plate">
            <div className="mentor-name-plate">
              <div className="plate-title">
                <p>Mentor</p>
              </div>
              <div className="inner-name-plate">
                <p>{data.items[0].mentorId.fullName}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-9 col-lg-8 col-12">
              <div className="mentor-control-live">
                <div className="container">
                  <div className="video-container">
                    <div
                      className="video"
                      style={{ fontSize: "24px", color: "white" }}
                    >
                      <h4>Hero</h4>
                      {stream && (
                        <video
                          playsInline
                          muted
                          ref={myVideo}
                          autoPlay
                          style={{ width: "300px" }}
                        />
                      )}
                    </div>
                    <div
                      className="video"
                      style={{ fontSize: "24px", color: "white" }}
                    >
                      <h4>Mentor</h4>
                      {callAccepted && !callEnded ? (
                        <video
                          playsInline
                          ref={userVideo}
                          autoPlay
                          style={{ width: "300px" }}
                        />
                      ) : null}
                    </div>
                  </div>
                  <div className="myId">
                    <div className="call-button">
                      {callAccepted && !callEnded ? (
                        <button onClick={leaveCall}>End Call</button>
                      ) : null}
                      {idToCall}
                    </div>
                  </div>
                  <div>
                    {receivingCall && !callAccepted ? (
                      <div className="caller">
                        <h1>Mentor is calling...</h1>
                        <button
                          variant="contained"
                          color="primary"
                          onClick={answerCall}
                        >
                          Answer
                        </button>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-12">
              <div className="notes-container">
                <div className="notes-form">
                  <form action="">
                    <div className="notes-title">
                      <label htmlFor="Title">Notes</label>
                      <textarea
                        name="Title"
                        id="Title"
                        cols="5"
                        rows="11"
                        placeholder="write your notes here …..."
                      ></textarea>
                    </div>
                  </form>
                </div>
                <div className="start-cancel-session">
                  <button className="btn btn-purple-400 btn-start">
                    Join now<span></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroLiveCallScreen;
