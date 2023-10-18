const userModel = require("../models/users.js");
const SECRET_KEY = "auth user";

const signup = async (req, res) => {
    const { email, name, password } = req.body;

    try {
        const existingUser = await authModel.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({ message: "email already exist" })
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const result = await authModel.create({
            email: email,
            name: name,
            password: hashPassword
        });

       const token = jwt.sign({ email:result.email, id:result.id }, SECRET_KEY);
       res.status(401).json({user: result, token: token});


    } catch (error) {
        console.log("error while signup")
        res.status(401).json({ message: "something went wrong" })
    };
};


const login = async (req,res) =>{
   const { email, password } = req.body;
};

module.exports = { signup, login };