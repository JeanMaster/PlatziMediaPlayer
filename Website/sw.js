const VERSION = "v1";

self.addEventListener("install", event => {
    event.waitUntil(precache());
});

self.addEventListener("fetch", event => {
    const request = event.request;
   //si no es el methodo get no hace nada
    if (request.method != "GET" ) {
        return;
    }
    //buscar en cache
    event.respondWith(cachedResponse(request));

    //actualizar cache 

    event.waitUntil(uptadeCache(request));

});


//cachear
async function precache() {
    const cache = await caches.open(VERSION);
    return cache.addAll([ 
        // '/',
        // '/index.html',
        // '/src/index.js',
        // '/src/bigBuckBunny.mp4',
        // '/src/estilos.css',
        // '/src/mediaplayer.js',
        // '/src/plguins/autopause.js',
        // '/src/plguins/autoplay.js',    
    ])
}


//buscar en cache
async function cachedResponse(request) {
    const cache = await caches.open(VERSION);
    const response = await cache.match(request)
    return response || fetch(request);
}


async function uptadeCache(request) {
    const cache = await caches.open(VERSION);
    const response = await fetch(request);
    return cache.put(request,response);
}