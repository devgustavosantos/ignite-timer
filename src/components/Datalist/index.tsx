import { useTasksContext } from '@/contexts/Tasks';

export function Datalist() {
  const { tasks } = useTasksContext();

  return (
    <datalist id="suggestions">
      {tasks.map((task) => (
        <option
          value={task.name}
          key={String(task.createdAt)}
        />
      ))}
    </datalist>
  );
}
