noseX = 0;
noseY = 0;
function preload() {
   clownnose = loadImage('https://i.postimg.cc/vZdSZ9gP/580b57fbd9996e24bc43bed5.png');
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded() {
    console.log("model is loaded.");
    
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX + " nose y = " + noseY);
    }
}

function draw() {
    image(video,0,0,300,300);
    image(clownnose,noseX-10,noseY-10,30,30);
}

function take_snapshot() {
    save('myFilterImage.png');
}