import { memo, useCallback, useState } from "react";

function Title({ title }: { title: string }) {
  console.log(title);
  return <h1>{title}</h1>;
}

const MemoizedTitle = memo(Title);

function Container() {
  const [title, setTitle] = useState("Test title");
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const handleTitle = useCallback(() => {
    setTitle("Test title");
  }, []);

  console.log(`Container_${title}`);

  return (
    <div>
      <MemoizedTitle title={title} />
      <p>{count}</p>
      <button type="button" onClick={handleClick}>
        Click me!
      </button>
      <button type="button" onClick={handleTitle}>
        Title!
      </button>
    </div>
  );
}

export default Container;
