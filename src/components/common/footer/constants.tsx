// Components
import {
  RiTwitterXFill as Twitter,
  RiFacebookFill as Facebook,
  RiGithubFill as Github,
  RiLinkedinFill as Linked,
} from "@remixicon/react";

export const FIND_ME_KEY = {
  X: "x",
  FB: "facebook",
  GIT: "github",
  LINKEDIN: "linkedin",
} as const;

export const FIND_ME = {
  [FIND_ME_KEY.X]: {
    key: FIND_ME_KEY.X,
    link: "https://twitter.com/insideee_dev013",
    icon: <Twitter size={24} />,
  },
  [FIND_ME_KEY.FB]: {
    key: FIND_ME_KEY.FB,
    link: "https://www.facebook.com/tony.cuong.39142/",
    icon: <Facebook size={24} />,
  },
  [FIND_ME_KEY.LINKEDIN]: {
    key: FIND_ME_KEY.LINKEDIN,
    link: "https://www.linkedin.com/in/cuong-cao-ngoc-792992229/",
    icon: <Linked size={24} />,
  },
  [FIND_ME_KEY.GIT]: {
    key: FIND_ME_KEY.GIT,
    link: "https://github.com/CaoNgocCuong",
    alias: "@CaoNgocCuong",
    icon: <Github size={24} />,
  },
};
