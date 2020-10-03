class MediaPlayer {
    media: HTMLMediaElement;
    plugin: Array<any>;
    container: HTMLElement;
    constructor(config) {
        this.media = config.el;
        this.plugin = config.plugin || [];
        this.initPlayer();
        this.initPlugins();
    }
    private initPlugins() {
        this.plugin.forEach(plugin => {
            plugin.run(this);

        });
    }

    initPlayer() {
        this.container = document.createElement("div")
        this.media.parentNode.insertBefore(this.container, this.media);
        this.container.appendChild(this.media);
        this.container.style.position = "relative"
    }

    play() {
        this.media.play();
    }
    pause() {
        this.media.pause();
    }
    mute() {
        this.media.muted = true;
    }
    unmute() {
        this.media.muted = false;
    }

};

    




//class pero da error intentando ejecutar el this.play
// class mediaPlayer {
//     constructor() {
//         this.play()      //methodo  que hace play
//     }
//         play() {                 // funcion del metodo que hacep lay
//         video.play();  
//     }m
// }

export default MediaPlayer;