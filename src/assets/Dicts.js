import { major, readDoc } from "./Resources";

export const subjectDicts = {
  SMART_CAR: {
    img: major.Car,
    name: "스마트 자동차",
  },
  ENERGY_SCIENCE: {
    img: major.Energy,
    name: "에너지 공학",
  },
  SECURITY: {
    img: major.Security,
    name: "정보보안",
  },
  BIGDATA: {
    img: major.BigData,
    name: "빅데이터",
  },
  ICT: {
    img: major.Ict,
    name: "ICT 유통물류",
  },
  KOREA: {
    img: major.Unification,
    name: "통일 외교 및 개발 협력",
  },
  NONE: {
    name: "말머리 선택 안 함",
  },
};

export const NOTIFICATION_TYPES = {
  LIKE_MY_DOC: {
    type: "LIKE_MY_DOC",
    content: "내가 쓴 글에 공감이 눌렸어요!",
    img: readDoc.heart_fill,
  },
  LIKE_MY_COMMENT: {
    type: "LIKE_MY_COMMENT",
    content: "내가 쓴 댓글에 공감이 눌렸어요!",
    img: readDoc.heart_fill,
  },
  LIKE_MY_SUBCOMMENT: {
    type: "LIKE_MY_SUBCOMMENT",
    content: "내가 쓴 댓글에 공감이 눌렸어요!",
    img: readDoc.heart_fill,
  },
  COMMENT_MY_DOC: {
    type: "COMMENT_MY_DOC",
    content: "내가 쓴 글에 댓글이 달렸어요!",
    img: readDoc.speech_bubble,
  },
  SUBCOMMENT_MY_COMMENT: {
    name: "SUBCOMMENT_MY_COMMENT",
    content: "내가 쓴 댓글에 대댓글이 달렸어요!",
    img: readDoc.speech_bubble,
  },
};

export const boardNameDict = {
  CONVERGENCE: {
    name: "융특게시판",
    dbName: "convergence",
    addressName: "convergence",
  },
  DEPARTMAJOR: {
    name: "전과게시판",
    dbName: "departMajor",
    addressName: "departmajor",
  },
};
