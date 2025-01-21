export interface IUser {
    id: number
    name: string
    email: string
    role: string
  }

export interface IRolePercentages {
    y: string,
    role: number
}

export interface IRoleCount  {
    Admin: number,
    Supervisor: number,
    Member:  number
  }

export interface DataPoints{
    y: number; 
    role: string; 
}