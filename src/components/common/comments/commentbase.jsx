import CommentCard from "./commentcard";
import CommentFormPost from "./commentformpost";
import CommentFormPrediction from "./commentformprediction";

const CommentBase = ({post, type}) => {
    return (
        <div className="py-16">
            {type === 'post' && 
                <>
                    {post?.comment &&  <CommentCard comment={post.comment} />}
                    <CommentFormPost post={post}/>
                </>
            }
            {type === 'prediction' && 
                <>
                    {post?.signalComments &&  <CommentCard comment={post.signalComments} />}
                    <CommentFormPrediction post={post} />
                </>
            }
        </div>
     );
}
 
export default CommentBase;