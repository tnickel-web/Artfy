import express, { Request, Response } from "express";
import multer from "multer";
import { google } from "googleapis";
import fs from "fs";
import path from "path";

const app = express();
const upload = multer({ dest: "uploads/" });

const CLIENT_ID = "DEIN_CLIENT_ID";
const CLIENT_SECRET = "DEIN_CLIENT_SECRET";
const REDIRECT_URI = "DEIN_REDIRECT_URI";
const REFRESH_TOKEN = "DEIN_REFRESH_TOKEN";

const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
);
oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const drive = google.drive({
    version: "v3",
    auth: oauth2Client,
});

app.post(
    "/upload-to-google-drive",
    upload.single("file"),
    async (req: Request, res: Response) => {
        try {
            const filePath = path.join(__dirname, req.file!.path);
            const response = await drive.files.create({
                requestBody: {
                    name: req.file!.originalname,
                    mimeType: req.file!.mimetype,
                },
                media: {
                    mimeType: req.file!.mimetype,
                    body: fs.createReadStream(filePath),
                },
            });
            fs.unlinkSync(filePath); // Delete the file locally after upload
            res.status(200).send("File uploaded successfully!");
        } catch (error) {
            console.error(error);
            res.status(500).send("Error uploading file.");
        }
    }
);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
