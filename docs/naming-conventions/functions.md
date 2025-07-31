# 함수명 네이밍 컨벤션

## 1. 기본 규칙

### 1.1 형식
- camelCase 사용 필수
- 동사로 시작
- 목적과 의도를 명확히 표현
- 약어 사용 금지

### 1.2 의미
- 함수의 동작을 명확히 설명
- 단일 책임 원칙 준수
- 부작용이 있는 경우 이름에 반영

```typescript
// 좋은 예시
function calculateTotalPrice(): number;
function validateUserInput(): boolean;
function fetchUserData(): Promise<User>;

// 나쁜 예시
function process(): void;        // 모호한 동작
function doStuff(): void;       // 불분명한 의도
function handleIt(): void;      // 불명확한 처리
```

## 2. 함수 유형별 네이밍

### 2.1 일반 함수
- 동작을 나타내는 동사로 시작
- 명확한 의도 전달
- 반환 값이 있는 경우 그 내용을 암시

```typescript
// 데이터 조작
function transformData(data: RawData): ProcessedData;
function filterInactiveUsers(users: User[]): User[];
function sortByDate(items: Item[]): Item[];

// 상태 확인
function isValidEmail(email: string): boolean;
function hasPermission(user: User, action: string): boolean;
```

### 2.2 비동기 함수
- fetch는 원격 데이터를 가져올 때만 사용
- create, update, delete는 CRUD 작업에 사용
- async 접미사는 사용하지 않음 (async/await로 충분)
- Promise 반환을 암시하는 이름

```typescript
// API 호출
async function fetchUserProfile(userId: string): Promise<UserProfile>;
async function createUser(userData: UserData): Promise<User>;
async function updateUserSettings(settings: Settings): Promise<void>;
async function deleteUser(userId: string): Promise<void>;

// 데이터 조작
async function transformLargeData(data: RawData): Promise<ProcessedData>;
async function processUploadedFile(file: File): Promise<ProcessedFile>;
```

### 2.3 이벤트 핸들러
- handle 접두사 사용
- 이벤트 타입과 대상을 포함
- 선택적으로 동작 설명 추가

```typescript
// DOM 이벤트
function handleClick(event: React.MouseEvent): void;
function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void;
function handleSubmit(event: React.FormEvent<HTMLFormElement>): void;

// 커스텀 이벤트
function handleUserLogin(credentials: Credentials): void;
function handleModalClose(): void;
function handleDataRefresh(): void;
```

### 2.4 유틸리티 함수
- 동작을 정확히 설명
- 범용적 사용을 고려한 이름
- 필요시 네임스페이스 활용

```typescript
// 문자열 처리
function formatCurrency(amount: number): string;
function truncateText(text: string, maxLength: number): string;

// 날짜 처리
function formatDate(date: Date): string;
function calculateDateDifference(start: Date, end: Date): number;

// 데이터 변환
function convertToCSV(data: any[]): string;
function parseJSONSafely(jsonString: string): unknown;
```

## 3. 특수 패턴

### 3.1 고차 함수
- create, with, compose 등의 접두사 사용
- 반환되는 함수의 용도를 설명

```typescript
// 팩토리 함수
function createLogger(config: LogConfig): Logger;
function withAuthentication(Component: React.ComponentType): React.ComponentType;

// 합성 함수
function composeValidators(...validators: Validator[]): Validator;
function createMiddleware(options: MiddlewareOptions): Middleware;
```

### 3.2 콜백 함수
- on 접두사 사용
- 이벤트나 상황 설명 포함

```typescript
// 이벤트 콜백
function onSuccess(result: Result): void;
function onError(error: Error): void;
function onStateChange(newState: State): void;

// 생명주기 콜백
function onMount(): void;
function onDestroy(): void;
```

## 4. 컨텍스트별 네이밍

### 4.1 React 컴포넌트 내부 함수
- 컴포넌트 문맥 고려
- 지역적 의미 명확히

```typescript
// 렌더링 보조 함수
function renderMenuItem(item: MenuItem): JSX.Element;
function renderHeader(): JSX.Element;

// 이벤트 핸들러
function handleMenuItemClick(item: MenuItem): void;
function handleSearchInput(event: React.ChangeEvent<HTMLInputElement>): void;
```

### 4.2 클래스 메서드
- this 컨텍스트 고려
- 인스턴스 동작 설명

```typescript
class UserService {
  async fetchProfile(): Promise<Profile>;
  validateInput(input: UserInput): boolean;
  private normalizeData(data: RawData): NormalizedData;
}
```

## 5. 안티 패턴

### 5.1 피해야 할 패턴
```typescript
// 나쁜 예시
function process(): void;              // 모호한 이름
function returnData(): any;            // 불분명한 반환
function callback(): void;             // 의미 없는 이름
function handleStuff(): void;          // 불명확한 처리

// 좋은 예시
function processUserData(): void;      // 명확한 대상과 동작
function fetchUserProfile(): User;     // 명확한 반환
function onProfileUpdate(): void;      // 명확한 이벤트
function handleFormSubmit(): void;     // 명확한 처리
```

### 5.2 예외적 허용
- 재귀 함수의 보조 함수 (helper, inner 등)
- 라이브러리 규칙 준수가 필요한 경우
- 성능 최적화가 필요한 경우 