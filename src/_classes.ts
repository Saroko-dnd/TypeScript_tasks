import { sealed } from './_decorators';

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

export { ReferenceItem, Encyclopedia };
