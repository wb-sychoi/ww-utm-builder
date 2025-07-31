# 스타일 네이밍 컨벤션

## 1. 기본 규칙

### 1.1 형식
- Tailwind CSS 클래스 우선
- 커스텀 클래스는 kebab-case 사용
- 의미있는 이름 사용
- 약어 사용 제한

### 1.2 의미
- 스타일의 목적 표현
- 컴포넌트 관계 반영
- 재사용성 고려

```typescript
// 좋은 예시
const buttonStyles = 'btn-primary';
const cardWrapper = 'card-container';
const navbarFixed = 'navbar-fixed-top';

// 나쁜 예시
const s = 'style1';              // 불명확한 이름
const stl = 'red-bg';            // 약어 사용
const wrapper = 'wrp';           // 모호한 의미
```

## 2. Tailwind CSS 사용

### 2.1 기본 클래스
- 공식 유틸리티 클래스 사용
- 의미 단위로 그룹화
- 반응형 클래스 순서 준수

```typescript
// 컴포넌트 스타일링
const cardStyles = `
  flex flex-col                    // 레이아웃
  p-4 m-2                         // 여백
  bg-white dark:bg-gray-800       // 배경
  rounded-lg shadow-md            // 테두리/그림자
  hover:shadow-lg                 // 상호작용
  transition-all duration-300     // 애니메이션
`;

// 반응형 디자인
const containerStyles = `
  w-full                          // 모바일 기본
  md:w-3/4                        // 태블릿
  lg:w-2/3                        // 데스크톱
  xl:w-1/2                        // 대형 화면
`;
```

### 2.2 커스텀 유틸리티
- @layer utilities 사용
- 명확한 목적 표현
- 기존 패턴 따르기

```typescript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      spacing: {
        'navbar-height': '4rem',
        'sidebar-width': '16rem'
      }
    }
  }
};

// 사용 예시
const layoutStyles = `
  pt-navbar-height
  pl-sidebar-width
`;
```

## 3. 컴포넌트별 스타일

### 3.1 컴포넌트 래퍼
- 컴포넌트명 포함
- 구조적 의미 표현
- 범위 한정

```typescript
// 컴포넌트 컨테이너
const modalWrapper = `
  fixed inset-0                   // 위치
  flex items-center justify-center // 정렬
  bg-black bg-opacity-50         // 배경
  z-50                           // 레이어
`;

// 내부 요소
const modalContent = `
  w-full max-w-md                // 크기
  bg-white rounded-lg p-6        // 모양
  shadow-xl                      // 그림자
`;
```

### 3.2 변형 스타일
- 상태나 변형 표현
- 명확한 조건 표시
- 일관된 패턴

```typescript
// 버튼 변형
const buttonVariants = {
  primary: 'bg-blue-500 hover:bg-blue-600 text-white',
  secondary: 'bg-gray-500 hover:bg-gray-600 text-white',
  danger: 'bg-red-500 hover:bg-red-600 text-white'
};

// 상태 기반 스타일
const inputStyles = `
  border rounded-md p-2
  focus:ring-2 focus:ring-blue-500
  disabled:bg-gray-100 disabled:cursor-not-allowed
  error:border-red-500
`;
```

## 4. 레이아웃 패턴

### 4.1 그리드 시스템
- 일관된 간격 사용
- 반응형 고려
- 명확한 구조

```typescript
// 그리드 컨테이너
const gridContainer = `
  grid
  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
  gap-4
`;

// 그리드 아이템
const gridItem = `
  flex flex-col
  p-4
  bg-white rounded-lg
  shadow-sm hover:shadow-md
  transition-shadow duration-200
`;
```

### 4.2 플렉스 레이아웃
- 배치 목적 표현
- 정렬 방식 명시
- 공간 분배 고려

```typescript
// 플렉스 컨테이너
const flexContainer = `
  flex flex-col md:flex-row    // 방향
  items-center                 // 교차축 정렬
  justify-between              // 주축 정렬
  gap-4                        // 간격
`;

// 플렉스 아이템
const flexItem = `
  flex-1                      // 공간 분배
  min-w-0                     // 오버플로우 방지
`;
```

## 5. 상태 스타일

### 5.1 인터랙션 상태
- 상태 변화 명시
- 전환 효과 포함
- 접근성 고려

```typescript
// 버튼 상태
const buttonStates = `
  // 기본 상태
  bg-blue-500 text-white
  
  // 호버
  hover:bg-blue-600
  
  // 활성
  active:bg-blue-700
  
  // 비활성
  disabled:bg-gray-300 disabled:cursor-not-allowed
  
  // 포커스
  focus:outline-none focus:ring-2 focus:ring-blue-500
`;

// 링크 상태
const linkStates = `
  text-blue-500
  hover:text-blue-700 hover:underline
  focus:outline-none focus:ring-2
  visited:text-purple-600
`;
```

### 5.2 테마 변형
- 테마 조건 표현
- 일관된 색상 사용
- 전환 효과 고려

```typescript
// 라이트/다크 테마
const themeStyles = `
  // 라이트 테마
  bg-white text-gray-900
  
  // 다크 테마
  dark:bg-gray-800 dark:text-gray-100
  
  // 전환
  transition-colors duration-200
`;

// 커스텀 테마
const customTheme = `
  theme-blue:bg-blue-100
  theme-green:bg-green-100
  theme-red:bg-red-100
`;
```

## 6. 안티 패턴

### 6.1 피해야 할 패턴
```typescript
// 나쁜 예시
const style = 'mt-2';             // 불명확한 이름
const s1 = 'big-text';           // 의미 없는 이름
const styleRed = 'red';          // 직접적인 색상 참조
const wrapperDiv = 'wrp';        // 불필요한 약어

// 좋은 예시
const headerSpacing = 'mt-2';     // 명확한 목적
const titleText = 'text-2xl';     // 의미있는 이름
const errorText = 'text-red-500'; // 의미 기반 색상
const cardWrapper = 'card-container'; // 완전한 이름
```

### 6.2 예외적 허용
- 널리 알려진 약어 (nav, btn 등)
- 프레임워크 컨벤션
- 팀 내 합의된 패턴 