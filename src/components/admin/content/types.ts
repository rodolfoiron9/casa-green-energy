import { Database } from "@/integrations/supabase/types";

export type ContentType = Database["public"]["Enums"]["content_type"];

export const contentTypes: { value: ContentType; label: string; description: string }[] = [
  { 
    value: 'service_page', 
    label: 'Service Page',
    description: 'Create comprehensive service pages with SEO optimization'
  },
  { 
    value: 'project_page', 
    label: 'Project Page',
    description: 'Generate detailed project case studies and portfolios'
  },
  { 
    value: 'blog_post', 
    label: 'Blog Post',
    description: 'Create SEO-friendly blog posts with images and tags'
  },
  { 
    value: 'faq', 
    label: 'FAQ',
    description: 'Generate frequently asked questions and answers'
  },
  { 
    value: 'form', 
    label: 'Form',
    description: 'Create custom forms for lead qualification'
  },
  { 
    value: 'footer', 
    label: 'Footer',
    description: 'Generate footer content including policies and terms'
  },
];

export interface GenerateContentData {
  title: string;
  contentType: ContentType | "";
  prompt: string;
  seoTitle?: string;
  seoDescription?: string;
  tags?: string[];
  category?: string;
  formFields?: {
    type: string;
    label: string;
    required: boolean;
    options?: string[];
  }[];
}