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
}

/* tslint:enable:no-namespace*/
