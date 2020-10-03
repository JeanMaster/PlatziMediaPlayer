import MediaPlayer from "../mediaPlayer";

class autoPause {
    private threshold:number
    player: MediaPlayer;
    constructor() {
        this.threshold = 0.25
        this.handlerIntersection = this.handlerIntersection.bind(this)
        this.handleVisibilitychange = this.handleVisibilitychange.bind(this)
    }
    run(player: MediaPlayer) {
        this.player = player;
        const observer = new IntersectionObserver(this.handlerIntersection , {
            threshold: this.threshold
        })
        observer.observe(this.player.media)

        document.addEventListener("visibilitychange" , this.handleVisibilitychange)
    }

    handlerIntersection(entries: IntersectionObserverEntry[]) {
        const entry = entries[0]
        
        const isVisible = entry.intersectionRatio >= this.threshold;

        if (isVisible) {
            this.player.play()
        }else {
            this.player.pause()
        }
        

        // console.log(entry)
    }

    handleVisibilitychange() {
        const isVisible = document.visibilityState === "visible" 

        if (isVisible) {
            this.player.play()
        }else {
            this.player.pause()
        }

    }

}
export default autoPause