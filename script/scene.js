class Scene{
    constructor(scene) {
        this.scene = scene;
    }

    display() {
        image(this.scene, 0, windowHeight/2-windowWidth*2.16533333/2, windowWidth, windowWidth*2.16533333);
    }
}

