class Queue {
    constructor() {
        this.items = []
    }

    enqueue(element) {
        this.items.push(element)
    }

    dequque() {
        return this.items.shift()
    }

    isEmpty() {
        return this.items.length === 0
    }

    peek() {
        if (!this.isEmpty()) {
            return this.items[0]
        }
        return null
    }

    size() {
        return this.items.length
    }

    print() {
        console.log(this.items.toString())
    }

}

const queue = new Queue()
console.log(queue.isEmpty());
queue.enqueue("test")
queue.enqueue("dev")
queue.enqueue("devops")
queue.print()

queue.dequque()
queue.print()
console.log(queue.peek())
console.log(queue.size())
