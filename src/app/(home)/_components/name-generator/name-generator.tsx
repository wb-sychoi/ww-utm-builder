import { Button } from "@/core/components/ui/button";

export default function NameGenerator(props: {
  id: string;
  label: string;
  example: string;
  handleCreate: () => void;
  handleReset: () => void;
}) {
  return (
    <>
      <div className="flex flex-row gap-3 p-2 items-center">
        <div className="text-lg font-semibold">{props.label}</div>
        <small className="text-sm leading-none font-medium">
          {props.example}
        </small>
        <Button size="sm" onClick={props.handleCreate}>
          생성하기
        </Button>
        <Button size="sm" onClick={props.handleReset}>
          초기화
        </Button>
        <p id={props.id}>(여기에 출력됩니다)</p>
      </div>
    </>
  );
}
