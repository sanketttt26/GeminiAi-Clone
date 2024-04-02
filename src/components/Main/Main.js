import React from "react";
import { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>AssistAI</p>
        <img src={assets.user_icon} width={40} />
      </div>

      <div className="main-container">
        {!showResult ? (
          <>
            {" "}
            <div className="greet">
              <p>
                <span>Hello,Dev.</span>
              </p>
              <p>How can I assist you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.compass_icon} />
              </div>

              <div className="card">
                <p>Briefly summarize this concept:urban planning</p>
                <img src={assets.bulb_icon} />
              </div>

              <div className="card">
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={assets.message_icon} />
              </div>

              <div className="card">
                <p>Improve the readability of following code</p>
                <img src={assets.code_icon} />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img className="main-logo" src={assets.gemini_icon} />
              {loading ? (
                <div className="loader"></div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-container">
            <div className="search-box">
              <input
                onChange={(e) => setInput(e.target.value)}
                value={input}
                type="text"
                placeholder="Enter a prompt here"
              />
              <div className="img-div">
                <img className="my_img" src={assets.gallery_icon} />
                <img src={assets.mic_icon} />
                {input ? (
                  <img onClick={() => onSent()} src={assets.send_icon} />
                ) : null}
              </div>
            </div>
          </div>
          <p className="bottom-info">
            AssistAI can make mistakes. Consider checking important information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
