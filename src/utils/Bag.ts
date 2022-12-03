export class Bag<T> {
  public count: number;
  public items: {[key: string]: T};

  constructor() {
    this.count = 0;
    this.items = {}
  }

  add(key: string, item: T) {
    if(!this.items[key]) {
      this.count += 1;
    }
    this.items[key ] = item;
  }

  remove(key: string): T | null {
    if(this.items[key]) {
      this.count -= 1;
    }
    let item = this.items[key];
    delete this.items[key];
    return item;
  }

  all(): T[] {
    return Object.values(this.items)
  }

  get(key: string): T | null {
    return this.items[key] ?? null
  }
}
