function sealed(param: string) {
    console.log(`Sealing the constructor ${param}`);
    // tslint:disable-next-line:ban-types
    return (target: Function) => {
        Object.seal(target);
        Object.seal(target.prototype);
    };
}

export { sealed };
