class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(val) {
    let newNode = new Node(val);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size += 1;
    return newNode;
  }

  prepend(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size += 1;
    return newNode;
  }

  find(val) {
    if (!this.head) return false;
    let cur = this.head;
    while (cur.val !== val && cur.next) {
      cur = cur.next;
    }
    return cur.val === val ? true : false;
  }

  remove(val) {
    if (!this.head) return null; // if the linkedlist is empty
    if (!this.find(val)) return null; // if the value does not exist
    if (this.size === 1) {
      // if we only have one node
      this.head = null;
      this.tail = null;
      this.size -= 1;
      return this;
    }

    if (val === this.head.val) {
      // if we are deleting the head
      this.head = this.head.next;
    } else {
      let cur = this.head;
      while (cur.next.val !== val) {
        cur = cur.next;
      }
      cur.next = cur.next.next;
      if (cur.next == null) {
        // if we are deleting the tail
        this.tail = cur;
      }
    }
    this.size -= 1;
    return this;
  }

  reverse() {
    if (!this.head) return null;
    if (this.size === 1) return this;
    // switch head and tail reference
    let cur = this.head;
    this.head = this.tail;
    this.tail = cur;

    let prev = null;
    let next = null;
    while (cur) {
      next = cur.next;
      cur.next = prev;
      prev = cur;
      cur = next;
    }
    return this;
  }
}

let myList = new LinkedList();
myList.append(1);
myList.append(2);
myList.append(3);

//myList.remove(2);
// myList.remove(3);
// myList.remove(1);

myList.reverse();
console.log(myList);
