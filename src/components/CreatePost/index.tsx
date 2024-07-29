import EmoteContainer from "../EmoteConatiner";
interface CreatePostProps {
  onPostClick: () => void;
}
const CreatePost = ({ onPostClick }: CreatePostProps) => {
  return (
    <div className="post-card p-6 my-4">
      <p className="text-[#C5C7CA] text-[18px] font-semibold">Create post</p>
      <div className="textarea-container flex mt-4 p-4 bg-[#191920] rounded-[8px]">
        <EmoteContainer svgData={"chat"} />
        <input
          placeholder="How are you feeling today?"
          className="flex-1 bg-transparent ms-4 "
        />
      </div>
      <div className="post-actions flex justify-end">
        <button
          onClick={onPostClick}
          className="action-btn text-[16px] rounded-[4px] mt-4 mb-0 font-semibold p-[38px] py-3"
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
