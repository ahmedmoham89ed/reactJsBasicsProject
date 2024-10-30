export interface IuserData{
    username:string,
    email:string,
    password:string,
    address:string,
    phone:string
}

export interface Inputform{
    label: string;
    for: string;
    id: string;
    type: string;
    name: keyof IuserData;
}