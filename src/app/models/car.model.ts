export class Car {
    id: number;
    make: string;
    model: string;
    price: string;
    year: string;
    km: string;
    show: boolean;

    constructor()
    constructor(id?: number,
                make?: string,
                model?: string,
                price?: string,
                year?: string,
                km?: string,
                show?: boolean){
        this.id = (id)? id: null;
        this.make = (make)? make: '';
        this.model = (model)? model: '';
        this.price = (price)? price: '';
        this.year = (year)? year: '';
        this.km = (km)? km: '';
        this.show = (show)? show: false;
    }
}

