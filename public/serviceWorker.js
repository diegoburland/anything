let CACHE_NAME = 'my-site-cache-v1'; 
const urlsToCache = [ 
    '/static/js/2.5cb1a2f3.chunk.js',
    '/static/js/runtime-main.6c7820ca.js',
    '/static/js/main.9529678b.chunk.js',
    '/static/css/2.679831fc.chunk.css',
    '/static/css/main.1924c656.chunk.css',
    '/static/media/logo.929eb3c6.svg',
    '/static/media/Nunito-Regular.334a6311.ttf',
    '/', 
    '/index.html', 
];
self.addEventListener ('install', function (event) { 
// Realice los pasos de instalación 
event.waitUntil ( 
caches.open (CACHE_NAME) 
.then (function (cache) { 
console.log ('Open cache'); 
return cache.addAll (urlsToCache); 
}) 
); 
self.skipWaiting ();
});

self.addEventListener('fetch', function(event) {
    
    event.respondWith(caches.match(event.request)
        .then(function(response) {
            if (response) return response;
            
            return fetch(event.request);
        })
    );
    
});