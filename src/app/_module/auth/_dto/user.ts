import { Role } from "./role";

export class User {
    username?: string;
    password?: string;
    roles?: { roleName?: string, roleDescription?: string }[] = [];
}
