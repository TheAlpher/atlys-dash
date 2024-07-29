import { SVG_DATA } from "../../utils/constants";
import { dateDiffString } from "../../utils/helpers";
import EmoteContainer from "../EmoteConatiner";
import SVG from "react-inlinesvg";
interface WallPostProps {
  postData: Record<string, any>;
}

const WallPost = ({ postData }: WallPostProps) => {
  return (
    <div className="post-card p-8 my-4">
      <div className="post-header justify-between items-center flex mb-5">
        <div className="flex">
          <img
            className="h-[44px] w-[44px] rounded-full"
            src={postData.userImg}
            alt={postData.username}
          />
          <div className="ms-3">
            <p className="text-[#C5C7CA] font-semibold">{postData.username}</p>
            <div className="text-[#7F8084] text-[14px]">
              <span>{dateDiffString(postData.updatedAt)} ago</span>
              {postData.isEdited ? <span> • Edited</span> : <></>}
            </div>
          </div>
        </div>
        <SVG className="text-[#C5C7CA] cursor-pointer" src={SVG_DATA.dots} />
      </div>

      <div className="post-content rounded-[8px] flex bg-[#191920] p-4">
        <EmoteContainer svgData={postData.emote} />{" "}
        <p className="ms-4 flex-1 text-[#7F8084]">{postData.content}</p>
      </div>
      <div className="post-footer flex mt-3">
        <button className="flex items-center text-[#7F8084]">
          {" "}
          <SVG src={SVG_DATA.comment} className="me-2" />{" "}
          {postData.commentCount}{" "}
          {"comment" + (postData.commentCount > 1 ? "s" : "")}
        </button>
      </div>
    </div>
  );
};

export default WallPost;
