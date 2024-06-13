export interface SortMethod {
  tagAction: string;
  timeAction: string;
}

export enum ActionType {
  Up = 'up',
  Down = 'down'
}

export enum ClickType {
  Tag = 'tag',
  Time = 'time'
}
