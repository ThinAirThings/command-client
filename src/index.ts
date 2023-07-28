


export abstract class Command {
    abstract returnType: any
    constructor(public wrappedFn: <C extends any>(client: C) => any) {}
}

export abstract class CommandClient {
    send = async <T extends Command>(command: T): Promise<T['returnType']> => {
        try {
            return command.wrappedFn(this)
        } catch (error) {
            throw error
        }
    }
}