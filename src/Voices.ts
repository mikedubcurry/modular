export class KindaQueue<T> {
  private head: Node<T> | null;
  private tail: Node<T> | null;
  protected size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  public length(): number {
    return this.size;
  }

  public isEmpty(): boolean {
    return this.size <= 0;
  }

  public contains(value: T): boolean {
    if (this.isEmpty()) return false;
    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  public cut(value: T) {
    if (this.isEmpty()) return;
    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.value === value) {
        if (currentNode.prev !== null) {
          currentNode.prev.next = currentNode.next;
        } else {
          this.head = currentNode.next;
        }

        if (currentNode.next !== null) {
          currentNode.next.prev = currentNode.prev;
        } else {
          this.tail = currentNode.prev;
        }
        this.size -= 1;
        return;
      }
      currentNode = currentNode.next;
    }
  }

  public insert(value: T) {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
      this.size += 1;
    } else {
      node.next = this.head;
      node.prev = null;

      this.head!.prev = node;
      this.head = node;
      this.size += 1;
    }
  }

  // this method will likely never be used
  public remove(): T | null {
    if (this.isEmpty()) {
      return null;
    }
    if (this.size === 1) {
      let value = this.head!.value;
      this.head = null;
      this.tail = null;
      this.size -= 1;
      return value;
    } else {
      let value = this.tail!.value;
      this.tail = this.tail!.prev;
      this.tail!.next = null;
      this.size -= 1;
      return value;
    }
  }

  public toArray(): T[] {
    if (this.isEmpty()) {
      return [];
    } else {
      const items = [];
      let currentNode = this.head;
      while (currentNode !== null) {
        items.push(currentNode.value);
        currentNode = currentNode.next;
      }

      return items;
    }
  }
}

class Node<T> {
  public value: T;
  public next: Node<T> | null;
  public prev: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export class Voices<T> extends KindaQueue<T> {
  public max_voices: number;
  constructor(max_voices: number) {
    super();
    this.max_voices = max_voices;
  }

  public insert(value: T): void {
    if (this.size >= this.max_voices) {
      this.remove();
    }
    super.insert(value);
  }

  public setMaxVoices(newMax: number) {
    this.max_voices = newMax;
  }
}
