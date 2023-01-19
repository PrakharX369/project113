function setup()
{
    canvas = createCanvas(500,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,400);
    video.hide();
}
function draw()
{
    image(video,125,125,250,250);
    fill("blue");
    stroke("blue");
    circle(70,75,50);
    circle(70 ,425, 50);
    circle(450 ,75, 50);
    circle(450 ,425, 50);
    rect(65, 65, 400, 25);
    rect(65, 415, 400, 25);
    rect(55, 75, 25, 350);
    rect(440,75,25,350);

    
}