module.exports = {
  async up(db, client) {
    console.log("Running migration: update CPT labels");

    await db.collection("document_types").updateMany(
      { code: "CPT" },
      {
        $set: {
          label: "UPDATED_FROM_MIGRATION",
          updatedAt: new Date()
        }
      }
    );

    console.log("Migration completed: update CPT labels");
  },

  async down(db, client) {
    // Optional rollback
    console.log("Rollback not implemented for this migration");
  }
};
