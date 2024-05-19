export enum TaskType {
  feature = 'feature',
  bug = 'bug',
}

//On that case means that the default property will be TaskType however a user can assign also a different value
type Task<T = TaskType> = {
  name: string;
  type: T;
};

type Task2<T extends TaskType> = {
  name: string;
  type: T; // The type should be within the TaskType enum
};
const whatever2: Task2<TaskType> = { name: 'Michail', type: TaskType.bug };
const whatever: Task = { name: 'Michail', type: TaskType.bug };
