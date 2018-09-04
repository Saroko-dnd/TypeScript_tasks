import { Category } from './_enums';

interface IPerson {
    name: string;
    email: string;
}

interface IAuthor extends IPerson {
    numBooksPublished: number;
}

interface ILibrarian extends IPerson {
    department: string;
    assistCustomer: (custName: string) => void;
}

type DamageLogger = (a: string) => void;

interface IBook {
    id: number;
    author: string;
    available: boolean;
    title: string;
    category: Category;
    pages?: number;
    markDamaged?: DamageLogger;
}

export { IPerson, IAuthor, ILibrarian, IBook, DamageLogger as Logger };
