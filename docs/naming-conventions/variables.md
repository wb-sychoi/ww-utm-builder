# 변수명 네이밍 컨벤션

## 1. 기본 규칙

### 1.1 형식
- camelCase 사용 필수
- 변수의 목적과 의미를 명확히 표현
- 한 글자 변수명 사용 금지 (예외: 반복문의 i, j, k)
- 임시 변수명 사용 금지 (tmp, temp, foo, bar)
- 약어 사용 금지 (btn, txt, idx)

### 1.2 의미
- 변수가 나타내는 데이터의 역할이나 용도를 명확히 드러내야 함
- 문맥이 불분명한 경우 더 구체적인 이름 사용

```typescript
// 좋은 예시
const userName: string;        // 사용자 이름
const userAge: number;        // 사용자 나이
const isModalOpen: boolean;   // 모달 상태

// 나쁜 예시
const name: string;          // 문맥이 불분명
const age: number;           // 문맥이 불분명
const modal: boolean;        // 상태가 불분명
```

## 2. 접두사/접미사 규칙

### 2.1 불리언 변수
- is: 상태나 조건을 표현
- has: 포함 여부를 표현
- should: 조건부 동작을 표현
- can: 가능 여부를 표현

```typescript
// 상태 표현
const isLoading: boolean;     // 로딩 상태
const isValid: boolean;       // 유효성 상태
const isEnabled: boolean;     // 활성화 상태

// 포함 여부
const hasError: boolean;      // 에러 포함 여부
const hasPermission: boolean; // 권한 보유 여부

// 조건부 동작
const shouldUpdate: boolean;  // 업데이트 필요 여부
const shouldRender: boolean;  // 렌더링 필요 여부

// 가능 여부
const canEdit: boolean;      // 편집 가능 여부
const canDelete: boolean;    // 삭제 가능 여부
```

### 2.2 컬렉션 변수
- 배열은 복수형 사용
- List 접미사 허용 (팀 컨벤션에 따라)

```typescript
// 배열 (복수형)
const users: User[];              // 사용자 목록
const selectedItems: Item[];      // 선택된 아이템들
const activeProducts: Product[];  // 활성화된 상품들

// List 접미사
const userList: User[];          // 사용자 목록
const productList: Product[];    // 상품 목록
```

### 2.3 수량/개수 변수
- Count 접미사: 개수를 나타낼 때
- Number 접미사: 순서나 번호를 나타낼 때
- Total 접두사: 전체 합계를 나타낼 때

```typescript
// 개수
const userCount: number;        // 사용자 수
const totalItemCount: number;   // 전체 아이템 수

// 순서/번호
const pageNumber: number;       // 페이지 번호
const orderNumber: number;      // 주문 번호

// 합계
const totalAmount: number;      // 전체 금액
const totalScore: number;       // 전체 점수
```

## 3. 문맥 기반 네이밍

### 3.1 컴포넌트 내부 변수
- 컴포넌트의 역할과 연관되게 명명
- 지역 변수는 컴포넌트 문맥 내에서 이해되도록

```typescript
// UserProfile 컴포넌트 내부
const profileImage: string;       // 프로필 이미지 URL
const profileDescription: string; // 프로필 설명

// DataTable 컴포넌트 내부
const tableData: Row[];          // 테이블 데이터
const columnConfig: Column[];    // 컬럼 설정
```

### 3.2 전역/공유 변수
- 범용성을 고려해 더 구체적으로 명명
- 용도와 범위를 명확히 표현

```typescript
const globalConfig: Config;      // 전역 설정
const sharedState: State;        // 공유 상태
const currentUserId: string;     // 현재 사용자 ID
```

### 3.3 React 상태 변수
- 상태의 용도를 명확히 표현
- setter 함수는 set 접두사 사용

```typescript
// 상태 값과 설정 함수 쌍
const [selectedItem, setSelectedItem] = useState<Item | null>(null);
const [isModalOpen, setIsModalOpen] = useState(false);
const [formData, setFormData] = useState<FormData>({});
```

## 4. TypeScript 특성 활용

### 4.1 타입 명시가 필요한 경우
- 타입이 명확하지 않은 경우
- 유니온 타입이나 복잡한 타입의 경우

```typescript
const errorMessage: string;              // 에러 메시지
const userIds: number[];                 // 사용자 ID 목록
const configOptions: Partial<Config>;    // 설정 옵션
```

### 4.2 타입 추론이 가능한 경우
- 초기값으로 타입이 명확한 경우
- 단순 타입의 경우

```typescript
const maxRetries = 3;                    // number로 추론
const defaultName = "Guest";             // string으로 추론
const isEmpty = true;                    // boolean으로 추론
```

### 4.3 옵셔널 속성
- 옵셔널은 타입으로 표현
- optional 접두사 사용 금지

```typescript
interface UserProfile {
  firstName: string;
  middleName?: string;        // 옵셔널은 타입으로 표현
  lastName: string;
}
```

## 5. 도메인 특화 네이밍

### 5.1 전자상거래 예시
```typescript
const orderId: string;                   // 주문 ID
const cartItems: CartItem[];             // 장바구니 아이템
const productCategory: Category;         // 상품 카테고리
const shippingAddress: Address;          // 배송 주소
```

### 5.2 인증/권한 예시
```typescript
const accessToken: string;               // 접근 토큰
const refreshToken: string;              // 갱신 토큰
const userRole: Role;                    // 사용자 역할
```

## 6. 안티 패턴 (사용 금지)

### 6.1 피해야 할 패턴
```typescript
// 나쁜 예시
const d: Date;                  // 한 글자 변수
const temp: string;             // 임시 변수명
const arr: number[];           // 의미 없는 배열명
const data: any;               // 모호한 데이터명
const btnTxt: string;          // 약어 사용

// 좋은 예시
const currentDate: Date;        // 명확한 의미
const tempUserData: UserData;   // 임시지만 의미 있는 이름
const numberArray: number[];    // 배열 내용 명시
const userData: UserData;       // 구체적인 데이터 타입
const buttonText: string;       // 전체 단어 사용
```

### 6.2 예외적 허용
- 반복문의 인덱스 (i, j, k)
- 이벤트 핸들러의 이벤트 객체 (e)
- 제네릭 타입 파라미터 (T, K, V)
- 수학적 계산에서의 좌표 (x, y, z)

## 7. 성능 고려사항

### 7.1 최적화 컨텍스트
- 성능 최적화가 필요한 경우 더 간결한 이름 허용
- 단, 주석으로 의도를 명확히 설명

```typescript
// 성능 최적화된 행렬 계산
const m = new Matrix();  // Matrix 인스턴스
const v = new Vector();  // Vector 인스턴스
``` 