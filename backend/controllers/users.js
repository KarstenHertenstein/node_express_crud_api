import User from '../models/User.js';

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.find({ email: { $eq: email }});

        if(user.length > 0) {
            if(user[0].password == password) {
                res.status(200).send(user);
            }else{
                res.status(401).send("Wrong password!");
            }
        }else{
            res.status(401).send("No such email!");
        }
        
        
    } catch (error) {
        res.status(401).json({ message: error.message });
    }

    
}

export const createUser = async (req, res) => {   
    const { userid, email, password } = req.body;
    
    const createdUser = new User({ userid, email, password });

    try {
        await createdUser.save();

        res.status(201).json({ message: 'User successfully created.' });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const getUser = async (req, res) => {
    try {
        const user = await User.find({ userid: { $eq: req.params.id }});
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};