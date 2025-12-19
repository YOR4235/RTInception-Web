export interface TableColumn {
  key: keyof any;   // property name in Idea
  label: string;     // header label
  sortable?: boolean;
}