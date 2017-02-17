export class Annonce {
    titre: string; 
    description: string; 
    audience: string[];
    datePublication: Date; 

    constructor(t: string, d: string, a: string[], dp) {
        this.titre = t; 
        this.description = d;
        this.audience = a; 
        this.datePublication = new Date(dp); 
     };
}