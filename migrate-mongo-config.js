const config = {
  mongodb: {
    url: "mongodb+srv://sairaj-dev:etQE2lpdMMYXXR7L@cluster0.0xaeq.mongodb.net/CE_DEV_V01",
    databaseName: "CE_DEV_V01",
    options: {},
  },
  migrationsDir: "scripts",
  changelogCollectionName: "migration_changelog",
  migrationFileExtension: ".js",
  useFileHash: false,
  moduleSystem: "commonjs",
};

module.exports = config;
