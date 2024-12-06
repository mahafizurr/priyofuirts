import multer from "multer";

const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/uploads", // Specify the upload directory
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    upload.single("file")(req, res, (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Error uploading file" });
      }

      // Handle the uploaded file
      const uploadedFile = req.file;
      console.log(uploadedFile);

      // ... Process the uploaded file, e.g., save to database, resize, etc.

      // Respond with success message
      console.log("File uploaded successfully");

      // Send a response to the client
      // res.status(200).json({ message: "File uploaded successfully" });

      res.status(200).json({ message: "File uploaded successfully" });
    });
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
