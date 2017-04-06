export class Annonce {
    idFirebase: string; 
    titre: string; 
    description: string; 
    audience: string[];
    datePublication: Date; 

    constructor(t: string, d: string, a: string[], dp, id: string) {
        this.titre = t; 
        this.description = d;
        this.audience = a; 
        this.datePublication = new Date(dp); 
        this.idFirebase = id; 
     };
}