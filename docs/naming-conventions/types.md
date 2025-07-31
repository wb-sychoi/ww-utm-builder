# 타입/인터페이스 네이밍 컨벤션

## 1. 기본 규칙

### 1.1 형식
- PascalCase 사용 필수
- 명사 또는 명사구
- 약어 사용 금지
- 'I' 접두사 사용 금지

### 1.2 의미
- 데이터 구조나 목적을 명확히 표현
- 구체적이고 설명적인 이름
- 일반적인 의미보다 구체적인 의미 선호

### 1.3 interface vs type 선택 기준

#### interface 사용
- 객체의 구조를 정의할 때
- 확장 가능성이 있는 경우 (extends, implements)
- 선언 병합이 필요한 경우
- 객체 지향적 설계를 따르는 경우

```typescript
// 객체 구조 정의
interface User {
  id: string;
  name: string;
  email: string;
}

// 확장성
interface BaseButton {
  variant: 'primary' | 'secondary';
  size: 'small' | 'medium' | 'large';
}

interface IconButton extends BaseButton {
  icon: string;
}

// 선언 병합
interface Theme {
  colors: Record<string, string>;
}

interface Theme {
  typography: Record<string, string>;
}
```

#### type 사용
- 유니온 또는 인터섹션 타입
- 튜플이나 배열 타입
- 함수 타입
- 유틸리티 타입 변환
- 매핑된 타입

```typescript
// 유니온 타입
type Status = 'idle' | 'loading' | 'success' | 'error';
type NumberOrString = number | string;

// 튜플 타입
type Coordinates = [number, number];
type HttpResponse<T> = [number, T];

// 함수 타입
type Handler = (event: Event) => void;
type AsyncCallback<T> = () => Promise<T>;

// 유틸리티 타입
type Nullable<T> = T | null;
type PartialUser = Partial<User>;

// 매핑된 타입
type ReadonlyUser = {
  readonly [K in keyof User]: User[K];
};
```

### 1.4 일반적인 선호도
- 기본적으로 interface 선호
- 특수한 타입 정의가 필요한 경우 type 사용
- 프로젝트 전체에서 일관성 유지

```typescript
// interface 선호
interface Props {
  name: string;
  age: number;
}

interface State {
  isLoading: boolean;
  data: unknown;
}

// type 필요
type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
type ValidationResult = { isValid: boolean; errors: string[] };
type StateUpdater<T> = (prevState: T) => T;
```

## 2. 용도별 네이밍

### 2.1 접미사 규칙
- 각 용도별로 정해진 접미사 사용
- 일관성 있게 적용
- 의미에 맞는 접미사 선택

```typescript
// 컴포넌트 Props
interface ButtonProps {
  variant: 'primary' | 'secondary';
}

// 함수 매개변수 Args
interface SomeArgs {
  email: string;
  password: string;
}

// 폼 데이터 FormData
interface UserFormData {
  email: string;
  password: string;
  name: string;
  password: string
}

// 폼 데이터 생성 및 수정
interface User{Create|Update}FormData {
  email: string;
  password: string;
  name: string;
  password: string
}

// 상태 관리 State
interface UserState {
  isLoading: boolean;
  data: User | null;
}

// API 요청/응답 Request/Response
interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
  user: User;
}

// 설정 옵션 Options
interface TableOptions {
  pagination: boolean;
  sorting: boolean;
}

// 이벤트 핸들러 Handler
type ClickHandler = (event: MouseEvent) => void;

// 유틸리티 결과 Result
type ValidationResult = {
  isValid: boolean;
  errors: string[];
};
```

#### 주요 접미사 목록

| 접미사 | 용도 | 예시 |
|--------|------|------|
| Props | 컴포넌트 속성 | ButtonProps, CardProps |
| Args | 함수 매개변수 | CreateUserArgs, UpdatePostArgs |
| State | 상태 관리 | UserState, AuthState |
| Request | API 요청 | LoginRequest, CreatePostRequest |
| Response | API 응답 | UserResponse, PostResponse |
| Options | 설정 옵션 | TableOptions, ModalOptions |
| Config | 구성 설정 | AppConfig, ThemeConfig |
| Handler | 이벤트 처리 | ClickHandler, SubmitHandler |
| Result | 연산 결과 | ValidationResult, SearchResult |
| Data | 데이터 구조 | UserData, PostData |
| Schema | 데이터 검증 스키마 | UserSchema, PostSchema |
| Model | 데이터 모델 | UserModel, PostModel |
| Map | 키-값 쌍 | ColorMap, RouteMap |
| Form | 폼 데이터 | UserForm, PostForm |

### 2.2 컴포넌트 Props
- Props 접미사 필수
- 컴포넌트명 포함
- 선택적 속성은 물음표로 표시

```typescript
interface ButtonProps {
  variant: 'primary' | 'secondary';
  size: 'small' | 'medium' | 'large';
  isDisabled?: boolean;
  onClick?: () => void;
}

interface UserProfileProps {
  user: User;
  isEditable?: boolean;
  onUpdate?: (user: User) => void;
}
```

### 2.3 함수 매개변수
- Args 접미사 필수
- 함수명과 연관된 이름
- 필수/선택 매개변수 구분

```typescript
interface DoSomethingArgs {
  id: string;
  name: string;
  email: string;
  password: string;
}

```

