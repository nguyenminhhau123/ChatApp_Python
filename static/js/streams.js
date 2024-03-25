const APP_ID = "bcadc5c31f7b4ef9bb157310df00e880";
const CHANNEL = "main";
const TOKEN =
  "007eJxTYHi9myHNPYGr9OW6uCcqIaWXbJRevOJLq/ed+f3ER4ltGpsVGJKSE1OSTZONDdPMk0xS0yyTkgxNzY0NDVLSDAxSLSwMdnswpjUEMjLkB5xgZGSAQBCfhSE3MTOPgQEAhK4f9A==";
let UID;
const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
let localTracks = [];
let remoteUser = {};
let joinAndDisplayLocalStream = async () => {
  UID = await client.join(APP_ID, CHANNEL, TOKEN, null);
  localTracks = await AgoraRTC.createMicrophoneAndCameraTracks();
  let player = `
    <div id="user-container-${UID}" class="video-container">
    <span class="username-wrapper"> My Name </span>
    <div class="video-player" id="user-${UID}"></div>
  </div>
    `;
  document
    .getElementById("video-streams")
    .insertAdjacentHTML("beforeend", player);
  localTracks[1].play(`user-${UID}`);
  await client.publish([localTracks[0], localTracks[1]]);
};
joinAndDisplayLocalStream();
