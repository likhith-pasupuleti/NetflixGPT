export const BACKGROUND_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/80a8277e-14eb-4192-83f7-45c27cd0652b/US-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_99b9a7c9-7791-4a48-b335-09e8ee246500_large.jpg";
export const LOGO_URL =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const USER_PROFILE_URL =
  "https://avatars.githubusercontent.com/u/143747986?v=4";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};
export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";
export const SUPPORTED_LANGUAGES = [
  {
    identifier: "en",
    name: "English",
  },
  { identifier: "telugu", name: "Telugu" },
  {
    identifier: "hindi",
    name: "Hindi",
  },
  { identifier: "spanish", name: "Spanish" },
];
export const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_KEY;
