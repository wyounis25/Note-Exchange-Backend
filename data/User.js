import bycrypt from 'bcryptjs'
const users = [
    {
        name: "Bob",
        username: "bob",
        password: bycrypt.hashSync('123456', 10),
        carts: []
    },
    {
        name: "mark",
        username: "mark",
        password: bycrypt.hashSync('123456', 10),
        carts: []
    },
]

export default users