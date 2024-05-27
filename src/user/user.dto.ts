// user.dto.ts
export class CreateUserDto {
    readonly username: string;
    readonly password: string;
  }
  
  export class LoginUserDto {
    readonly username: string;
    readonly password: string;
  }