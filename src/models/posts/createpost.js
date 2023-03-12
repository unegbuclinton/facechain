export default class CreatePost {
    constructor(description, audio, video, type, commenting) {
        this.description = description;
        this.audio = audio;
        this.video = video;
        this.type = 'normal';
        this.commenting = true;
    }

    toJson(post) {
        return {
            description: post.description,
            content :{
                audio: post.audio ? post.audio : null,
                video: post.video ? post.video : null,
            },
            type: 'normal',
            commenting:true
         };
   } 
}