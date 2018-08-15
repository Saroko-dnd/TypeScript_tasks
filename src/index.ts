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
            title: "Refactoring JavaScript",
        },
        {
            author: "Liang Yuxian Eugene",
            available: false,
            title: "JavaScript Testing",
        },
        {
            author: "Lea Verou",
            available: true,
            title: "CSS Secrets",
        },
        {
            author: "Andrea Chialerri",
            available: true,
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

logFirstAvailable(getAllBooks());

document.getElementById("typescript-app").innerText = JSON.stringify(
    getAllBooks(),
);
