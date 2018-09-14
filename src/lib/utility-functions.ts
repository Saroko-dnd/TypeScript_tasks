import { Category } from '../_enums';
import { IBook, Logger } from '../_interfaces';

function purge<T>(inventory: T[]): T[] {
    return inventory.slice(2);
}

const printDamageReason: Logger = (reason) => {
    console.log(`Damaged ${reason}`);
};

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

// tslint:disable-next-line:max-line-length
function getBookTitlesByCategory(category = Category.JavaScript): string[] {
    return getAllBooks()
        .filter((book) => book.category === category)
        .map((book) => book.title);
}

type LibMgrCallback = (err: Error, titles: string[]) => void;

function getBooksByCategory(
    category: Category,
    callback: LibMgrCallback,
    // tslint:disable-next-line:no-empty
): void {
    /*setTimeout(() => {
        try {

        } catch {

        }
    }, 2000);*/
}

export { purge,
    printDamageReason,
    getAllBooks,
    getBookTitlesByCategory,
    LibMgrCallback,
    getBooksByCategory };
