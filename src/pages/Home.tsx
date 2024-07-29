import { Fragment } from "react/jsx-runtime";
import CreatePost from "../components/CreatePost";
import WallPost from "../components/WallPost";
import SignInModal from "../components/modals/SignInModal";
import { useState } from "react";
const postDataArray: Record<string, any>[] = [
  {
    id: 1,
    userImg: `https://s3-alpha-sig.figma.com/img/d876/9b85/25c869bf7a20b010741bad2949259c0d?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EiRXx4Ju9ZQwFjJdKtOjRo8AVuwW6jiWiJ3IClZd13EytwH3l8JDb7RchtL8v-uyTIOZ8mgQH9x7-dJqh2sTQyqKNYYqk5bEBt-DfEt8tAXySVRjBL~CEvZUWqP9Dru15aWqGPRDFfwmslz1k--KzwsoRyRozpl3J3kFdpsC9-hGliT~43C27HH1q4iEJ1tJMBLlGUHlvU7jwsJhaxXriFK5B6JUSSBqLGkIoQKldxmmwxaBdWeDXdnXfJJkMCB044fMuDRjbAkJXuITiUAQZy3RaBR6XJdzXJ-MLS5gcs7HyaC5wGEYmv2GLNppBedPyQm-aaPrKkjs6sCk97vUGQ__`,
    username: "Theresa Webb",
    isEdited: true,

    emote: "hand",
    commentCount: 24,
    createdAt: 1722209771028,
    updatedAt: 1722229771028,
    content: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`,
  },
  {
    id: 2,
    userImg: `https://s3-alpha-sig.figma.com/img/a50a/a686/c235d3ee2b054cb561d4d7772e564df4?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BNguPMGNQiQQXd~BJbZcv~kta5tPpQjIJ5mXFxZTFJ9kkcA7CrMjc9b07RflbdPL3Gsub3S7tpPK90D3u~uiPtGhkZ1munNRCK115rxLbpQN~XgICTGHZAP06BF6dOgNXdeORLIZD6bC-PgPIeXlKjUYme1pYp3PcuaDeS5jAwfQVYmmdgMXMOv~KWiAbqjhgjGvtJg-kGCQ1vsHweahv3Y~ewydLQMhcoJjV3zaBPADee-1Rfg79~7PN9ftS-okElKnTkieRaVUq9Cc0vNNjQhRSVcq-WIX4ZQNY2qt8Y8dgU6W8m2f5W1Et5tXF1nw25JU43uFNIpzHf1iPg-PNw__`,
    username: "Marvin McKinney",
    isEdited: false,
    emote: "sad",
    commentCount: 1,
    createdAt: 1722209771028,
    updatedAt: 1722209771028,
    content: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`,
  },
];
const Home = () => {
  const [isSigninOpen, setSigninOpen] = useState<boolean>(false);
  const toggleSignin = () => {
    setSigninOpen((val) => !val);
  };
  return (
    <Fragment>
      {" "}
      <div className="home-wrapper w-[100%] h-[100vh]">
        <SignInModal open={isSigninOpen} closeModal={toggleSignin} />
        <div className=" home-container  w-[max(48.6%,700px)] m-[70px] mx-auto pb-4 ">
          <div className="mb-10">
            <p className="home-header-name text-[#C5C7CA] font-semibold text-[28px]">
              Hello {localStorage.getItem("username") || "Jane"}
            </p>
            <p className="w-[75%] text-[#7F8084]">
              {" "}
              How are you doing today? Would you like to share something with
              the community 🤗
            </p>
          </div>

          <CreatePost onPostClick={toggleSignin} />
          {postDataArray.map((obj) => (
            <WallPost key={obj.id} postData={obj} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
