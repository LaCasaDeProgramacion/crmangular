import { Pack } from "./Pack";
import { Title } from "@angular/platform-browser";

export interface StatPack {
    id?:number;
    gainmoney?:number;
    quantityselled?:number;
    pack?:Pack;
    mostSelledQuantityPackToday?:boolean;
    mostGainMoneyPackToday?:boolean;
    bestPackforToday?:boolean;
    numberoflosedays?:number;
    month?:string;
    year?:string;
    titleStat?:string;
    nbrewinDaysinMonth?:number;
    codeTitleAction?:string;

}