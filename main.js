noseX=0;
noseY=0;
function preload()
{
a=loadImage('https://i.postimg.cc/L8FJ14yR/download-removebg-preview.png')
}
function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses)
}
function draw()
{
  image(video,0,0,300,300);
  image(a,noseX,noseY,35,35)
  
}
function take_snapshot()
{
    save('myFilterimage.png') 
}
function modelLoaded()
{
    console.log("my model is loaded");
} 
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results)
        console.log("nose x ="+ results[0].pose.nose.x)         
        console.log("nose y ="+ results[0].pose.nose.y)
        noseX=results[0].pose.nose.x - 15      
        noseY=results[0].pose.nose.y - 15
    }
}