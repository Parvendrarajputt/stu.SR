import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const Connection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('✅ Database connected successfully');
    } catch (error) {
        console.error('❌ Error while connecting to the database:', error.message);
    }
};

export  {Connection}