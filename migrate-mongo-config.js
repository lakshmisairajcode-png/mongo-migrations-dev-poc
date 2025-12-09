
const env = process.env.ENV || "dev";

const dbByEnv = {
  dev: {
    url: process.env.MONGO_URI_DEV,
    databaseName: process.env.MONGO_DB_DEV || "CE_DEV_V01",
  },
  qa: {
    url: process.env.MONGO_URI_QA,
    databaseName: process.env.MONGO_DB_QA || "CE_QA_V01",
  },
  prod: {
    url: process.env.MONGO_URI_PROD,
    databaseName: process.env.MONGO_DB_PROD || "CE_PROD_V01",
  },
};

const current = dbByEnv[env];

const config = {
  mongodb: {
    url: current.url,
    databaseName: current.databaseName,
    options: {},
  },
  migrationsDir: "scripts",
  changelogCollectionName: "migration_changelog",
  migrationFileExtension: ".js",
  useFileHash: false,
  moduleSystem: "commonjs",
};

module.exports = config;
