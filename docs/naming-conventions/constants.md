# 상수 네이밍 컨벤션

## 1. 기본 규칙

### 1.1 형식
- camelCase 사용 (일반적인 상수)
- PascalCase 사용 (타입처럼 사용되는 상수)
- 명사 또는 명사구
- 의미를 명확히 전달
- 약어는 널리 알려진 경우만 허용

### 1.2 의미
- 상수의 용도와 목적을 명확히 표현
- 구체적이고 설명적인 이름
- 매직 넘버/문자열 대신 의미있는 이름

```typescript
// 좋은 예시
const defaultTheme = 'light';
const maxRetryCount = 3;
const apiBaseUrl = 'https://api.example.com';

// 나쁜 예시
const n = 3;                    // 불명확한 의미
const url = '/api';             // 너무 일반적
const str = 'light';            // 의미 없는 이름
```

## 2. 용도별 네이밍

### 2.1 설정 상수
- config, settings 등의 접미사 사용
- 범위나 영역 표현
- 구체적인 설정 내용 포함

```typescript
// 앱 설정
const appConfig = {
  maxFileSize: 5 * 1024 * 1024,
  supportedFormats: ['jpg', 'png', 'gif'],
  defaultLocale: 'ko-KR'
} as const;

// API 설정
const apiConfig = {
  timeout: 5000,
  retryCount: 3,
  baseUrl: '/api/v1'
} as const;
```

### 2.2 환경 변수
- env 접두사 권장
- 목적과 용도 명시
- 보안 수준 고려

```typescript
// 환경 변수
const env = {
  nodeEnv: process.env.NODE_ENV,
  apiKey: process.env.API_KEY,
  databaseUrl: process.env.DATABASE_URL
} as const;

// 공개 환경 변수
const publicEnv = {
  appVersion: '1.0.0',
  buildTime: '2024-03-23'
} as const;
```

### 2.3 기능 상수
- 기능이나 도메인 관련 이름
- 구체적인 값의 의미 전달
- 관련 상수 그룹화

```typescript
// 인증 관련
const auth = {
  tokenExpiry: 3600,
  refreshTokenExpiry: 86400,
  sessionKey: 'user_session'
} as const;

// 페이지네이션
const pagination = {
  itemsPerPage: 20,
  maxPages: 10,
  defaultPage: 1
} as const;
```

## 3. 특수 패턴

### 3.1 열거형 대체
- PascalCase 사용
- 관련 값들의 그룹
- 문자열 리터럴 유니온 타입

```typescript
// 상태 값
const Status = {
  Idle: 'idle',
  Loading: 'loading',
  Success: 'success',
  Error: 'error'
} as const;

// 테마 설정
const Theme = {
  Light: 'light',
  Dark: 'dark',
  System: 'system'
} as const;
```

### 3.2 매직 넘버/문자열
- 의미있는 이름으로 대체
- 계산식이 필요한 경우 주석 추가
- 단위 정보 포함

```typescript
// 시간 관련
const time = {
  oneSecond: 1000,          // milliseconds
  oneMinute: 60 * 1000,     // milliseconds
  oneHour: 60 * 60 * 1000   // milliseconds
} as const;

// 파일 크기
const fileSize = {
  maxImage: 5 * 1024 * 1024,  // 5MB
  maxVideo: 100 * 1024 * 1024 // 100MB
} as const;
```

## 4. 모듈별 네이밍

### 4.1 API 관련
- 엔드포인트, 헤더, 메서드 등
- 버전 정보 포함
- 보안 관련 정보

```typescript
// API 엔드포인트
const apiEndpoints = {
  auth: '/auth',
  users: '/users',
  products: '/products'
} as const;

// API 헤더
const apiHeaders = {
  contentType: 'Content-Type',
  authorization: 'Authorization',
  acceptLanguage: 'Accept-Language'
} as const;
```

### 4.2 UI 관련
- 스타일, 테마, 레이아웃 등
- 반응형 디자인 값
- 색상 및 크기

```typescript
// 브레이크포인트
const breakpoints = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1280px'
} as const;

// Z-인덱스
const zIndex = {
  modal: 1000,
  dropdown: 100,
  header: 50,
  default: 1
} as const;
```

## 5. 파일 구조

### 5.1 상수 파일 구성
- 관련 상수 그룹화
- 명확한 파일명
- 적절한 내보내기

```typescript
// constants/auth.ts
export const auth = {
  // 인증 관련 상수
} as const;

// constants/api.ts
export const api = {
  // API 관련 상수
} as const;

// constants/ui.ts
export const ui = {
  // UI 관련 상수
} as const;
```

### 5.2 네임스페이스 활용
- 관련 상수 그룹화
- 충돌 방지
- 접근성 개선

```typescript
// constants/index.ts
export * from './auth';
export * from './api';
export * from './ui';

// 사용 예시
import { auth, api, ui } from '@/constants';
```

## 6. 안티 패턴

### 6.1 피해야 할 패턴
```typescript
// 나쁜 예시
const TIMEOUT = 1000;           // UPPER_SNAKE_CASE 사용
const Config = {};              // PascalCase를 일반 객체에 사용
const STR = 'default';         // 의미 없는 대문자
const wrp = 'wrapper';         // 불명확한 약어

// 좋은 예시
const timeout = 1000;          // camelCase 사용
const config = {};             // 일반 객체는 camelCase
const defaultTheme = 'light';  // 명확한 의미
const wrapper = 'wrapper';     // 완전한 단어
```

### 6.2 예외적 허용
- 타입으로 사용되는 상수는 PascalCase
- 널리 알려진 약어 (URL, ID, API)
- 수학적 상수 (PI, E)

```typescript
// 좋은 예시
const MAX_RETRY_COUNT = 3;
const API_BASE_URL = 'https://api.example.com';
const DEFAULT_THEME = 'light';

// 나쁜 예시
const MAX = 3;              // 불명확한 의미
const URL = '/api';         // 너무 일반적
const STR = 'light';        // 의미 없는 이름