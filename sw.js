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

importScripts("workbox-v3.6.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-a52f929ec88fc9e73428.js"
  },
  {
    "url": "app.aeed3c949efaeb1e8de3.css"
  },
  {
    "url": "app-8736febbb7f5dbf6d298.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-649e7dc1d705385d876c.js"
  },
  {
    "url": "index.html",
    "revision": "48c4adb1e85545c5c6f067678af4f7c5"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "156291ee7e3663f9f0e4fe177b26357a"
  },
  {
    "url": "0.e9035a2f32676513aa77.css"
  },
  {
    "url": "component---src-pages-index-js.50a4593a6d9a544c8f22.css"
  },
  {
    "url": "0-67ed9a76ab079f15bd2e.js"
  },
  {
    "url": "component---src-pages-index-js-9ab1f5cfa5e4843c5db3.js"
  },
  {
    "url": "static/d/177/path---index-6a9-19iZQTfOSTxMsOjPTcKhYUdKweE.json",
    "revision": "f74b22182e4fd8661d14078ac74325ee"
  },
  {
    "url": "component---src-pages-404-js-3611a2dc702c1fe09907.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "5a8e7d0942d2925f83865abfc9fbc0ac"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});