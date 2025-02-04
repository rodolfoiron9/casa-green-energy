import { Database } from "@/integrations/supabase/types";

export type ContentType = Database["public"]["Enums"]["content_type"];

export const contentTypes: { value: ContentType; label: string }[] = [
  { value: 'service_page', label: 'Service Page' },
  { value: 'project_page', label: 'Project Page' },
  { value: 'blog_post', label: 'Blog Post' },
  { value: 'faq', label: 'FAQ' },
  { value: 'form', label: 'Form' },
  { value: 'footer', label: 'Footer' },
  { value: 'policy', label: 'Policy' },
];

export interface GenerateContentData {
  title: string;
  contentType: ContentType | "";
  prompt: string;
}