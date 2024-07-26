export interface JwtResponse {
    username: string;
    roles: { roleName: string; roleDescription: string }[];
    jwtToken: string; 
}
