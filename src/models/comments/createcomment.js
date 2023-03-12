export default class CreateComment {
    constructor(content) {
        this.content = content;
    }

    toJson(comment) {
        return {
           content: comment.content
     };
   } 
}