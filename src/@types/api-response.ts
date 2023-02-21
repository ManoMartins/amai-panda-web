export interface ApiResponse<T> {
    success: boolean
    error: any
    errorMessage: string
    data: T
}
