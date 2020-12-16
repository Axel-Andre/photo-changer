import { Result } from "../models/result";

chrome.runtime.onMessage.addListener(async (msg, sender, response) => {
  const result: Result = {
    message: "Hello"
  };
  if (msg.from === "popup" && msg.subject === "getFullName")
    response(result.message);
  if (msg.from === "popup" && msg.subject === "getPicture") {
    const image = document.querySelector('.pv-top-card__photo').getAttribute('src');
    response(image);
  } 
  if (msg.from === "popup" && msg.subject === "setPhoto" && msg.url) {
    document.querySelector('.pv-top-card__photo').setAttribute('src', msg.url);
    response(200);
  } 

  return true;
});
