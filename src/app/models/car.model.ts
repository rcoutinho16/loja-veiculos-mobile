import { Image } from './image.model';

export class Car {
    id: number;
    make: string;
    model: string;
    price: string;
    year: string;
    km: string;
    show: boolean;
    images: Array<Image>;

    constructor()
    constructor(id?: number,
                make?: string,
                model?: string,
                price?: string,
                year?: string,
                km?: string,
                show?: boolean,
                images?: Array<Image>){
        this.id = (id)? id: null;
        this.make = (make)? make: '';
        this.model = (model)? model: '';
        this.price = (price)? price: '';
        this.year = (year)? year: '';
        this.km = (km)? km: '';
        this.show = (show)? show: false;
        this.images = (images)? images: null;
    }
}

