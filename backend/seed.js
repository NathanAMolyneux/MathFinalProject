const mongoose = require("mongoose");
const Note = require("./models/Note");

// 🔴 VERY IMPORTANT:
// 1) Go to Atlas -> Connect -> "Connect your application"
// 2) Copy the connection string that starts with mongodb+srv://
// 3) Paste it below as the value of uri
// 4) Replace <username> and <password> with your DB user and password
// 5) Add a database name after the /, e.g. /CIS380Database or /calc2notes

const uri =
  "mongodb+srv://molyneux150_db_user:dog12345@cis380database.kpfoe2b.mongodb.net/?appName=CIS380Database";

async function seed() {
  try {
    console.log("Connecting to DB with URI:", uri);
    await mongoose.connect(uri);

    console.log("Connected to DB");

    // optional: clear old notes
    await Note.deleteMany({});

    await Note.insertMany([
      {
        title: "Convergence Tests Overview",
        slug: "convergence-tests",
        content:
          "Main convergence tests: geometric, p-series, ratio, root, comparison, limit comparison, alternating, integral test...",
        topicOrder: 1,
      },
      {
        title: "Power Series",
        slug: "power-series",
        content:
          "Definition, interval of convergence, radius of convergence, ratio test applications...",
        topicOrder: 2,
      },
    ]);

    console.log("Seeding complete!");
  } catch (err) {
    console.error("Seeding error:", err);
  } finally {
    await mongoose.disconnect();
    process.exit();
  }
}

seed();
