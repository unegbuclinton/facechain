export default class Like {
    constructor(id, user_id, status,  postId, created_at, updated_at) {
        this.id = id;
        this.postId = postId;
        this.user_id = user_id;
        this.status = status;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
    
    fromJson(json) {
        return {
            id: json['id'],
            postId: json['postId'],
            user_id: json['user_id'],
            status: json['status'],
            created_at: json['created_at'],
            updated_at: json['updated_at']
        }
    }
}
