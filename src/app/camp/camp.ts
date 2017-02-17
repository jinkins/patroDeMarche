class Info {
    benjamines: string;
    petitesEtincelles: string;
    grandesEtincelles: string;
    alpines: string;
    grandes: string;

    constructor(b: string, pe : string, ge: string, a:string, g:string)
    {
        this.benjamines = b; 
        this.petitesEtincelles = pe; 
        this.grandesEtincelles = ge; 
        this.alpines = a; 
        this.grandes = g; 
    }
}

class Prix {
    one: number;
    soeur: number;
    demi: number;

    constructor(o:number, s:number, d:number)
    {
        this.one = o; 
        this.soeur = s; 
        this.demi = d; 
    }
}

export class Camp {
    description: string;
    quand: Date;
    lieu: string;
    infos: Info;
    iban: string;
    communication: string;
    prix: Prix


    constructor(
        d: string,
        q: Date,
        l: string,
        b: string,
        pe: string,
        ge: string,
        a: string,
        g: string,
        i: string,
        c: string,
        o: number,
        s: number,
        dc: number) {
        this.description = d;
        this.quand = q;
        this.lieu = l;
        this.infos = new Info(b,pe,ge,a,g)
        this.iban = i;
        this.communication = c;
        this.prix = new Prix(o,s,dc);
    }
}
