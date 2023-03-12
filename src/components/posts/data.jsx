/* import images */
  import avatar from '../../assets/images/header/avatar.jpg';
  import postImage from '../../assets/images/post/samplepost.png'
  
  
  export const postdata = [
    {
        id:1,
        name:"Polina Guseva",
        date:"10:00 AM, Tuesday",
        avatar:avatar,
        public:true,
        message:" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        likes:3,
        comments:{
            id:1,
            name:"Polina Guseva",
            body:"Lorem Ipsum is simply dummy text of the printing"
        },
        postImage:postImage

    },
    {
      id:2,
      name:"Polina Guseva",
      date:"10:00 AM, Tuesday",
      avatar:avatar,
      public:false,
      message:" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      likes:3,
      comments:{
          id:1,
          name:"Polina Guseva",
          body:"Lorem Ipsum is simply dummy text of the printing"
      },
      postImage:postImage

  },
  {
    id:3,
    name:"Polina Guseva",
    date:"10:00 AM, Tuesday",
    avatar:avatar,
    public:false,
    message:" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    likes:4,
    comments:{
        id:1,
        name:"Polina Guseva",
        body:"Lorem Ipsum is simply dummy text of the printing"
    },
    
    postImage:postImage

},
    ]
  
