function preload() {

}

function setup() {
    canvas = createCanvas(400, 800);
    canvas.position(300, 300);
    video = createCapture(VIDEO);
    video.hide();
    tint_colour = "";
}

function draw() {
    image(video, 0, 0, 400, 400);
    tint(tint_colour);
}

function take_snapshot() {
    save("p5_js.png");
}

function filter_tint() {
    tint_colour = document.getElementById("colour_name").value;
}