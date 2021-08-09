const queue = [];
 
module.exports= class Queue{
 
    constructor(name){
        this.name = name;
    }

    async savePatient(){
        queue.push(this);
        console.log(queue)
    }

    async delPatient(){
        queue.shift(this)
        console.log(queue)
    }

    static getAllQueue(){
        return queue;
    }
}