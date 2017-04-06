export class Event {
    public titre: string;
    public description: string;
    public quand: Date;
    public audience: string[];
    public idFirebase: string;

    constructor(t: string, d: string, q: Date, a: string[], id:string) {
        this.titre = t;
        this.description = d;
        this.quand = q;
        this.audience = a;
        this.idFirebase = id;
    }

    public getTime() {
        return this.quand.getTime();
    }

    public compareDate(b: Event) {
        if (this.quand.getTime() > b.getTime()) {
            return 1;
        }
        else if (this.quand.getTime() == b.getTime()) {
            return 0;
        }
        else {
            return -1;
        }
    }
}