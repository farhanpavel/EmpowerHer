import multer from "multer";
import prisma from "../db.js";
import cloudinary from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

// Cloudinary Configuration
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const upload = multer({ dest: "uploads/" });

export const complainPost = [
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "nid", maxCount: 1 },
  ]), // Handle multiple files
  async (req, res) => {
    try {
      const { thana, policename, women_id, title, description } = req.body;
      const files = req.files;

      let imageUrl = null;
      let nidUrl = null;

      // Upload the image file if available
      if (files.image) {
        const uploadResult = await cloudinary.v2.uploader.upload(
          files.image[0].path,
          {
            folder: "complaints",
          }
        );
        imageUrl = uploadResult.secure_url;
      }

      // Upload the NID file if available
      if (files.nid) {
        const uploadResult = await cloudinary.v2.uploader.upload(
          files.nid[0].path,
          {
            folder: "complaints",
          }
        );
        nidUrl = uploadResult.secure_url;
      }

      // Create the complaint data in the database
      const Data = await prisma.complain.create({
        data: {
          thana,
          policename,
          women_id,
          title,
          description,
          imageUrl,
          nidUrl, // Add nidUrl to the database
        },
      });

      res.status(200).json(Data);
    } catch (error) {
      console.error("Error uploading to Cloudinary or creating record:", error);
      res.status(500).json({ error: "Failed to create complaint" });
    }
  },
];
