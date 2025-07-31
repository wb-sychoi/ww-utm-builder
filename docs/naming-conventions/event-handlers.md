# 이벤트 핸들러 네이밍 컨벤션

## 1. 기본 규칙

### 1.1 형식
- handle 접두사 필수
- camelCase 사용
- 이벤트 대상과 타입 포함
- 명확한 동작 설명

### 1.2 의미
- 이벤트의 목적 표현
- 처리할 동작 설명
- 컨텍스트 고려

```typescript
// 좋은 예시
function handleSubmit(e: FormEvent): void;
function handleUserClick(e: MouseEvent): void;
function handleInputChange(e: ChangeEvent): void;

// 나쁜 예시
function submit(e: FormEvent): void;        // handle 접두사 없음
function handleStuff(): void;               // 모호한 동작
function doSomething(): void;               // 불명확한 의미
```

## 2. 용도별 네이밍

### 2.1 DOM 이벤트
- 이벤트 타입 포함
- 대상 요소 명시
- 정확한 이벤트명 사용

```typescript
// 마우스 이벤트
function handleClick(e: MouseEvent): void;
function handleMouseOver(e: MouseEvent): void;
function handleDoubleClick(e: MouseEvent): void;

// 키보드 이벤트
function handleKeyPress(e: KeyboardEvent): void;
function handleKeyDown(e: KeyboardEvent): void;
function handleKeyUp(e: KeyboardEvent): void;
```

### 2.2 폼 이벤트
- 입력 타입 표현
- 변경 대상 명시
- 검증 로직 포함 시 표현

```typescript
// 입력 처리
function handleInputChange(e: ChangeEvent<HTMLInputElement>): void;
function handleTextAreaChange(e: ChangeEvent<HTMLTextAreaElement>): void;

// 폼 제출
function handleFormSubmit(e: FormEvent<HTMLFormElement>): void;
function handleValidationError(errors: ValidationErrors): void;
```

### 2.3 커스텀 이벤트
- 비즈니스 로직 반영
- 동작 흐름 표현
- 상태 변경 암시

```typescript
// 상태 변경
function handleStatusChange(newStatus: Status): void;
function handleThemeToggle(theme: Theme): void;

// 사용자 액션
function handleUserLogin(credentials: Credentials): void;
function handleProfileUpdate(data: ProfileData): void;
```

## 3. 특수 패턴

### 3.1 비동기 핸들러
- Async 접미사 사용
- Promise 처리 암시
- 에러 처리 고려

```typescript
// API 호출
async function handleSubmitAsync(data: FormData): Promise<void>;
async function handleFetchDataAsync(): Promise<void>;

// 파일 처리
async function handleFileUploadAsync(file: File): Promise<void>;
async function handleImageProcessAsync(image: Image): Promise<void>;
```

### 3.2 조건부 핸들러
- 조건 로직 표현
- 대체 동작 암시
- 상태 의존성 표현

```typescript
// 조건부 실행
function handleConditionalSubmit(condition: boolean): void;
function handleAuthenticatedAction(isAuth: boolean): void;

// 상태 기반
function handleEnabledClick(isEnabled: boolean): void;
function handleValidatedSubmit(isValid: boolean): void;
```

## 4. 컨텍스트별 네이밍

### 4.1 컴포넌트 이벤트
- 컴포넌트명 포함
- 이벤트 범위 한정
- 부모-자식 관계 표현

```typescript
// 컴포넌트 특화
function handleModalClose(): void;
function handleDropdownSelect(item: DropdownItem): void;

// 자식 컴포넌트
function handleChildClick(childId: string): void;
function handleItemSelect(itemId: string): void;
```

### 4.2 전역 이벤트
- 범위 표현
- 공통 동작 설명
- 재사용성 고려

```typescript
// 전역 핸들러
function handleGlobalError(error: Error): void;
function handleWindowResize(): void;

// 공통 동작
function handleOutsideClick(e: MouseEvent): void;
function handleEscapeKey(e: KeyboardEvent): void;
```

## 5. 매개변수 네이밍

### 5.1 이벤트 객체
- 명확한 타입 지정
- 의미있는 매개변수명
- 필요한 속성만 사용

```typescript
// 이벤트 타입
function handleChange(event: ChangeEvent<HTMLInputElement>): void;
function handleSubmit(event: FormEvent<HTMLFormElement>): void;

// 이벤트 속성
function handleKeyPress(event: KeyboardEvent): void {
  const { key, code, ctrlKey } = event;
}
```

### 5.2 커스텀 매개변수
- 명확한 의미 전달
- 타입 안정성 확보
- 선택적 매개변수 고려

```typescript
// 데이터 매개변수
function handleUpdate(data: UpdateData, options?: UpdateOptions): void;
function handleSelect(item: SelectItem, index: number): void;

// 옵션 매개변수
function handleSort(
  sortField: keyof Data,
  sortDirection: 'asc' | 'desc'
): void;
```

## 6. 안티 패턴

### 6.1 피해야 할 패턴
```typescript
// 나쁜 예시
function onClick(): void;              // handle 접두사 없음
function handleEvent(): void;          // 모호한 이름
function doStuff(): void;             // 불명확한 동작
function handleThingClick(): void;     // 불분명한 대상

// 좋은 예시
function handleClick(): void;          // 명확한 이벤트
function handleUserSelect(): void;     // 구체적 동작
function handleFormSubmit(): void;     // 명확한 대상
```

### 6.2 예외적 허용
- 라이브러리 컨벤션 준수
- 프레임워크 패턴 따르기
- 팀 내 합의된 예외 