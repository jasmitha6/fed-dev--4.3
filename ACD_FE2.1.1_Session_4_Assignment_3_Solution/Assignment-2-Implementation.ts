import { Car } from './Assignment-2-Interface';
import { CarInternal } from './Assignment-2-Interface';
import { carDetail } from "./Assignment-2-Funtion";
import { carInetrnalDetail } from "./Assignment-2-Funtion.1";

// defining all the details of myCar
let myCar: Car = { model: "Wagon R", engine: "K10B", horsepower: 1000 }
carDetail(myCar);
// defining all details of carInterna1D
let carInternalD : CarInternal = { seats : 2 ,gear : "automatic"}
carInetrnalDetail(carInternalD);
