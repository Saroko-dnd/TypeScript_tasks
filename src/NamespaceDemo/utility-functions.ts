import { Category } from '../_enums';

/* tslint:disable:no-namespace*/
namespace Utility {
    export function maxBooksAllowed(age: number): number {
        return age < 12 ? 3 : 10;
    }

    export namespace Fees {
        export function calculateLateFee(daysLate: number): number {
            return daysLate * 0.25;
        }
    }

    export type LibMgrCallback = (err: Error, titles: string[]) => void;

    export function getBooksByCategory(
        category: Category,
        callback: LibMgrCallback,
        // tslint:disable-next-line:no-empty
    ): void {}

    function privateFunc(): void {
        console.log(`This is private`);
    }
}

/* tslint:enable:no-namespace*/
