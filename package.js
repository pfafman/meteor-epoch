Package.describe({
  summary: 'Epoch charts packaged for Meteor',
  version: "0.6.0",
  git: "https://github.com/pfafman/meteor-epoch.git"
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@1.0.0");
  api.use('d3js:d3@3.4.13', 'client');

  api.add_files('lib/epoch.js', 'client');
  api.add_files('lib/epoch.css', 'client');
});