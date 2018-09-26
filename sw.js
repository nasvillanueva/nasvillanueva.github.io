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
    "url": "webpack-runtime-0fb7dc215f6f8e6124fe.js"
  },
  {
    "url": "app.af16afd375c8097504d1.css"
  },
  {
    "url": "app-fe7d9d48d0a3ac9a5194.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-c90de9087e83f2cfcb9a.js"
  },
  {
    "url": "index.html",
    "revision": "67a704cca12a93b2b2e10b8cf796f06c"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "c239a3ca45fb542294b097ec9ca36ed5"
  },
  {
    "url": "0.0876a5e15f599d8c3a83.css"
  },
  {
    "url": "component---src-pages-index-js.5fc03b87d5b4a0964a2d.css"
  },
  {
    "url": "0-880bce4ec05efb30b0b8.js"
  },
  {
    "url": "component---src-pages-index-js-d448a0f2f35ab468fc6f.js"
  },
  {
    "url": "static/d/760/path---index-6a9-JxIZeE6BEKcbFHY4KqyqOcHOOXA.json",
    "revision": "a6fd757bf0a9ee7dac1faadb9421eb68"
  },
  {
    "url": "component---src-pages-404-js-f704ab32952a517f9ac4.js"
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