
class Queue{
	// Your code below!
	constructor(){
        this.arr = []
        this.size = 0
	
	}
    enqueue(val){
        this.arr.push(val)
        this.size ++
    }
    dequeue(){
        let first = this.arr.shift()
        this.size --
        return first
    }
}

module.exports = Queue