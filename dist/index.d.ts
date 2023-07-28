export declare abstract class Command {
    wrappedFn: <C extends any>(client: C) => any;
    abstract returnType: any;
    constructor(wrappedFn: <C extends any>(client: C) => any);
}
export declare abstract class CommandClient {
    send: <T extends Command>(command: T) => Promise<T["returnType"]>;
}
