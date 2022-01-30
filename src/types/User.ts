export enum UserRoleEnum {
  SUPER_ADMIN = 'SUPER_ADMIN',
  WRITER = 'WRITER',
}

export enum UserRolePtBrEnum {
  SUPER_ADMIN = 'Super admin',
  WRITER = 'Escritor',
}

export enum UserStatusEnum {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  PENDING = 'PENDING',
}

export enum UserStatusPtBrEnum {
  ACTIVE = 'Ativo',
  INACTIVE = 'Inativo',
  PENDING = 'Pendente',
}

export enum UserStatusVariantEnum {
  ACTIVE = 'success',
  INACTIVE = 'danger',
  PENDING = 'warning',
}
export interface IUser {
  id?: string
  email?: string
  firstname?: string
  secondname?: string
  nickname?: string
  occupation?: string
  role?: UserRoleEnum
  status?: UserStatusEnum
  provider?: string
  password?: string
  website?: string
  about?: string
  avatar_url?: string
  created_at?: string
  updated_at?: string
}
