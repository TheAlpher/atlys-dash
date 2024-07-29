import EmoteContainer from "../EmoteConatiner";
interface CreatePostProps {
  onPostClick: () => void;
}
const CreatePost = ({ onPostClick }: CreatePostProps) => {
  return (
    <div className="post-card p-8 my-2">
      <p>Create post</p>
      <div className="textarea-container flex">
        <EmoteContainer svgData={"chat"} />
        <input placeholder="How are you feeling today?" className="flex-1" />
      </div>
      <div className="post-actions flex justify-end">
        <button onClick={onPostClick}>Post</button>
      </div>
    </div>
  );
};

export default CreatePost;
