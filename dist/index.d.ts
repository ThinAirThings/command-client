export declare abstract class Command {
    wrappedFn: <C extends CommandClient>(client: C) => any;
    abstract returnType: any;
    constructor(wrappedFn: <C extends CommandClient>(client: C) => any);
}
export declare abstract class CommandClient {
    send: <T extends Command>(command: T) => Promise<T["returnType"]>;
}
