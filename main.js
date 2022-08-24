function setup(){
video=createCapture(VIDEO);
video.size(450,400);
canvas=createCanvas(450,400);
canvas.position(500,170);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoaded(){
console.log('PoseNet Is Initialized!');
}

function draw(){
background('dark cyan');
textSize(diiference);
fill('#FFE787');
text('Natasha',50,400);
}

rightWristX=0;
leftWristX=0;
difference=0;

function gotPoses(results){
if(results.length>0){
console.log(results);
leftWristX=results[0].pose.leftWrist.x;
rightWristX=results[0].pose.rightWrist.x;
difference=floor(leftWristX-rightWristX);
console.log("leftWristX="+leftWristX+"rightWristX="+rightWristX+"difference="+difference);
}
}
