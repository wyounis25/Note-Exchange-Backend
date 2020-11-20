import bycrypt from 'bcryptjs'
const users = [
    {
        name: "Bob",
        username: "bobnum1",
        password: bycrypt.hashSync('123456', 10)
    },
    {
        name: "Bruce",
        username: "batman1",
        password: bycrypt.hashSync('123456', 10)
    },
]

export default users