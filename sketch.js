let video;
let poseNet;
let Nose;


function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();
  nose = createVector(width/2,height/2);
  poseNet = ml5.poseNet(video, modelReady);
  poseNet.on('pose', gotPoses);
}

function gotPoses(poses){
  if(poses.length > 0){
    let poseNose = poses[0].pose.nose;
    nose.x = poseNose.x;
    nose.y = poseNose.y;
  }
}

function modelReady() {
  console.log("Model ready !!");
}

function draw() {
  background(220);
  image(video, 0,0);
  fill(255,255,0);
  circle(nose.x, nose.y, 20);
}