export enum PostStatusEnum {
  Published = 'published',
  Draft = 'draft',
  Unpublished = 'unpublished',
}
export enum PostStatusVariantEnum {
  draft = 'warning',
  published = 'success',
  unpublished = 'danger',
}
export enum PostStatusPtBrEnum {
  published = 'Público',
  draft = 'Rascunho',
  unpublished = 'Despublicado',
}

export interface IPost {
  id?: string
  title?: string
  slug?: string
  content?: string
  status?: PostStatusEnum
  publishad_at?: string
  publishad_at_date?: string
  publishad_at_time?: string
}
