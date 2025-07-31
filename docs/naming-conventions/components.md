# 컴포넌트명 네이밍 컨벤션

## 1. 기본 규칙

### 1.1 형식
- PascalCase 사용 필수
- 명사 또는 명사구로 시작
- 의미있는 UI 요소나 역할 표현
- 약어 사용 금지

### 1.2 의미
- 컴포넌트의 주요 기능이나 목적을 표현
- 재사용성을 고려한 이름
- 부모-자식 관계가 있는 경우 접두사 공유

```typescript
// 좋은 예시
function UserProfile(): JSX.Element;
function NavigationBar(): JSX.Element;
function SearchInput(): JSX.Element;

// 나쁜 예시
function Profile(): JSX.Element;        // 너무 일반적
function UsrPrfl(): JSX.Element;        // 약어 사용
function DoStuff(): JSX.Element;        // 동사 사용
```

## 2. 컴포넌트 유형별 네이밍

### 2.1 페이지 컴포넌트
- Page 접미사 사용
- 기능이나 섹션 이름 포함
- 라우트와 연관된 이름

```typescript
// pages 디렉토리
function HomePage(): JSX.Element;
function UserProfilePage(): JSX.Element;
function ProductListPage(): JSX.Element;

// app 디렉토리 (Next.js)
function DashboardPage(): JSX.Element;
function SettingsPage(): JSX.Element;
```

### 2.2 레이아웃 컴포넌트
- Layout 접미사 사용
- 구조적 의미 포함
- 범위나 영역 표현

```typescript
// 레이아웃
function MainLayout(): JSX.Element;
function DashboardLayout(): JSX.Element;
function SidebarLayout(): JSX.Element;

// 구조적 컴포넌트
function GridLayout(): JSX.Element;
function FlexContainer(): JSX.Element;
```

### 2.3 UI 컴포넌트
- 명확한 UI 요소 이름
- 기능이나 상태 포함 가능
- 재사용성 고려

```typescript
// 기본 UI 요소
function Button(): JSX.Element;
function Card(): JSX.Element;
function Modal(): JSX.Element;

// 복합 UI 요소
function SearchBar(): JSX.Element;
function NotificationBadge(): JSX.Element;
function DropdownMenu(): JSX.Element;
```

### 2.4 컨테이너 컴포넌트
- Container 접미사 사용
- 데이터나 로직 처리 암시
- 래핑하는 컴포넌트 이름 포함

```typescript
// 데이터 컨테이너
function UserProfileContainer(): JSX.Element;
function ProductListContainer(): JSX.Element;

// 로직 컨테이너
function AuthenticationContainer(): JSX.Element;
function ThemeContainer(): JSX.Element;
```

## 3. 특수 패턴

### 3.1 고차 컴포넌트 (HOC)
- with 접두사 사용
- 추가되는 기능 설명
- 명확한 목적 표현

```typescript
// HOC
function withAuthentication(Component: React.ComponentType): React.ComponentType;
function withTheme(Component: React.ComponentType): React.ComponentType;
function withErrorBoundary(Component: React.ComponentType): React.ComponentType;
```

### 3.2 Compound 컴포넌트
- 부모 컴포넌트의 이름을 접두사로 사용
- 관계 표현
- 일관된 네이밍

```typescript
function Select(): JSX.Element;
Select.Option = function SelectOption(): JSX.Element;
Select.Group = function SelectGroup(): JSX.Element;

function Menu(): JSX.Element;
Menu.Item = function MenuItem(): JSX.Element;
Menu.Divider = function MenuDivider(): JSX.Element;
```

## 4. 파일명 규칙

### 4.1 컴포넌트 파일
- 컴포넌트명과 동일
- .tsx 확장자 사용
- 인덱스 파일 활용

```
components/
  └── UserProfile/
      ├── UserProfile.tsx
      ├── UserProfileHeader.tsx
      ├── UserProfileContent.tsx
      └── index.ts
```

### 4.2 관련 파일
- 컴포넌트명 기반
- 용도를 접미사로 표시
- 명확한 분류

```
components/
  └── Button/
      ├── Button.tsx
      ├── Button.styles.ts
      ├── Button.test.tsx
      ├── Button.stories.tsx
      └── index.ts
```

## 5. Props 네이밍

### 5.1 Props 인터페이스
- Props 접미사 사용
- 컴포넌트명 포함
- 명확한 타입 정의

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

### 5.2 이벤트 핸들러 Props
- on 접두사 사용
- 이벤트 설명 포함
- 핸들러 타입 명시

```typescript
interface FormProps {
  onSubmit: (data: FormData) => void;
  onChange?: (field: string, value: any) => void;
  onCancel?: () => void;
}
```

## 6. 안티 패턴

### 6.1 피해야 할 패턴
```typescript
// 나쁜 예시
function Comp(): JSX.Element;           // 불명확한 이름
function HandleForm(): JSX.Element;     // 동사 사용
function UserPrfl(): JSX.Element;       // 약어 사용
function CMP_1(): JSX.Element;          // 의미 없는 이름

// 좋은 예시
function UserForm(): JSX.Element;       // 명확한 목적
function ProfileCard(): JSX.Element;    // UI 요소 표현
function NavigationMenu(): JSX.Element; // 기능 설명
```

### 6.2 예외적 허용
- 널리 알려진 약어 (URL, ID 등)
- 라이브러리 컨벤션 준수
- 팀 내 합의된 약어 