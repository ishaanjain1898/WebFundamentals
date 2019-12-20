(function($) {
    // TODO: make the node ID configurable
    var treeNode = $('#jsdoc-toc-nav');

    // initialize the tree
    treeNode.tree({
        autoEscape: false,
        closedIcon: '&#x21e2;',
        data: [{"label":"<a href=\"module-workbox-background-sync.html\">workbox-background-sync</a>","id":"module:workbox-background-sync","children":[{"label":"<a href=\"module-workbox-background-sync.BackgroundSyncPlugin.html\">BackgroundSyncPlugin</a>","id":"module:workbox-background-sync.BackgroundSyncPlugin","children":[]},{"label":"<a href=\"module-workbox-background-sync.Queue.html\">Queue</a>","id":"module:workbox-background-sync.Queue","children":[]}]},{"label":"<a href=\"module-workbox-broadcast-update.html\">workbox-broadcast-update</a>","id":"module:workbox-broadcast-update","children":[{"label":"<a href=\"module-workbox-broadcast-update.BroadcastCacheUpdate.html\">BroadcastCacheUpdate</a>","id":"module:workbox-broadcast-update.BroadcastCacheUpdate","children":[]},{"label":"<a href=\"module-workbox-broadcast-update.BroadcastUpdatePlugin.html\">BroadcastUpdatePlugin</a>","id":"module:workbox-broadcast-update.BroadcastUpdatePlugin","children":[]}]},{"label":"<a href=\"module-workbox-build.html\">workbox-build</a>","id":"module:workbox-build","children":[]},{"label":"<a href=\"module-workbox-cacheable-response.html\">workbox-cacheable-response</a>","id":"module:workbox-cacheable-response","children":[{"label":"<a href=\"module-workbox-cacheable-response.CacheableResponse.html\">CacheableResponse</a>","id":"module:workbox-cacheable-response.CacheableResponse","children":[]},{"label":"<a href=\"module-workbox-cacheable-response.CacheableResponsePlugin.html\">CacheableResponsePlugin</a>","id":"module:workbox-cacheable-response.CacheableResponsePlugin","children":[]}]},{"label":"<a href=\"module-workbox-core.html\">workbox-core</a>","id":"module:workbox-core","children":[]},{"label":"<a href=\"module-workbox-expiration.html\">workbox-expiration</a>","id":"module:workbox-expiration","children":[{"label":"<a href=\"module-workbox-expiration.CacheExpiration.html\">CacheExpiration</a>","id":"module:workbox-expiration.CacheExpiration","children":[]},{"label":"<a href=\"module-workbox-expiration.ExpirationPlugin.html\">ExpirationPlugin</a>","id":"module:workbox-expiration.ExpirationPlugin","children":[]}]},{"label":"<a href=\"module-workbox-google-analytics.html\">workbox-google-analytics</a>","id":"module:workbox-google-analytics","children":[]},{"label":"<a href=\"module-workbox-navigation-preload.html\">workbox-navigation-preload</a>","id":"module:workbox-navigation-preload","children":[]},{"label":"<a href=\"module-workbox-precaching.html\">workbox-precaching</a>","id":"module:workbox-precaching","children":[{"label":"<a href=\"module-workbox-precaching.PrecacheController.html\">PrecacheController</a>","id":"module:workbox-precaching.PrecacheController","children":[]}]},{"label":"<a href=\"module-workbox-range-requests.html\">workbox-range-requests</a>","id":"module:workbox-range-requests","children":[{"label":"<a href=\"module-workbox-range-requests.RangeRequestsPlugin.html\">RangeRequestsPlugin</a>","id":"module:workbox-range-requests.RangeRequestsPlugin","children":[]}]},{"label":"<a href=\"module-workbox-routing.html\">workbox-routing</a>","id":"module:workbox-routing","children":[{"label":"<a href=\"module-workbox-routing.NavigationRoute.html\">NavigationRoute</a>","id":"module:workbox-routing.NavigationRoute","children":[]},{"label":"<a href=\"module-workbox-routing.RegExpRoute.html\">RegExpRoute</a>","id":"module:workbox-routing.RegExpRoute","children":[]},{"label":"<a href=\"module-workbox-routing.Route.html\">Route</a>","id":"module:workbox-routing.Route","children":[]},{"label":"<a href=\"module-workbox-routing.Router.html\">Router</a>","id":"module:workbox-routing.Router","children":[]}]},{"label":"<a href=\"module-workbox-strategies.html\">workbox-strategies</a>","id":"module:workbox-strategies","children":[{"label":"<a href=\"module-workbox-strategies.CacheFirst.html\">CacheFirst</a>","id":"module:workbox-strategies.CacheFirst","children":[]},{"label":"<a href=\"module-workbox-strategies.CacheOnly.html\">CacheOnly</a>","id":"module:workbox-strategies.CacheOnly","children":[]},{"label":"<a href=\"module-workbox-strategies.NetworkFirst.html\">NetworkFirst</a>","id":"module:workbox-strategies.NetworkFirst","children":[]},{"label":"<a href=\"module-workbox-strategies.NetworkOnly.html\">NetworkOnly</a>","id":"module:workbox-strategies.NetworkOnly","children":[]},{"label":"<a href=\"module-workbox-strategies.StaleWhileRevalidate.html\">StaleWhileRevalidate</a>","id":"module:workbox-strategies.StaleWhileRevalidate","children":[]}]},{"label":"<a href=\"module-workbox-streams.html\">workbox-streams</a>","id":"module:workbox-streams","children":[]},{"label":"<a href=\"module-workbox-webpack-plugin.html\">workbox-webpack-plugin</a>","id":"module:workbox-webpack-plugin","children":[{"label":"<a href=\"module-workbox-webpack-plugin.GenerateSW.html\">GenerateSW</a>","id":"module:workbox-webpack-plugin.GenerateSW","children":[]},{"label":"<a href=\"module-workbox-webpack-plugin.InjectManifest.html\">InjectManifest</a>","id":"module:workbox-webpack-plugin.InjectManifest","children":[]}]},{"label":"<a href=\"module-workbox-window.html\">workbox-window</a>","id":"module:workbox-window","children":[{"label":"<a href=\"module-workbox-window.Workbox.html\">Workbox</a>","id":"module:workbox-window.Workbox","children":[]}]},{"label":"<a href=\"workbox.html\">workbox</a>","id":"workbox","children":[]}],
        openedIcon: ' &#x21e3;',
        saveState: true,
        useContextMenu: false
    });

    // add event handlers
    // TODO
})(jQuery);
