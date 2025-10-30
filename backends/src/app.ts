import cors  from 'cors';
import express from "express";
import dotenv from "dotenv";
import mailRoutes from "./routes/mail.route";

dotenv.config();

const app = express();
app.use(cors());        // allow React frontend requests
app.use(express.json());

app.use("/api/mail", mailRoutes);

export default app;
