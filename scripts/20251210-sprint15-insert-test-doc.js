
module.exports = {
  async up(db, client) {
    console.log("=== Migration START: insert test document ===");

    const dbName = db.databaseName || "unknown";
    console.log("Connected DB (from migration):", dbName);

    const collectionName = "document_types";
    console.log("Using collection:", collectionName);

    const result = await db.collection(collectionName).insertOne({
      message: "Hello from migrate-mongo POC",
      createdAt: new Date()
    });

    console.log("Inserted document _id:", result.insertedId);
    console.log("=== Migration END: insert test document ===");
  },

  async down(db, client) {
    console.log("Down migration not implemented for this script.");
  }
};
