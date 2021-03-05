
class Node {
  constructor(data, next = null){
    this.data = data;
    this.next = next;
  };
};

class LinkedList {
  constructor(){
    this.head = null
  }
  insertFirst(data){
    this.head = new Node(data, this.head) 
  }
  size(){
    let counter = 0;
    let node = this.head;
    while(node){
      counter++;
      node = node.next;
    }
    return counter;
  }
  getFirst(){
    return this.head
  }
  getLast(){
    if(!this.head){
      return null
    }
    let node = this.head;
    while(node){
      if(node.next === null){
        return node
      }
      node = node.next;
    }
  }
  clear(){
    this.head = null
  }

  removeFirst(){
    if(!this.head){
      return; 
    }
    this.head = this.head.next
  }
  removeLast(){
    if(!this.head){
      return;
    }
    if(!this.head.next){
      this.head = null
      return;
    }
    let previous = this.head;
    let node = this.head.next;
    while(node.next){
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }
  insertLast(data){
    const last = this.getLast();
  
    if(last){
      last.next = new Node(data)
    } else {
      this.head = new Node(data)
   }
  }
  getAt(index){
   
    let counter = 0;
    let node = this.head;
    while(node){
      if(counter === index){
        return node;
      } else {
        counter ++;
        node = node.next;
      }
    }
    return null;
  }
  removeAt(index){
    if(!this.head){
      return;
    }
    if(index === 0){
      this.head = this.head.next;
      return;
    }
    const previous = this.getAt(index - 1);
    if(!previous || !previous.next){
      return;
    }
    previous.next = previous.next.next;
  }
  insertAt(data, index){
    if(!this.head){
      this.head = new Node(data);
      return;
    }
    if(index === 0){
      this.head = new Node(data, this.head); 
      return;
    }
    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }
};
function midpoint(list) {
  let slow = list.getFirst();
  let fast = list.getFirst();

  while(fast.next && fast.next.next){
    slow = slow.next;
    fast = fast.next.next;
  };
  return slow;
  
};
function circular(list) {
  let slow = list.getFirst();
  let fast = list.getFirst();
  while(fast.next && fast.next.next){
    slow = slow.next;
    fast = fast.next.next;
    if(slow === fast){
      return true;
    }
  }
  return false;
};
