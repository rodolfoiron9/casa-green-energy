export type TableName = 
  | "content" 
  | "leads" 
  | "ai_chat_interactions"
  | "marketing_campaigns"
  | "ai_content"
  | "ai_analytics"
  | "profiles"
  | "ai_tasks"
  | "api_keys"
  | "blog_posts"
  | "books"
  | "downloads"
  | "faqs"
  | "forms"
  | "marketing_content"
  | "subscribers"
  | "templates"
  | "user_roles";

export interface TableInfo {
  table_name: TableName;
  row_count: number;
  last_updated: string;
}