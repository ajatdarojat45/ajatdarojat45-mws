// const cacheName = 'ajatdarojat45-mws-v1';
// const cacheFiles = [
//     '/404.html',
//     '/calculator.html',
//     '/fetch_json.html',
//     '/gdk.png',
//     '/index.html',
//     '/manifest.json',
//     '/maps_detail.html',
//     '/maps.html',
//     '/places.html',
//     '/sw.js',
//     '/assets/css/calculator.css',
//     '/assets/css/style.css',
//     '/assets/icons/icon-72x72.png',
//     '/assets/icons/icon-96x96.png',
//     '/assets/icons/icon-128x128.png',
//     '/assets/icons/icon-144x144.png',
//     '/assets/icons/icon-152x152.png',
//     '/assets/icons/icon-192x192.png',
//     '/assets/icons/icon-384x384.png',
//     '/assets/icons/icon-512x512.png',
//     '/assets/images/images/ajat.jpg',
//     '/assets/images/images/calculator.png',
//     '/assets/images/images/home.png',
//     '/assets/images/images/json.png',
//     '/assets/images/images/maps_detail.png',
//     '/assets/images/images/maps.png',
//     '/assets/images/images/menu.png',
//     '/assets/images/places/cibinong.jpg',
//     '/assets/images/places/ciseeng.jpg',
//     '/assets/images/places/pamulang.jpg',
//     '/assets/images/places/parung.jpg',
//     '/assets/images/places/rumpin.jpg',
//     '/assets/images/gdk.png',
//     '/assets/js/calculator.js',
//     '/assets/js/fetch_json.js',
//     '/assets/js/maps_detail.js',
//     '/assets/js/maps.js',
//     '/assets/scss/_variables.scss',
//     '/assets/scss/style.scss',
//     '/assets/components/menu.html',
//     '/assets/data/fetch_json.json',
// ];
//
// self.addEventListener('install', function (event) {
//     event.waitUntil(
//         caches.open(cacheName).then(function (cache) {
//             return cache.addAll(cacheFiles);
//         })
//     );
// });
//
// self.addEventListener('fetch', function (event) {
//     event.respondWith(
//         caches.open(cacheName).then(function (cache) {
//             return cache.match(event.request).then(function (response) {
//                 return response || fetch(event.request).then(function (response) {
//                     cache.put(event.request, response.clone());
//                     return response;
//                 });
//             });
//         })
//     );
// });
//
// self.addEventListener('activate', function activator(event) {
//     event.waitUntil(
//         caches.keys().then(function (keys) {
//             return Promise.all(keys
//                 .filter(function (key) {
//                     return key.indexOf(cacheName) !== 0;
//                 })
//                 .map(function (key) {
//                     return caches.delete(key);
//                 })
//             );
//         })
//     );
// });
