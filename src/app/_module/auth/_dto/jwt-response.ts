export interface JwtResponse {
    username: string;
    roles: { role: string; roleDescription: string }[];
    jwtToken: string; 
}
