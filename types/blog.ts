export interface BlogPost {
  id: string
  title: string
  content: string
  excerpt: string
  createdAt: string
  updatedAt: string
  published: boolean
}

export interface AuthState {
  isAuthenticated: boolean
  password: string
}
