import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';

//This function is async because we wait to receive the response from the database before we send it back to the client.
export const signup = async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password || username === '' || email === '' || password === '') {
        return res.status(400).json({ message: 'All fields are required' });
    }

    // We hash the password before saving it to the database for more security.
    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({ username, email, password: hashedPassword });

    try {
        await newUser.save();
        res.json({ message: 'Signup successful' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

    
};

