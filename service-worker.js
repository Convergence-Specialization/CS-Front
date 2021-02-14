/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "asset-manifest.json",
    "revision": "f44c3cd4c7b70d8f2880a210396362bd"
  },
  {
    "url": "favicon.ico",
    "revision": "4cdf043d4cc0ca6970bc2fc63836cc0d"
  },
  {
    "url": "logo192.png",
    "revision": "474dacc3f00c8e25d2e6eb3350fe32b4"
  },
  {
    "url": "logo512.png",
    "revision": "d20fd8d89152b40d4a49c0e99b614de0"
  },
  {
    "url": "manifest.json",
    "revision": "339481b1b6c42dc58b0433cbadf5d833"
  },
  {
    "url": "robots.txt",
    "revision": "fa1ded1ed7c11438a9b0385b1e112850"
  },
  {
    "url": "static/css/2.48571724.chunk.css",
    "revision": "743ab0e7882677ff262dcce563f7ce56"
  },
  {
    "url": "static/css/main.e2e7ede3.chunk.css",
    "revision": "cf9ed6dcb56c3e01821c6f918a340773"
  },
  {
    "url": "static/js/2.19cca5b7.chunk.js",
    "revision": "669290287396f62d4919afe98f5975a6"
  },
  {
    "url": "static/js/2.19cca5b7.chunk.js.LICENSE.txt",
    "revision": "0dc04204e9b507a7e6aea2320b51283f"
  },
  {
    "url": "static/js/main.85a82a49.chunk.js",
    "revision": "935fedf02c1c19de8f5dc24ac9779c0d"
  },
  {
    "url": "static/js/runtime-main.aab4bf4c.js",
    "revision": "c688dd8b6bee20987c53754da81ce217"
  },
  {
    "url": "static/media/heart_empty.1b65a37a.png",
    "revision": "a35c4d2757e85494b154f567550ce13c"
  },
  {
    "url": "static/media/heart_fill.10d77658.png",
    "revision": "12cace44aa04475934ea09cccb58ed74"
  },
  {
    "url": "static/media/slick.2630a3e3.svg",
    "revision": "f97e3bbf73254b0112091d0192f17aec"
  },
  {
    "url": "static/media/slick.29518378.woff",
    "revision": "b7c9e1e479de3b53f1e4e30ebac2403a"
  },
  {
    "url": "static/media/slick.a4e97f5a.eot",
    "revision": "ced611daf7709cc778da928fec876475"
  },
  {
    "url": "static/media/slick.c94f7671.ttf",
    "revision": "d41f55a78e6f49a5512878df1737e58a"
  },
  {
    "url": "static/media/speech_bubble.a7384eca.png",
    "revision": "9da111c9b37d0f31a03672009949ebeb"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
