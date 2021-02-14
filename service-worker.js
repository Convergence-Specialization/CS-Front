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
    "revision": "60fe30e3b99c2dec6ebce4f364b9a919"
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
    "url": "static/js/2.c1fdc139.chunk.js",
    "revision": "63a2733110e7399e4c8e6e3997e19f6a"
  },
  {
    "url": "static/js/2.c1fdc139.chunk.js.LICENSE.txt",
    "revision": "0dc04204e9b507a7e6aea2320b51283f"
  },
  {
    "url": "static/js/main.7f478377.chunk.js",
    "revision": "7cff2318d0b217506b4e4f0985706ab0"
  },
  {
    "url": "static/js/runtime-main.aab4bf4c.js",
    "revision": "c688dd8b6bee20987c53754da81ce217"
  },
  {
    "url": "static/media/Background3.620463b3.png",
    "revision": "8a92bbb8ccb809e11e6c197dc326bd5e"
  },
  {
    "url": "static/media/BIGDATA.52977fe0.png",
    "revision": "23080cbc5c7f5b307438e6669ea1f79c"
  },
  {
    "url": "static/media/ENERGY_SCIENCE.21315476.png",
    "revision": "189718e444e52bab4a2e40cd9f5df10b"
  },
  {
    "url": "static/media/face.b39f43d7.png",
    "revision": "c5c32ccee04c2695ed0aa19ed1c79d24"
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
    "url": "static/media/ICT.b545ca1b.png",
    "revision": "16e9456355f02ce67bed2157d1f49594"
  },
  {
    "url": "static/media/KOREA.c06c3066.png",
    "revision": "11fa2f7434666eacd96ad31dd2986b77"
  },
  {
    "url": "static/media/newhorse.1a723361.png",
    "revision": "98f73d234630afde437383e59cc74b40"
  },
  {
    "url": "static/media/SECURITY.fc9888e9.png",
    "revision": "fa6a7a6ee015afd7aa0979776d36275c"
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
    "url": "static/media/SMART_CAR.f74b2250.png",
    "revision": "414e8a0868e3c316446f9eb0bb66f465"
  },
  {
    "url": "static/media/speech_bubble.a7384eca.png",
    "revision": "9da111c9b37d0f31a03672009949ebeb"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
