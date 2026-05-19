export type ContentBlock =
  | { type: "text"; content: string }
  | { type: "image"; url: string; alt?: string }

export interface NewsPost {
  id: string
  title: string
  thumbnailUrl: string
  body: ContentBlock[]
  createdAt: string // ISO 8601
}
