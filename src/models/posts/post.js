export default class Post {
    constructor(id, user_id, type, description, user, audio, vidoe, status, likes, comment, fullname, created_at, updated_at) {
        this.id = id;
        this.user_id = user_id;
        this.type = type;
        this.description = description;
        this.user = user;
        this.audio = audio;
        this.vidoe = vidoe;
        this.status = status;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.more = false;
        this.likes = likes;
        this.comment = comment;
        this.fullname = fullname;
    }

   fromJson(json) {
        return {
            id: json['id'] ? json['id'] : null,
            user_id: json['user_id'] ? json['user_id'] : null,
            type: json['type'] ? json['type'] : null,
            description: json['description'] ? json['description'] : null,
            user: json['user'] ? json['user'] : null,
            audio: json['audio'] ? json['audio'] : null,
            vidoe: json['vidoe'] ? json['vidoe'] : null,
            status: json['status'],
            likes: json['likes'] ? json['likes'] : null,
            comment: json['comment'] ? json['comment'] : null,
            created_at: json['created_at'] ? json['created_at'] : null,
            updated_at: json['updated_at'] ? json['updated_at'] : null,
            more: false,
            fullname: json['fullname'] ? json['fullname'] : ''
        }
    } 
}
