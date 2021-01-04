# 융합특성화 자유전공학부 커뮤니티

## 개발 환경

Front: React JS /
Back: Firebase

## 초기 구동법

1. yarn install (npm install) 실행.
2. yarn start (npm start) 으로 로컬 서버 구동.

## 팀원

김의정
김준하
안은소
이우혁
지연우
조영현

## 다음 일정:

브랜치로 작업하기

## 일지

2021 / 01 / 05  
준하 초기 세팅:

- **styled-component** - css 편하게 해주는 라이브러리로써 yarn add styled-component로 설치해줘야 함. 추후 다른 라이브러리도 이런 방식으로 설치후 구동해야함. 다른 사람들도 yarn install, npm install 실행 후 npm start 줘야 함.
- **/src/index.css등** - styled-component 도입으로 기존 css 방식 사용 안함. 또한 리액트 기본 App.test 및 ServiceWorker 서비스 등 사용 안할 것. 필요한 파일들 제외하고 다 날림.
- **/public/index.html** - 리액트 기본 css 설정 때문에 margin이 기본 생성되어 테두리에 빈칸이 보임. `<body>` 태그에 style="margin:0" 넣는 것으로 해결.

* **.eslintcache .gitignore 등록** - .log 파일들은 로컬 구동 환경에 따라 다르기 때문에 ignore 등록하여야 함.

준하 수고했어!!
