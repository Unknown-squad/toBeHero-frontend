import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { mentorCancelAppointmentActions } from "../../actions/mentorCancelAppointmentActions";
import { mentorGetControlCourseDetailsActions } from "../../actions/mentorGetControlCourseDetailsActions";
import MentorControlCourseHeader from "../../components/MentorControlCourseHeader";
import Meta from "../../components/Meta";
import iconLoading from "../../images/icon-loading.svg";
import "./MentorCourseControlLiveScreen.scss";
import Peer from "simple-peer";
import io from "socket.io-client";
import { useHistory } from "react-router";
import { useRouteMatch } from "react-router";
const socket = io.connect("ws://localhost:5000");

const MentorCourseControlLiveScreen = () => {
  let history = useHistory();
  const match = useRouteMatch(
    "/mentor/live/:subscriptionId/:appointmentId/:appointmentTitle"
  );

  const [show, setShow] = useState(false);
  const [me, setMe] = useState("");
  const [stream, setStream] = useState();
  const [receivingCall, setReceivingCall] = useState(false);
  const [caller, setCaller] = useState("");
  const [callerSignal, setCallerSignal] = useState();
  const [callAccepted, setCallAccepted] = useState(false);
  const [idToCall, setIdToCall] = useState("");
  const [callEnded, setCallEnded] = useState(false);

  // ======================================
  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();

  // =================================
  const appointmentId = match.params.appointmentId;
  const subscriptionId = match.params.subscriptionId;
  const appointmentTitle = match.params.appointmentTitle;

  // ==================================

  const mentorGetControlCourse = useSelector(
    (state) => state.mentorGetControlCourse
  );
  const { loading, error, data } = mentorGetControlCourse;
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      !data ||
      !data.guardianId ||
      !data.guardianId.fullName ||
      (!data && data.appointments._id !== appointmentId) ||
      (!data && data._id !== subscriptionId)
    ) {
      dispatch(mentorGetControlCourseDetailsActions(subscriptionId));
    }

    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setStream(stream);
        myVideo.current.srcObject = stream;
      });

    socket.on("me", (id) => {
      setMe(id);
    });

    console.log(subscriptionId);
    socket.emit(`mentor-in`, subscriptionId);

    socket.on(`subscription${subscriptionId}`, (heroId) => {
      setIdToCall(heroId);
    });

    socket.on("callUser", (data) => {
      setReceivingCall(true);
      setCaller(data.from);
      setCallerSignal(data.signal);
    });
  }, [dispatch, subscriptionId, data, appointmentId]);

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
    connectionRef.current.destroy();
  };

  // ================================

  const handleCancel = (appointmentId) => {
    if (window.confirm("Are you sure?")) {
      dispatch(mentorCancelAppointmentActions(subscriptionId, appointmentId));
      history.goBack();
    }
  };
  return (
    <>
      <Meta title="Mentor | Live Call"></Meta>

      <MentorControlCourseHeader></MentorControlCourseHeader>
      <section className="hr-section-22">
        <h4>{appointmentTitle}</h4>
        <div className="container">
          <div className="name-plate">
            <div className="guardian-name-plate">
              <div className="plate-title">
                <p>Guardian</p>
              </div>
              <div className="inner-name-plate">
                <p>{data && data.guardianId && data.guardianId.fullName}</p>
              </div>
              <div className="guardian-plate-phone-number">
                <p
                  onClick={() => setShow(!show)}
                  style={show ? { display: "none" } : { cursor: "pointer" }}
                >
                  Click to view phone number
                </p>
                {show && (
                  <p
                    onClick={() => setShow(!show)}
                    style={{ cursor: "pointer" }}
                  >
                    {data && data.guardianId && data.guardianId.countryCode}
                    {data && data.guardianId && data.guardianId.phone}
                  </p>
                )}
              </div>
            </div>
            <div className="hero-name-plate">
              <div className="plate-title">
                <p>Hero</p>
              </div>
              <div className="inner-name-plate">
                <p>{data && data.childId && data.childId.fullName}</p>
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
                      <h4>Mentor</h4>
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
                      <h4>Hero</h4>
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
                    {/* <TextField
            id="filled-basic"
            label="ID to call"
            variant="filled"
            value={idToCall}
            onChange={(e) => setIdToCall(e.target.value)}
          /> */}
                    <div className="call-button">
                      {callAccepted && !callEnded ? (
                        <button onClick={leaveCall}>End Call</button>
                      ) : (
                        <button onClick={() => callUser(idToCall)}>
                          start live now
                        </button>
                      )}
                      {idToCall}
                    </div>
                  </div>
                  <div>
                    {receivingCall && !callAccepted ? (
                      <div className="caller">
                        <h1>Mentor is calling...</h1>
                        <button onClick={answerCall}>Answer</button>
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
                    <div className="button-send-notes">
                      <input
                        type="submit"
                        value="send notes"
                        className="notes-button"
                      />
                    </div>
                  </form>
                </div>
                <div className="start-cancel-session">
                  <button className="btn btn-purple-400 btn-start">
                    Start Live session <span></span>
                  </button>

                  <button
                    className="btn btn-cancel"
                    onClick={() => handleCancel(appointmentId)}
                  >
                    cancel appointement
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

export default MentorCourseControlLiveScreen;
