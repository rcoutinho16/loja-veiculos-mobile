import { Image } from './image.model';

export class Car {
    _id: string;
    make: string;
    model: string;
    price: number;
    year: number;
    km: number;
    show: boolean;
    images: Array<Image>;

    constructor()
    constructor(_id?: string,
                make?: string,
                model?: string,
                price?: number,
                year?: number,
                km?: number,
                show?: boolean,
                images?: Array<Image>){
        this._id = (_id)? _id: '';
        this.make = (make)? make: '';
        this.model = (model)? model: '';
        this.price = (price)? price: null;
        this.year = (year)? year: null;
        this.km = (km)? km: null;
        this.show = (show)? show: false;
        this.images = (images)? images: null;
    }
}

