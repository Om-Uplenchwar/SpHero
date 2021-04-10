var canvas = new fabric.canvas('myCanvas');
var block_image_width = 30;
var block_image_height = 30;
var block_image_object = "";
var playerX = 10;
var playerY = 10;
var player_object = "";

function playerUpdate() {
    fabric.Image.fromURL("player.png", function(Img) {
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:playerY,
            left:playerX
        });
        
        canvas.add(player_object);

    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
        block_image_object = Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:playerY,
            left:playerX
            });

            canvas.add(block_image_object);

    });
}