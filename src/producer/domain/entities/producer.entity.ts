import { v4 as uuidv4 } from 'uuid';

export enum Crop{
    SOJA = 'Soja',
    MILHO = 'Milho',
    ALGODAO = 'Algodao',
    CAFE = 'Cafe',
    CANA = 'Cana'
}

export class Producer{
    id: string;
    document: string;
    name: string;
    farmName: string;
    city: string;
    state: string;
    totalArea: number;
    arableArea: number;
    vegetArea: number;
    crops: Crop[];

    constructor(
        document : string,
        name : string,
        farmName : string,
        city : string,
        state : string,
        totalArea : number,
        arableArea : number,
        vegetArea : number,
        crops : Crop[],
        id?: string,
    ){
        this.id = id || uuidv4();
        this.document = document;
        this.name = name;
        this.farmName = farmName;
        this.city = city;
        this.state = state;
        this.totalArea = totalArea;
        this.arableArea = arableArea;
        this.vegetArea = vegetArea;
        this.crops = crops;
    }

    isAreaValid(): boolean{
        return this.arableArea + this.vegetArea <= this.totalArea;
    }
}