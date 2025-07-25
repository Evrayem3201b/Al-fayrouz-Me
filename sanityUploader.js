// uploadToSanity.js
import { client } from "./lib/sanity.ts";
const fs = require("fs");
const path = require("path");

// 📁 Folder containing JSON files
const jsonDir = path.join(__dirname, "data");

// 🚀 Main function
async function uploadAllJsonToSanity() {
  try {
    const files = fs
      .readdirSync(jsonDir)
      .filter((file) => file.endsWith(".json"));

    for (const file of files) {
      const filePath = path.join(jsonDir, file);
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

      const document = {
        _type: "products",
        name: data.data.categoryEnglish,
        title: data.data.categoryArabic,
        productsArray: data.data.productsArray.map((item) => ({
          _type: "product",
          typeEnglish: item.typeEnglish,
          typeArabic: item.typeArabic,
          measurement: item.measurement || null,
        })),
      };

      try {
        const result = await client.create(document);
        console.log(`✅ Uploaded: ${document.name} (ID: ${result._id})`);
      } catch (error) {
        console.error(`❌ Error uploading ${document.name}:`, error.message);
      }
    }

    console.log("🎉 All documents have been uploaded to Sanity.");
  } catch (err) {
    console.error("🚨 Error reading JSON files:", err.message);
  }
}

// 🏃 Run the script
uploadAllJsonToSanity();
