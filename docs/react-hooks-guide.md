# `useMemo`와 `useCallback` 사용 가이드

React는 컴포넌트 Props 변경 여부를 확인할 때, 값의 내용이 아닌 메모리 주소(참조)를 비교하는 얕은 비교(shallow comparison) 방식을 사용함.

JavaScript의 함수, 객체, 배열은 컴포넌트 렌더링 시마다 새로 생성되어 다른 참조값을 갖게 됨. 이는 불필요한 리렌더링을 유발하여 성능 저하의 원인이 될 수 있음.

`useMemo`와 `useCallback`은 값이나 함수를 **메모이제이션(Memoization)**하여, 의존성이 변경되지 않는 한 재사용하게 해주는 훅.

---

### 1. `useCallback`: 함수 메모이제이션

- **사용 시점**: 자식 컴포넌트에 함수를 Prop으로 전달할 때.
- **사용법**: 메모이제이션할 함수를 첫 번째 인자로, 의존성 배열을 두 번째 인자로 전달.

- **예시**:

  ```jsx
  // 나쁜 예 👎: Parent 리렌더링 시마다 새로운 handleClick 함수 생성
  const handleClick = () => { /* ... */ };

  // 좋은 예 👍: 의존성 배열([])이 비어있으므로, 함수는 처음 한 번만 생성
  const memoizedHandleClick = useCallback(() => { /* ... */ }, []);

  return <ChildComponent onClick={memoizedHandleClick} />;
  ```

---

### 2. `useMemo`: 값 메모이제이션

- **사용 시점**: 복잡한 연산 결과값(객체, 배열 등)을 재사용할 때.
- **사용법**: 값을 생성하는 함수를 첫 번째 인자로, 의존성 배열을 두 번째 인자로 전달.

- **예시**:

  ```jsx
  // 나쁜 예 👎: Parent 리렌더링 시마다 새로운 style 객체 생성
  const style = { color: 'blue', fontWeight: 'bold' };

  // 좋은 예 👍: `theme`이 변경될 때만 style 객체를 새로 계산
  const memoizedStyle = useMemo(() => ({
    color: theme.color,
    fontWeight: 'bold',
  }), [theme]);

  return <ChildComponent style={memoizedStyle} />;
  ```

---

### 핵심: 의존성 배열 (Dependency Array)

- `useMemo`, `useCallback`의 두 번째 인자로 전달하는 배열.
- 배열 안의 값이 **변경될 때만** 함수나 값이 새로 생성됨.
- **빈 배열 `[]`** 전달 시, 컴포넌트가 처음 마운트될 때 **단 한 번만** 생성.
- **주의**: 의존성 배열을 잘못 설정하면 오래된 `state`나 `prop`을 참조하는 버그(Stale State)가 발생할 수 있음. 항상 모든 의존성을 배열에 포함해야 함.