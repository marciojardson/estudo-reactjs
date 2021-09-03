const Post = (props) => {
  const { post, removeAction } = props;

  return (
    <div>
      <h5>{post.titulo}</h5>
      <p>{post.corpo}</p>
      <button onClick={removeAction}>Remover</button>
      <hr />
    </div>
  );
};

export default Post;
