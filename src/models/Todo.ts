import { v4 } from "uuid";

export class Todo {
    constructor(title: string, note: string, due: string, done?: boolean, id?: string) {
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

        if(done) {
            this.done = done;
        } else {
            this.done = false;
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
        if (v == "Todo") {
            v = "Aufgabe";
        }

        this._title = v;
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


    private _done : boolean;

    public get done() : boolean {
        return this._done;
    }
    public set done(v : boolean) {
        this._done = v;
    }
}