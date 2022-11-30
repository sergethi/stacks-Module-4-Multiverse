// stack using an array

// class Stack{
// 	// Your code below!
// 	constructor(arr, size){
//         this.arr = []
//         this.size = 0
	
// 	}
//     push(val){
//         this.arr.push(val)
//         this.size ++

//     }
//     pop(){
//         let popped = this.arr.pop()
//         this.size --
//         return popped
//     }
// }

// stack using an linkedlist
// Considering the begining of the list as the top
class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
class Stack{
	// Your code below!
	constructor(){
        this.head = null
        this.size = 0
	
	}
    push(val){
        let newNode = new Node(val)
        if (this.head === null){
            this.head = newNode
            this.size ++
        }
        else{
            newNode.next =  this.head
            this.head = newNode
            this.size ++
        }
    }
    pop(){
        if (this.head === null){
            return null
        }
        let popped = this.head.value
        let newHead = this.head.next
        this.head = newHead
        this.size --
        return popped
    }
}

module.exports = Stack