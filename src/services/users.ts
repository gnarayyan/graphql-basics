import _ from 'lodash';
interface IUser{
id:string;
name:string;
age:number;
}

const users:IUser[] = [
    {id:'123', name:'John Doe', age:23},
    {id:'456', name:'Harry Locovach', age:49}
]


export const getUser = (id:string)=> _.find(users, {id})
export const getUsers = ()=> users