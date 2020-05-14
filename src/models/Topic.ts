import { v4 } from "uuid";

export class Topic {
    constructor(title: string, note: string, due: string, done: string, id?: string) {
        this.title = title;
        this.note = note;
        this.due = due;
        this.done = done;
        this.id = id;

        if(id) {
            this.id = id;
        } else {
            this.id = v4();
        }
    }

    private _id : string;
    public get id() : string {
        return this._id;
    }

    public set id(value : string) {
        this._id = value;
    }


    private _title : string;
    
    public get title() : string {
        return this._title;
    }

    public set title(v : string) {
        let blacklist = [];
        
        const pos = blacklist.findIndex((w) => {
            return w == v;
        });

        if(pos > -1) {
            this._title = "***";
        } else {
            this._title = v;
        }
        
        let standardTitel = "Aufgabe";

        if(this.title == "Todo") {
            this._title = standardTitel;
        } else {
            this._title = this.title;
        }
    }


    private _note : string;

    public get note() : string {
        return this._note;
    }
    public set note(v : string) {
        this._note = v;
    }


    private _due : string;

    public get due() : string {
        return this._due;
    }
    public set due(v : string) {
        this._due = v;
    }


    private _done : string;

    public get done() : string {
        return this._done;
    }
    public set done(v : string) {
        this._done = v;
    }
}