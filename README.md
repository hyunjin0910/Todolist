## 프로젝트 실행방법

`yarn start` 

## 배포 링크 & 데모 영상

👉 [과제 링크](https://lighthearted-donut-8774a9.netlify.app)  



### 데모 영상
https://user-images.githubusercontent.com/95457808/186325463-9e6873d0-1f7b-4411-8045-9bca001c15dd.mov


## 페이지 설명

### 1. 홈 화면
<img width="492" alt="홈화면" src="https://user-images.githubusercontent.com/95457808/186326209-17903f3b-00e9-4ac5-b750-688a88a7374a.png">

- 사이트에 들어가면 가장 처음에 나오는 화면
- 로그인 페이지 or 회원가입 페이지로 이동 가능

### 2. 회원 가입 페이지
<img width="493" alt="회원가입페이지" src="https://user-images.githubusercontent.com/95457808/186326208-58d1dde4-31d2-44b8-b0f5-f3c97a59147b.png">

#### 유효성 검사
- [x] 이메일 조건: @ 포함
- [x] 비밀번호 조건: 8자 이상
- [x] 입력된 이메일과 비밀번호가 위 조건을 만족할 때만 버튼이 활성화 (회색 -> 파란색으로 변경)


### 3. 로그인 페이지
<img width="490" alt="로그인 페이지" src="https://user-images.githubusercontent.com/95457808/186326205-ccf76e7f-89e7-4de1-8a2f-61187443d5ba.png">

#### 유효성 검사
- [x] 이메일 조건: @ 포함
- [x] 비밀번호 조건: 8자 이상
- [x] 입력된 이메일과 비밀번호가 위 조건을 만족할 때만 버튼이 활성화 (회색 -> 파란색으로 변경)

#### 토큰
- [x] 로그인 성공 시 해당 유저의 토큰이 로컬 스토리지에 "TOKEN"이라는 키로 저장됨
- [x] 로컬 스토리지에 토큰이 있는 상태에서 로그인 페이지 접속 시 /todo 경로로 리다이렉트 됨

### 4. 할일 목록 페이지
<img width="499" alt="목록" src="https://user-images.githubusercontent.com/95457808/186326210-92faef2f-7d2d-4a88-b8c6-51d59c39dce2.png">

- [x] /todo경로에 접속하면 투두 리스트의 목록을 볼 수 있음
- [x] 체크 박스 클릭을 통해 완료 여부를 표시할 수 있음
- [x] "추가하기" 버튼을 클릭해서 새로운 할 일을 추가할 수 있음
- [x] 연필 모양 아이콘 클릭 시 수정 가능 
    - “제출” 버튼을 누르면 입력한 내용으로 할일이 수정됨
    - “취소" 버튼을 누르면 내용이 수정되지 않고 유지
- [x] 휴지통 모양 아이콘 클릭 시 삭제 가능 

## 사용한 라이브러리

- UI
    - emotion
    - feather-icon
    - ant design
- React Router
- Axios
