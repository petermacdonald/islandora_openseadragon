(function($) {
  Drupal.behaviors.islandoraOpenSeadragon = {
    attach: function(context, settings) {
      var resourceUri = settings.islandoraOpenSeadragon.resourceUri;
      var config = settings.islandoraOpenSeadragon.settings;
      config.tileSources = new Array();
      resourceUri = (resourceUri instanceof Array) ? resourceUri : new Array(resourceUri);
      $.each(resourceUri, function(index, uri) {
        var tileSource = new OpenSeadragon.DjatokaTileSource(uri, settings.islandoraOpenSeadragon);
        config.tileSources.push(tileSource);
      });
      new OpenSeadragon(config);
    }
  };
})(jQuery);