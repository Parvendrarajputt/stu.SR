    import express from 'express';
    import dotenv from 'dotenv';
    import cors from "cors"
    import {router} from './Routes/routes.js';
    import {Connection} from './DatabaseConnection.js/dbConnect.js';

    dotenv.config();
    const app = express();
    app.use(cors());
    // 2 
    app.use(express.json());    
    app.use("/api", router); 
    const PORT = process.env.PORT || 8000;

    Connection();

    app.listen(PORT, () => console.log(`🚀 Server running on PORT ${PORT}`));
