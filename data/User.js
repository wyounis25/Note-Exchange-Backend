import bycrypt from 'bcryptjs'
const users = [
    {
        name: "Bob",
        username: "bobnum1",
        password: bycrypt.hashSync('123456', 10),
        carts: []
    },
    {
        name: "Bruce",
        username: "batman1",
        password: bycrypt.hashSync('123456', 10),
        carts: []
    },
]

export default users