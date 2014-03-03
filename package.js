Package.describe({
  summary: 'Braintree for Meteor'
});

Npm.depends({
  braintree: "1.12.0",
});

Package.on_use(function(api) {
  api.add_files('server.js', 'server');
  api.add_files('braintree-client.js', 'client');
 
  if (typeof api.export !== 'undefined') { 
    api.export('Braintree');
  }
});
