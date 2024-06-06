export interface User {
    firstName: string
    lastName: string
}

export interface ComputedUser extends User {
    fullName: string
}