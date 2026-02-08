// ==UserScript==
// @name        Steam "Something went wrong while displaying this content" Fix
// @namespace   Violentmonkey Scripts
// @match       https://store.steampowered.com/*
// @grant       none
// @version     1.0
// @author      ZX_Lost_Soul
// @description Fix Steam video error on 100%+ zoom in Firefox.
// @run-at      document-start
// ==/UserScript==

(function() {
    const origGetRect = Element.prototype.getBoundingClientRect;
    Element.prototype.getBoundingClientRect = function() {
        const rect = origGetRect.apply(this, arguments);
        return {
            top: Math.floor(rect.top),
            left: Math.floor(rect.left),
            right: Math.floor(rect.right),
            bottom: Math.floor(rect.bottom),
            width: Math.floor(rect.width),
            height: Math.floor(rect.height),
            x: Math.floor(rect.x),
            y: Math.floor(rect.y),
            toJSON: rect.toJSON.bind(rect)
        };
    };
})();
