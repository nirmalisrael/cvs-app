export class Url {

    private static hostName: string = 'localhost:';

    private static portNumber: number = 8080;

    public static getHostNameAndPort(): string {
        return 'http://' + this.hostName + this.portNumber + '/cvs';
    }
}
