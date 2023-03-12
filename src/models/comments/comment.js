export default class Comment {
    constructor(id, post_id, user_id, content, user, created_at, updated_at) {
        this.id = id;
        this.postId = post_id;
        this.user_id = user_id;
        this.content = content;
        this.user = user;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
    
    fromJson(json) {
        return {
            id: json['id'],
            post_id: json['post_id'] ? json['post_id'] : null,
            user_id: json['user_id'] ? json['user_id'] : null,
            content: json['content'] ? json['content'] : '',
            user: json['user'] ? json['user'] : null,
            created_at: json['created_at'],
            updated_at: json['updated_at']
        }
    }
}
