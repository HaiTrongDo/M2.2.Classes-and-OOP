export class Book {
    ID: string;
    name: string;

    constructor(bookID:string,
                name: string) {
        this.ID = bookID;
        this.name = name;
    }
    getName():string{
        return this.ID
    }
    setName(newName:string):void{
        this.name = newName;
    }
    getID():string{
        return this.ID
    }
}