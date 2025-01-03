export interface ResponseData<T> {
    status: number; // ex. 200
    success: boolean;
    state: string; // ex. “OK”
    message: string;
    data: T; // Generics
}

export interface ResponseVoid {
    status: number; // ex. 200
    success: boolean;
    state: string; // ex. “OK”
    message: string;
}