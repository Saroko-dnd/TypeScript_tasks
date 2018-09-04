import { Encyclopedia } from './_classes';
import { Category } from './_enums';
import { IAuthor, IBook, IMagazine, Logger } from './_interfaces';
// tslint:disable-next-line:import-name
import Shelf from './_shelf';
import { purge } from './lib/utility-functions';

const inventory: IBook[] = [
    {
        author: 'K & R',
        available: true,
        category: Category.Software,
        id: 10,
        title: 'The C Programming Language',
    },
    {
        author: 'Steve McConnell',
        available: true,
        category: Category.Software,
        id: 11,
        title: 'Code Complete',
    },
    {
        author: 'A. B.',
        available: true,
        category: Category.Software,
        id: 12,
        title: '8-Bit Graphics with Cobol',
    },
    {
        author: 'C. D.',
        available: true,
        category: Category.Software,
        id: 13,
        title: 'Cool autoexec.bat Scripts!',
    },
];
const bookShelf = new Shelf<IBook>();
const magazineShelf = new Shelf<IMagazine>();
const magazines: IMagazine[] = [
    { title: 'Programming Language Monthly', publisher: 'Code Mags' },
    { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
    { title: 'Five Points', publisher: 'GSU' },
];

// const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

inventory.forEach((book: IBook) => {
    bookShelf.add(book);
});

magazines.forEach((magazine: IMagazine) => {
    magazineShelf.add(magazine);
});

console.log(`\nTask 19. Generic Constraints.\n\n`);
console.log(`List of magazine titles:`);
console.log(`---`);
magazineShelf.printTitles();
console.log(`---\n`);
console.log(`\nbook with title 'Code Complete':\n`);
console.log(bookShelf.find('Code Complete'));

console.log(`\nTask 18. Generic Interfaces and Classes.\n\n`);
console.log(`First book on bookshelf:`);
console.log(bookShelf.getFirst().title);
console.log(`First magazine on bookshelf:`);
console.log(magazineShelf.getFirst().title);

/*console.log(`\nTask 17. Generic Functions.\n`);
console.log(`\nInventory array after purge function:\n`);
console.log(purge(inventory));
console.log(`Array of numbers after purge function:\n`);
console.log(purge(numbers));*/

// Task 11. Creating and using classes
// ************************************************

console.log(`\nTask 11. Creating and using classes\n`);
/*const ref = new ReferenceItem(`Quantum mechanics`, 2015);
ref.publisher = 'harry';
ref.printItem();
console.log(`Publisher: ${ref.publisher}`);*/
// ************************************************

// Task 12. Extending classes
// ************************************************
/* tslint:disable:max-classes-per-file*/

const refBook = new Encyclopedia(`Biology`, 1999, 2);
refBook.printItem();
/* tslint:enable:max-classes-per-file */
// ************************************************

// Task 13. Creating abstract classes
// ************************************************
/* tslint:disable:max-classes-per-file*/

/* tslint:enable:max-classes-per-file */
// ************************************************

// Task 9. Extending interface
// ************************************************

const favoriteAuthor: IAuthor = {
    email: 'author@google.com',
    name: 'author name',
    numBooksPublished: 12,
};

/*const favoriteLibrarian: ILibrarian = {
    assistCustomer: (custName: string) => {
        console.log(`Can i help you ${custName}?`);
    },
    department: 'Science',
    email: 'author@google.com',
    name: 'author name',
};*/
// ************************************************

// Task 10. Intertfaces for class types
// ************************************************
/*class UniversityLibrarian implements ILibrarian {
    public department: string;
    public name: string;
    public email: string;
    public assistCustomer(custName: string) {
        console.log(`${this.name} is assisting ${custName}`);
    }
}*/

console.log('\nTask 10. Intertfaces for class types\n');
/*const favoriteLibrarian: ILibrarian = new UniversityLibrarian();

favoriteLibrarian.name = 'Super Librarian';
favoriteLibrarian.assistCustomer('Grizli');*/

// ************************************************

// Task 8. Defining interface for Function types
// ************************************************

// ************************************************

// task 7. Defining an interface
// ************************************************
const printDamageReason: Logger = (reason) => {
    console.log(`Damaged ${reason}`);
};

const myBook: IBook = {
    author: 'Eric A. Meyer',
    available: true,
    category: Category.CSS,
    id: 5,
    markDamaged: printDamageReason,
    pages: 200,
    title: 'Colors, Backgrounds and Gradients',
};

function printBook(book: IBook): void {
    console.log(`${book.title} by ${book.author}`);
}

console.log('\nTask 7. Defining an interface');
console.log('Book from myBook variable:');
printBook(myBook);
myBook.markDamaged(`Missing back cover`);
console.log('\n\n');
// ************************************************

function getAllBooks(): IBook[] {
    const books: IBook[] = [
        {
            author: 'Evan Burchard',
            available: true,
            category: Category.JavaScript,
            id: 1,
            markDamaged: printDamageReason,
            title: 'Refactoring JavaScript',
        },
        {
            author: 'Liang Yuxian Eugene',
            available: false,
            category: Category.JavaScript,
            id: 2,
            markDamaged: printDamageReason,
            title: 'JavaScript Testing',
        },
        {
            author: 'Lea Verou',
            available: true,
            category: Category.CSS,
            id: 3,
            markDamaged: printDamageReason,
            title: 'CSS Secrets',
        },
        {
            author: 'Andrea Chialerri',
            available: true,
            category: Category.JavaScript,
            id: 4,
            markDamaged: printDamageReason,
            title: 'Mastering JavaScript Object-Oriented Programming',
        },
    ];
    return books;
}

function logFirstAvailable(books = getAllBooks()): void {
    const amountOfBooks: number = books.length;
    let firsrtAvailable: string = '';

    for (const book of books) {
        if (book.available) {
            firsrtAvailable = book.title;
            break;
        }
    }

    console.log(`Amount of books: ${amountOfBooks}`);
    console.log(`First available book: ${firsrtAvailable}`);
}

function getBookTitlesByCategory(category = Category.JavaScript): string[] {
    return getAllBooks()
        .filter((book) => book.category === category)
        .map((book) => book.title);
}

function logBookTitles(titles: string[]): void {
    console.log(`All book titles: ${titles}`);
}

function getBookById(id: number): IBook | undefined {
    return getAllBooks().find((book) => book.id === id);
}

function createCustomerId(name: string, id: number): string {
    return `${name} ${id}`;
}

const myId: string = createCustomerId('Ann', 10);
let idGenerator: (a: string, b: number) => string = (
    name: string,
    id: number,
) => `${name} ${id}`;

idGenerator = createCustomerId;

logFirstAvailable(getAllBooks());

console.log(`\nBooks in JavasCript category (forEach)`);
getBookTitlesByCategory(Category.JavaScript).forEach((title) =>
    console.log(title),
);
console.log(`\n`);
console.log(
    `Books in JavasCript category (array to string): ${getBookTitlesByCategory(
        Category.JavaScript,
    )}`,
);

console.log(`Book with id 2: ${getBookById(2).title}`);
console.log(`\nCustomer id from name Ann and id 10: ${myId}\n\n`);
console.log(`\ncreateCustomerId function assigned to idGenerator variable`);
console.log(
    `Customer id from name Ann and id 10 (idGenerator call): ${idGenerator(
        'Ann',
        10,
    )}\n\n`,
);

logBookTitles(getAllBooks().map((book) => book.title));

// task 5. Optional, default and rest parameters.
// ************************************************
console.log(`\nTASK-5`);
console.log(
    `\ncreateCustomer function calls with and without optional parameters`,
);

function createCustomer(name: string, age?: number, city?: string) {
    console.log(`${name} ${age || ''} ${city || ''}`);
}

createCustomer('Max');
createCustomer('Max', 34);
createCustomer('Max', 34, 'London');

console.log(`\nBooks in JavasCript category (default parameter)`);
console.log(getBookTitlesByCategory().join());
console.log('First available book (default parameter):');
logFirstAvailable();

function checkoutBooks(customer: string, ...bookIDs: number[]): string[] {
    const availableTitles: string[] = [];
    let foundBook: any;

    console.log(`\nCustomer name: ${customer}`);

    bookIDs.forEach((id) => {
        foundBook = getBookById(id);
        if (foundBook.available) {
            availableTitles.push(foundBook.title);
        }
    });

    return availableTitles;
}

console.log('\nCall checkoutBooks("Ann", 1, 2, 4) (uses rest parameter):');
const myBooks = checkoutBooks('Ann', 1, 2, 4);
myBooks.forEach((title) => console.log(title));
// ************************************************

// task 6. Function overloading
// ************************************************

/* tslint:disable:unified-signatures */
function getTitles(author: string): string[];
function getTitles(availability: boolean): string[];
function getTitles(bookProperty: any): string[] {
    let filteredBooks: any[] = [];

    switch (typeof bookProperty) {
    case 'string':
        filteredBooks = getAllBooks().filter(
            (book) => book.author === bookProperty,
            );
        break;
    case 'boolean':
        filteredBooks = getAllBooks().filter(
            (book) => book.available === bookProperty,
            );
        break;
    default:
        break;
    }

    return filteredBooks.map((book) => book.title);
}
/* tslint:enable:unified-signatures */

const checkedOutBooks = getTitles(false);

console.log('\nTask 6');
console.log('Titles of unavailable books:');
checkedOutBooks.forEach((title, index) => console.log(`title 1: ${title}`));
console.log('\n');

// ************************************************

document.getElementById('typescript-app').innerText = JSON.stringify(
    getAllBooks(),
);
