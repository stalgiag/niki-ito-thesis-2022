class Scene{
    constructor(scene) {
        this.scene = scene;
        this.sceneW = windowWidth;
        this.sceneH = windowWidth*2.16533333;
    }

    // height of image relative to the width
    display() {
        image(this.scene, 0, windowHeight/2-this.sceneH/2,  this.sceneW, this.sceneH);
    }
}

