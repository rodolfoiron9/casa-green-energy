export type TableName = 
  | "content" 
  | "leads" 
  | "blog_posts"
  | "marketing_campaigns"
  | "subscribers"
  | "templates"
  | "ai_analytics"
  | "ai_chat_interactions"
  | "ai_content"
  | "ai_tasks"
  | "profiles";

export interface TableInfo {
  table_name: TableName;
  row_count: number;
  last_updated: string;
}