export class Image{
    _id: string;
    src: string;

    constructor()
    constructor(_id?: string,
                src?: string){
        this._id = (_id)? _id: '';
        this.src = (src)? src: '';
    }
}
