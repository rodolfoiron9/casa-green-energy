export type TableName = 
  | "content" 
  | "leads" 
  | "blog_posts"
  | "marketing_campaigns"
  | "subscribers"
  | "templates";

export interface TableInfo {
  table_name: TableName;
  row_count: number;
  last_updated: string;
}