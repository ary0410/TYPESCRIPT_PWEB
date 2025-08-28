interface IUser{
    id: number;
    name: string;
    password: string;
    email?: string;
    //? é opcional
}

const usuario: IUser = {
    id: 1,
    name: "Ary",
    password: "ary123",
    email: "ary@gmail.com",
}

console.log(usuario);
