export default class Shelf<T> {
    private items: T[];

    public add(item: T): void {
        this.items.push(item);
    }

    public getFirst(): T {
        return this.items[0];
    }
}
