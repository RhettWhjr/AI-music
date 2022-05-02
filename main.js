song = "";
song2 = "";

function setup()
{
    canvas = createCanvas(600, 500)
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video,0,0,600,500)
}

function preload()
{
    song = loadSound("Harry.mp5")
    song2 = loadSound("Peter Pan.mp5")

}

function play()
{
    song.play();
}