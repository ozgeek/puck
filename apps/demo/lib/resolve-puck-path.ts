import { useSearchParams } from 'next/navigation'
const resolvePuckPath = (puckPath: string[] = []) => {
  const hasPath = puckPath.length > 0;

  return {
    path: `/${([...puckPath]).join("/")}`,
    isEdit: hasPath && puckPath[puckPath.length - 1] === "edit",
  };
};

export default resolvePuckPath;
