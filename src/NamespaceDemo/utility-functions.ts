/* tslint:disable:no-namespace*/
namespace Utility {
    export namespace Fees {
        export function calculateLateFee(daysLate: number): number {
            return daysLate * 0.25;
        }
    }
}

/* tslint:enable:no-namespace*/
