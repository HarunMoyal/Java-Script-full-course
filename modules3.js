import {name} from"./modules1.js";//kisi dusrijs ki file se lene keliye import key word kaam mai lete hai 
console.log(name);
import {cook} from"./modules1.js";
cook();
import { withdraw as wd, deposit } from "./modules2.js";//as keyword se naam change kr sakte hai age kisi alg alg file mai
//same name ho to modules file me arror batayega tb naam change krna padega
wd();
deposit();


import * as usr from'./modules2.js';// kisi ek file ke sabhi export ko lekr usr naam me declair kiye
usr.deposit();//aur unhe call iss trah se karvayenge
import{default as hm} from'./modules1.js';
hm();//default fun ko naam dena zaruri hai