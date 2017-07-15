export class Chant {
    public titre: string; 
    public url: string; 
    public idFirebase: string; 

    constructor(t:string, u:string, i:string = null) {
        this.titre = t; 
        this.url = u; 
        this.idFirebase = i; 
    }

}

