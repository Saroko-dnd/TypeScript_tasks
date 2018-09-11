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
    // tslint:disable-next-line:ban-types
    const newConstructor: Function = () => {
        console.log(`Creating new instance ${target}`);
    };

    newConstructor.prototype = Object.create(target.prototype);
    newConstructor.prototype.constructor = target;

    return newConstructor as TFunction;
}

export { sealed, logger };
