export class Dealership{
    _id: string;
    address: string;
    adressGoogleMapsUrl: string;
    telephone: string;
    facebookUrl: string;
    instagramUrl: string;
    whatsappUrl: string;
    youtubeUrl: string;
    twitterUrl: string;
    mondayToFridayOpening: string;
    mondayToFridayClosing: string;
    saturdayOpening: string;
    saturdayClosing: string;

    constructor()
    constructor(_id?: string,
                address?: string,
                adressGoogleMapsUrl?: string,
                telephone?: string,
                facebookUrl?: string,
                instagramUrl?: string,
                whatsappUrl?: string,
                youtubeUrl?: string,
                twitterUrl?: string,
                mondayToFridayOpening?: string,
                mondayToFridayClosing?: string,
                saturdayOpening?: string,
                saturdayClosing?: string,){
        this._id = (_id)? _id: '';
        this.address = (address)? address: '';
        this.adressGoogleMapsUrl = (adressGoogleMapsUrl)? adressGoogleMapsUrl: '';
        this.telephone = (telephone)? telephone: '';
        this.facebookUrl = (facebookUrl)? facebookUrl: '';
        this.instagramUrl = (instagramUrl)? instagramUrl: '';
        this.whatsappUrl = (whatsappUrl)? whatsappUrl: '';
        this.youtubeUrl = (youtubeUrl)? youtubeUrl: '';
        this.twitterUrl = (twitterUrl)? twitterUrl: '';
        this.mondayToFridayOpening = (mondayToFridayOpening)? mondayToFridayOpening: '';
        this.mondayToFridayClosing = (mondayToFridayClosing)? mondayToFridayClosing: '';
        this.saturdayOpening = (saturdayOpening)? saturdayOpening: '';
        this.saturdayClosing = (saturdayClosing)? saturdayClosing: '';
    }
}
