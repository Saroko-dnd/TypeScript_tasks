enum Category {
    JavaScript,
    CSS,
    HTML,
    TypeScript,
    Angular2,
}

function getAllBooks(): any[] {
    const books: any[] = [
        {
            author: "Evan Burchard",
            available: true,
            category: Category.JavaScript,
            id: 0,
            title: "Refactoring JavaScript",
        },
        {
            author: "Liang Yuxian Eugene",
            available: false,
            category: Category.JavaScript,
            id: 1,
            title: "JavaScript Testing",
        },
        {
            author: "Lea Verou",
            available: true,
            category: Category.CSS,
            id: 2,
            title: "CSS Secrets",
        },
        {
            author: "Andrea Chialerri",
            available: true,
            category: Category.JavaScript,
            id: 3,
            title: "Mastering JavaScript Object-Oriented Programming",
        },
    ];
    return books;
}

function logFirstAvailable(books: any[]): void {
    const amountOfBooks: number = books.length;
    let firsrtAvailable: string = "";

    for (const book of books) {
        if (book.available) {
            firsrtAvailable = book.title;
            break;
        }
    }

    /* tslint:disable:no-console */
    console.log(`Amount of books: ${amountOfBooks}`);
    console.log(`First available book: ${firsrtAvailable}`);
    /* tslint:enable:no-console */
}

function getBookTitlesByCategory(category: Category): string[] {
    return getAllBooks()
        .filter((book) => book.category === category)
        .map((book) => book.title);
}

function logBookTitles(titles: string[]): void {
    /* tslint:disable:no-console */
    console.log(`All book titles: ${titles}`);
    /* tslint:enable:no-console */
}

function getBookById(id: number): any {
    return getAllBooks().find((book) => book.id === id);
}

logFirstAvailable(getAllBooks());
/* tslint:disable:no-console */
// tslint:disable-next-line:max-line-length
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
/* tslint:enable:no-console */

logBookTitles(getAllBooks().map((book) => book.title));

document.getElementById("typescript-app").innerText = JSON.stringify(
    getAllBooks(),
);
