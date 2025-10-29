# 🧭 개발하기에 앞서

원활한 협업을 위해 아래 규칙을 꼭 지켜주시기 바랍니다.

---

## 📘 주요 규칙

### 1. 주석 남기기

- 코드 변경의 **의도**와 **핵심 동작**을 간결히 주석으로 남겨주세요.
- 예시:
  ```js
  // 로그인 성공 시 JWT 토큰을 로컬 스토리지에 저장
  localStorage.setItem("token", response.data.token);
  ```

---

### 2. Git 커밋 규칙

#### ✅ 커밋 메시지 구조

```
# Header, Body, Footer는 빈 행으로 구분합니다.
타입(스코프): 주제(제목)

본문(필요 시 상세 설명)

바닥글(예: 이슈 번호, BREAKING CHANGE 등)
```

#### 📄 타입 목록

| 타입     | 설명                           |
| -------- | ------------------------------ |
| feat     | 새로운 기능 추가               |
| fix      | 버그 수정                      |
| build    | 빌드 관련 변경 / 의존성 변경   |
| chore    | 기타 자잘한 작업               |
| ci       | CI 관련 설정 변경              |
| docs     | 문서 수정                      |
| style    | 코드 스타일(포맷, 세미콜론 등) |
| refactor | 코드 리팩토링(동작 변경 없음)  |
| test     | 테스트 코드 추가/수정          |
| perf     | 성능 개선                      |

#### 🧩 작성 예시

```
git commit -m "fix: Safari에서 모달을 띄웠을 때 스크롤 이슈 수정

모바일 사파리에서 Carousel 모달을 띄웠을 때,
모달 밖의 상하 스크롤이 움직이는 이슈 수정.

resolves: #1137
```

---

### 3. 브랜치 생성 및 병합 규칙

#### 🌿 브랜치 네이밍 규칙

```
타입/작업내용
```

| 타입     | 설명             |
| -------- | ---------------- |
| feature  | 새로운 기능 개발 |
| fix      | 버그 수정        |
| hotfix   | 긴급 수정        |
| refactor | 리팩토링         |
| docs     | 문서 작업        |

**예시**

```
feature/login-page
fix/modal-scroll
refactor/user-api
```

#### 🚀 브랜치 운영 방식

1. **새로운 기능 또는 수정 작업**을 시작할 때는 반드시 `main` 브랜치에서 새 브랜치를 생성합니다.

   ```bash
   git checkout main
   git pull origin main
   git checkout -b feature/login-page
   ```

2. 브랜치에서 개발을 완료하고, 테스트 및 코드 리뷰를 거친 후 `main` 브랜치로 병합합니다.

   ```bash
   git add .
   git commit -m "feat(login): 로그인 페이지 UI 구현"
   git push origin feature/login-page
   ```

3. GitHub에서 **Pull Request(PR)** 를 생성하고 검증이 완료되면 `main` 브랜치로 병합합니다.
   - PR 제목은 다음 형식을 따릅니다:
     ```
     [feat] 로그인 페이지 UI 구현
     ```
   - 리뷰 후 승인되면:
     ```bash
     git checkout main
     git merge feature/login-page
     git push origin main
     ```

## 🚀 실행

StoryBook = `npm run storybook`
