function sealed(param: string) {
    console.log(`Sealing the constructor ${param}`);
    // tslint:disable-next-line:ban-types
    return (target: Function) => {
        Object.seal(target);
        Object.seal(target.prototype);
    };
}

// tslint:disable-next-line:ban-types
function logger<TFunction extends Function>(target: TFunction): TFunction {
    /* tslint:disable:ban-types */
    // tslint:disable-next-line:only-arrow-functions
    const newConstructor: Function = function(title: string) {
        this.title = title;
        console.log(`Creating new instance ${target}`);
    };
    /* tslint:enable:ban-types */

    newConstructor.prototype = Object.create(target.prototype);
    newConstructor.prototype.constructor = target;

    return newConstructor as TFunction;
}

export { sealed, logger };
