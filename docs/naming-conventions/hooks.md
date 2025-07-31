# 커스텀 훅 네이밍 컨벤션

## 1. 기본 규칙

### 1.1 형식
- use 접두사 필수
- camelCase 사용
- 동사 또는 동사구로 시작
- 명확한 목적 표현

### 1.2 의미
- 훅의 주요 기능 설명
- 반환값 암시
- 사용 맥락 고려

```typescript
// 좋은 예시
function useUserProfile(): UserProfile;
function useAuthentication(): AuthState;
function useWindowSize(): Size;

// 나쁜 예시
function userData(): UserData;        // use 접두사 없음
function useProfile(): Profile;       // 모호한 목적
function useStuff(): any;            // 불명확한 의미
```

## 2. 용도별 네이밍

### 2.1 상태 관리 훅
- 상태 관련 동사 사용
- 상태 타입 암시
- 업데이트 로직 포함 시 표현

```typescript
// 기본 상태 관리
function useState(): [State, SetState];
function useCounter(initial: number): [number, CounterActions];

// 복잡한 상태 관리
function useFormState<T>(initial: T): FormState<T>;
function useModalState(): [boolean, ModalActions];
```

### 2.2 데이터 페칭 훅
- 데이터 타입 포함
- 페칭 상태 표현
- API 동작 암시

```typescript
// 기본 페칭
function useUserData(id: string): UserData;
function useFetchPosts(): PostsQueryResult;

// 고급 페칭
function useInfiniteScroll<T>(query: QueryConfig): InfiniteScrollResult<T>;
function useLazyLoad(options: LazyLoadOptions): LazyLoadResult;
```

### 2.3 이벤트 핸들링 훅
- 이벤트 타입 표현
- 핸들러 동작 설명
- 반환값 형태 암시

```typescript
// DOM 이벤트
function useClickOutside(ref: RefObject<HTMLElement>): void;
function useKeyPress(targetKey: string): boolean;

// 커스텀 이벤트
function useEventListener<T>(eventName: string): EventHandler<T>;
function useIntersectionObserver(options: IntersectionOptions): IntersectionResult;
```

## 3. 특수 패턴

### 3.1 조합형 훅
- 기본 훅 조합 표현
- 새로운 기능 설명
- 의존성 암시

```typescript
// 기능 조합
function useAuthenticatedUser(): AuthenticatedUser;
function useProtectedRoute(): RouteGuard;

// 상태 조합
function useThemeWithStorage(): ThemeState;
function usePersistedState<T>(key: string): PersistedState<T>;
```

### 3.2 조건부 훅
- 조건 로직 표현
- 선택적 기능 설명
- 폴백 동작 암시

```typescript
// 조건부 실행
function useConditionalEffect(condition: boolean): void;
function useOptionalFeature(isEnabled: boolean): OptionalFeature;

// 환경 기반
function useClientOnly(): boolean;
function useServerSideProps<T>(): T;
```

## 4. 컨텍스트별 네이밍

### 4.1 컴포넌트 전용 훅
- 컴포넌트명 포함
- 특정 기능 설명
- 범위 한정 표현

```typescript
// 컴포넌트 상태
function useTableSort<T>(data: T[]): SortedData<T>;
function useModalState(id: string): ModalState;

// 컴포넌트 로직
function useDropdownPosition(ref: RefObject<HTMLElement>): Position;
function useCarouselControls(): CarouselControls;
```

### 4.2 공통 훅
- 재사용성 고려
- 범용적 이름
- 설정 옵션 포함

```typescript
// 유틸리티 훅
function useDebounce<T>(value: T, delay: number): T;
function useLocalStorage<T>(key: string, initial: T): StorageState<T>;

// 상태 관리
function usePagination<T>(items: T[]): PaginationState<T>;
function useAsyncState<T>(asyncFn: () => Promise<T>): AsyncState<T>;
```

## 5. 반환값 네이밍

### 5.1 반환 객체
- 명확한 프로퍼티명
- 액션/상태 구분
- 일관된 패턴

```typescript
function useForm<T>() {
  return {
    values: formValues,
    errors: formErrors,
    touched: touchedFields,
    handleSubmit,
    handleChange,
    handleBlur
  };
}

function useAsync<T>(asyncFn: () => Promise<T>) {
  return {
    data: result,
    error: errorState,
    isLoading: loadingState,
    execute: runAsync
  };
}
```

### 5.2 튜플 반환
- 상태와 설정 함수 쌍
- 명확한 타입 정의
- 구조분해 고려

```typescript
function useToggle(initial: boolean): [boolean, () => void];
function useInput(initial: string): [string, InputHandlers];

// 타입 정의
type InputHandlers = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  reset: () => void;
};
```

## 6. 안티 패턴

### 6.1 피해야 할 패턴
```typescript
// 나쁜 예시
function getData(): any;              // use 접두사 없음
function useData(): unknown;          // 모호한 이름
function useHandleStuff(): void;      // 불명확한 동작
function useFetchUserDataFunction():  // 중복적인 이름
  () => Promise<UserData>;

// 좋은 예시
function useUserData(): UserData;     // 명확한 목적
function useFetchPosts(): Posts;      // 구체적 데이터
function useFormValidation():         // 명확한 기능
  ValidationResult;
```

### 6.2 예외적 허용
- React 내장 훅 모방 (useState, useEffect 등)
- 라이브러리 컨벤션 준수
- 팀 내 합의된 패턴 