### 2.4 상태 관련 타입
- State 접미사 필수
- 관리하는 데이터 설명
- 상태 범위 표현

```typescript
interface ApplicationState {
  user: User | null;
  theme: Theme;
  isLoading: boolean;
}

interface AuthenticationState {
  isAuthenticated: boolean;
  token: string | null;
  user: User | null;
}
```

### 2.5 API 관련 타입
- Request/Response 접미사 필수
- HTTP 메서드나 엔드포인트 반영
- View는 클라이언트 표시용 데이터에 사용
- Schema는 데이터 검증에 사용

```typescript
interface CreateUserRequest {
  email: string;
  password: string;
  name: string;
}

interface UserResponse {
  id: string;
  email: string;
  name: string;
  createdAt: string;
}

// 클라이언트 표시용 데이터
interface UserView {
  displayName: string;
  email: string;
  avatar: string;
}

// 데이터 검증
interface UserSchema {
  email: string;
  password: string;
  name: string;
  role: UserRole;
}
```

## 3. 특수 패턴

### 3.1 제네릭 타입
- 단일 문자는 관례적인 경우만 허용
- 설명적인 이름 선호
- 제약 조건이 있는 경우 표현

```typescript
// 일반적인 제네릭
interface List<T> {
  items: T[];
  total: number;
}

// 설명적인 제네릭
interface Repository<Entity extends BaseEntity> {
  find(id: string): Promise<Entity>;
  save(entity: Entity): Promise<Entity>;
}

// 복잡한 제네릭
type AsyncResult<Data, Error = unknown> = {
  data: Data | null;
  error: Error | null;
  isLoading: boolean;
};
```

### 3.2 유틸리티 타입
- 동작이나 변환을 설명
- 기존 타입 기반
- 목적 명확히 표현

```typescript
type Nullable<T> = T | null;
type Optional<T> = T | undefined;
type DeepPartial<T> = { [P in keyof T]?: DeepPartial<T[P]> };

// 구체적인 유틸리티 타입
type UserWithoutPassword = Omit<User, 'password'>;
type ReadonlyUser = Readonly<User>;
type PartialConfig = Partial<Config>;
```

## 4. 도메인별 네이밍

### 4.1 비즈니스 도메인
- 도메인 용어 사용
- 명확한 의미 전달
- 일관된 용어 사용

```typescript
// 전자상거래 도메인
interface Product {
  id: string;
  name: string;
  price: number;
  category: ProductCategory;
}

type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered';

interface CartItem {
  product: Product;
  quantity: number;
}
```

### 4.2 기술 도메인
- 기술적 특성 반영
- 구현 세부사항 포함
- 프레임워크 관련 용어 사용

```typescript
// React 관련
type ComponentProps<T extends React.ElementType> = React.ComponentProps<T>;
type ReactNode = React.ReactNode;

// Next.js 관련
interface GetServerSideProps<T> {
  props: T;
  notFound?: boolean;
  redirect?: Redirect;
}
```

## 5. 타입 변형

### 5.1 엔티티 타입
- Prisma 엔티티 타입은 `Entity` 접미사 사용
- `typeof prisma.[모델명]` 형식으로 정의
- 데이터베이스 모델과 1:1 매핑

```typescript
type UserEntity = typeof prisma.user;
type ProductEntity = typeof prisma.product;
type OrderEntity = typeof prisma.order;
```

### 5.2 도메인 타입
- 엔티티의 일부 또는 관계 모델과 합성된 상태를 표현
- 접미사 없이 대표 이름 사용
- 비즈니스 로직에서 주로 사용

```typescript
// 기본 사용자 정보
interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
}

// 관계 모델과 합성된 상태
interface UserWithPosts extends User {
  posts: Post[];
}

// 특정 용도로 가공된 상태
interface UserProfile {
  id: string;
  displayName: string;
  avatar: string;
  bio: string;
}
```

### 5.3 폼 데이터 타입
- 기본적으로 `FormData` 접미사 사용
- 생성/수정 구조가 다른 경우 `CreateFormData`/`UpdateFormData` 구분
- 폼 입력값의 구조를 정확히 반영

```typescript
// 동일한 구조의 폼 데이터
interface UserFormData {
  email: string;
  password: string;
  name: string;
}

// 다른 구조의 생성/수정 폼 데이터
interface UserCreateFormData {
  email: string;
  password: string;
  name: string;
  role: UserRole;
}

interface UserUpdateFormData {
  name?: string;
  bio?: string;
  avatar?: string;
}
```

## 6. 안티 패턴

### 6.1 피해야 할 패턴
```typescript
// 나쁜 예시
interface IUserInterface {}    // 'I' 접두사와 중복적인 'Interface'
type Stuff = any;             // 모호한 이름과 any 타입
interface Data {}             // 너무 일반적인 이름
type Obj = object;            // 의미 없는 이름

// 좋은 예시
interface User {}             // 명확한 도메인 객체
type ValidationResult = {};   // 목적이 명확한 타입
interface ConfigOptions {}    // 구체적인 설정 객체
```

### 6.2 예외적 허용
- 널리 알려진 약어 (URL, ID)
- 제네릭 타입 매개변수의 단일 문자 (T, K, V)
- 라이브러리나 프레임워크의 컨벤션 