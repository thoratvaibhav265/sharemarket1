import { Admin } from "./admin";
import { Trader } from "./trader";

export class Share{
    id!:number;
    sharename!:string;
    price!:number;
    quantity!:number;
    status!:string;
    admin!:Admin;
    trader!:Trader;
}