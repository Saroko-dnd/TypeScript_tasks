import { logger, sealed } from './_decorators';

abstract class ReferenceItem {
    public static department: string = 'Sciense';
    private pvPublisher: string;

    get publisher() {
        return this.pvPublisher.toUpperCase();
    }

    set publisher(newPublisher) {
        this.pvPublisher = newPublisher;
    }

    public constructor(public title: string, protected year: number) {
        console.log(`Creating a new ReferenceItem...`);
    }

    public abstract printCitation(): void;

    public printItem(): void {
        console.log(`Department: ${ReferenceItem.department}`);
        console.log(`${this.title} was published in ${this.year}`);
    }
}

// tslint:disable-next-line:max-classes-per-file
@sealed(`Encyclopedia`)
class Encyclopedia extends ReferenceItem {
    public constructor(title: string, year: number, public edition: number) {
        super(title, year);
    }

    public printCitation(): void {
        console.log(`${this.title} - ${this.year}`);
    }

    public printItem(): void {
        console.log(`Edition: ${this.edition} (${this.year})`);
    }
}

// tslint:disable-next-line:max-classes-per-file
@logger
class SuperEncyclopedia extends Encyclopedia {
    public constructor(
        title: string,
        year: number,
        public target: number,
        public pagesNumber: number,
    ) {
        super(title, year, target);
    }

    public printSize(): void {
        console.log(`${this.title} size: ${this.pagesNumber} pages.`);
    }

    public break(): void {
        console.log(`Encyclopedia ${this.title} was torn!`);
    }

    public glueTogether(): void {
        console.log(`Encyclopedia ${this.title} was glued together!`);
    }
}

export { ReferenceItem, Encyclopedia, SuperEncyclopedia };
