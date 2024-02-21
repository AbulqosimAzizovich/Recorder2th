// import "./styles.css";
// import { useReactMediaRecorder } from "react-media-recorder";
// import VideoRecorder from "react-video-recorder";
// import {
//   RecordWebcam,
//   useRecordWebcam,
//   CAMERA_STATUS,
// } from "react-record-webcam";
// const OPTIONS = {
//   filename: "test-filename",
//   fileType: "mp4",
//   width: 1920,
//   height: 1080,
// };
// const RecordView = () => {
//   const { status, startRecording, stopRecording, mediaBlobUrl } =
//     useReactMediaRecorder({ video: true });

//   return (
//     <div>
//       <p>{status}</p>
//       <button onClick={startRecording}>Start Recording</button>
//       <button onClick={stopRecording}>Stop Recording</button>
//       <video src={mediaBlobUrl} controls autoPlay loop />
//     </div>
//   );
// };

// export default function Home() {
//   const recordWebcam = useRecordWebcam(OPTIONS);
//   const getRecordingFileHooks = async () => {
//     const blob = await recordWebcam.getRecording();
//     console.log({ blob });
//   };

//   const getRecordingFileRenderProp = async (blob) => {
//     console.log({ blob });
//   };
//   return (
//     <div>
//       <h1>1.react-media-recorder</h1>
//       <RecordView />
//       <h1>2.react-video-recorder</h1>
//       <VideoRecorder
//         onRecordingComplete={(videoBlob) => {
//           // Do something with the video...
//           console.log("videoBlob", videoBlob);
//         }}
//       />
//       <h1>3.react-record-webcam</h1>
//       <p>Camera status: {recordWebcam.status}</p>
//       <div>
//         <button
//           disabled={
//             recordWebcam.status === CAMERA_STATUS.OPEN ||
//             recordWebcam.status === CAMERA_STATUS.RECORDING ||
//             recordWebcam.status === CAMERA_STATUS.PREVIEW
//           }
//           onClick={recordWebcam.open}
//         >
//           Open camera
//         </button>
//         <button
//           disabled={
//             recordWebcam.status === CAMERA_STATUS.CLOSED ||
//             recordWebcam.status === CAMERA_STATUS.PREVIEW
//           }
//           onClick={recordWebcam.close}
//         >
//           Close camera
//         </button>
//         <button
//           disabled={
//             recordWebcam.status === CAMERA_STATUS.CLOSED ||
//             recordWebcam.status === CAMERA_STATUS.RECORDING ||
//             recordWebcam.status === CAMERA_STATUS.PREVIEW
//           }
//           onClick={recordWebcam.start}
//         >
//           Start recording
//         </button>
//         <button
//           disabled={recordWebcam.status !== CAMERA_STATUS.RECORDING}
//           onClick={recordWebcam.stop}
//         >
//           Stop recording
//         </button>
//         <button
//           disabled={recordWebcam.status !== CAMERA_STATUS.PREVIEW}
//           onClick={recordWebcam.retake}
//         >
//           Retake
//         </button>
//         <button
//           disabled={recordWebcam.status !== CAMERA_STATUS.PREVIEW}
//           onClick={recordWebcam.download}
//         >
//           Download
//         </button>
//         <button
//           disabled={recordWebcam.status !== CAMERA_STATUS.PREVIEW}
//           onClick={getRecordingFileHooks}
//         >
//           Get recording
//         </button>
//       </div>

//       <video
//         ref={recordWebcam.webcamRef}
//         style={{
//           display: `${
//             recordWebcam.status === CAMERA_STATUS.OPEN ||
//             recordWebcam.status === CAMERA_STATUS.RECORDING
//               ? "block"
//               : "none"
//           }`,
//         }}
//         autoPlay
//         muted
//       />
//       <video
//         ref={recordWebcam.previewRef}
//         style={{
//           display: `${
//             recordWebcam.status === CAMERA_STATUS.PREVIEW ? "block" : "none"
//           }`,
//         }}
//         controls
//       />
//     </div>
//   );
// }

import React from "react";
import { ReactMediaRecorder } from "react-media-recorder";

const Home = () => {
  return (
    <div>
      <ReactMediaRecorder
        video
        render={({
          status,
          startRecording,
          stopRecording,
          mediaBlobUrl,
          download,
        }) => (
          <div className="w-full mx-auto ">
            <video
              className="w-1/2 mx-auto mt-10 mb-5 rounded-lg"
              src={mediaBlobUrl}
              controls
              autoPlay
              loop
            />
            <div className="flex items-center gap-1 justify-center">
              <button
                onClick={startRecording}
                className="bg-blue-400 rounded-md px-3 py-1 mx-5 text-white"
              >
                Start Recording
              </button>
              <button
                onClick={stopRecording}
                className="bg-blue-400 rounded-md px-3 py-1 mx-5 text-white"
              >
                Stop Recording
              </button>
            
            </div>
          </div>
        )}
      />
      <div className="my-10"></div>
      <hr />
      <div className="my-10"></div>

      <ReactMediaRecorder
        screen
        render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
          <div className="w-full mx-auto ">
            {status === "stopped" && (
              <video
                className="w-1/2 mx-auto mt-10 mb-5 rounded-lg"
                src={mediaBlobUrl}
                controls
              />
            )}
            <div className="flex items-center gap-1 justify-center">
              {status === "idle" && (
                <button
                  className="bg-blue-400 rounded-md px-3 py-1 mx-5 text-white"
                  onClick={startRecording}
                >
                  Start Screen Recording
                </button>
              )}
              {status === "recording" && (
                <button
                  className="bg-blue-400 rounded-md px-3 py-1 mx-5 text-white"
                  onClick={stopRecording}
                >
                  Stop Screen Recording
                </button>
              )}
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default Home;
