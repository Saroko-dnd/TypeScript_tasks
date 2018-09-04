interface IShelfItem {
    title: string;
}

export default class Shelf<T extends IShelfItem> {
    private items: T[] = [];

    public add(item: T): void {
        this.items.push(item);
    }

    public getFirst(): T {
        return this.items[0];
    }

    public find(title: string): T {
        return this.items.find((item) => item.title === title);
    }

    public printTitles(): void {
        this.items.forEach((item) => console.log(item.title));
    }
}
