noseX=0;
noseY=0;

difference=0;
rightwristX=0;
leftwristX=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,550);
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses)
}
function draw(){
    background('#2193b0');
    document.getElementById("squre_side").innerHTML="width and height of a square will be="+difference+"px"
    fill("#b92b27");
    stroke("#b92b27");
    square(noseX,noseY,difference);
    
  
}

function modelLoaded(){
    console.log("posenet started the job")

}

function gotPoses(results){

    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log(noseX,noseY);
        rightwristX=results[0].pose.rightWrist.x;
        leftwristX=results[0].pose.leftWrist.x;
        difference=leftwristX-rightwristX;
        console.log("difference="+difference+ "leftwristX="+leftwristX+ "rightwristX="+rightwristX)
    }
}