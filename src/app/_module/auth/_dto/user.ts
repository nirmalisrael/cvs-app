import { Role } from "./role";

export class User {
    username?: string;
    password?: string;
    roles?: { role: Role }[] = [];
}
