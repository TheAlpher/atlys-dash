import { SVG_DATA } from "../../utils/constants";
import { dateDiffString } from "../../utils/helpers";
import EmoteContainer from "../EmoteConatiner";
import SVG from "react-inlinesvg";
interface WallPostProps {
  postData: Record<string, any>;
}

const WallPost = ({ postData }: WallPostProps) => {
  return (
    <div className="post-card p-8 my-2">
      <div className="post-header flex">
        <img
          className="h-[44px] w-[44px] rounded-full"
          src={postData.userImg}
          alt={postData.username}
        />
        <div className="ms-3">
          <p>{postData.username}</p>
          <div>
            <span>{dateDiffString(postData.updatedAt)} ago</span>
            {postData.isEdited ? <span className="ms-3">Edited</span> : <></>}
          </div>
        </div>
      </div>

      <div className="post-content rounded-[8px] flex bg-[#191920] p-4">
        <EmoteContainer svgData={postData.emote} />{" "}
        <p className="ms-4 flex-1 text-[#7F8084]">{postData.content}</p>
      </div>
      <div className="post-footer flex">
        <button className="flex items-center">
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
