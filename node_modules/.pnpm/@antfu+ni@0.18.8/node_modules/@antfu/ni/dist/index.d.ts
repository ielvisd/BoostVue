declare const AGENTS: {
    npm: {
        agent: string;
        run: (args: string[]) => string;
        install: string;
        frozen: string;
        global: string;
        add: string;
        upgrade: string;
        'upgrade-interactive': null;
        execute: string;
        uninstall: string;
        global_uninstall: string;
    };
    yarn: {
        agent: string;
        run: string;
        install: string;
        frozen: string;
        global: string;
        add: string;
        upgrade: string;
        'upgrade-interactive': string;
        execute: string;
        uninstall: string;
        global_uninstall: string;
    };
    'yarn@berry': {
        frozen: string;
        upgrade: string;
        'upgrade-interactive': string;
        execute: string;
        global: string;
        global_uninstall: string;
        agent: string;
        run: string;
        install: string;
        add: string;
        uninstall: string;
    };
    pnpm: {
        agent: string;
        run: string;
        install: string;
        frozen: string;
        global: string;
        add: string;
        upgrade: string;
        'upgrade-interactive': string;
        execute: string;
        uninstall: string;
        global_uninstall: string;
    };
    'pnpm@6': {
        run: (args: string[]) => string;
        agent: string;
        install: string;
        frozen: string;
        global: string;
        add: string;
        upgrade: string;
        'upgrade-interactive': string;
        execute: string;
        uninstall: string;
        global_uninstall: string;
    };
    bun: {
        agent: string;
        run: string;
        install: string;
        frozen: string;
        global: string;
        add: string;
        upgrade: null;
        'upgrade-interactive': null;
        execute: null;
        uninstall: string;
        global_uninstall: string;
    };
};
type Agent = keyof typeof AGENTS;
type Command = keyof typeof AGENTS.npm;

interface DetectOptions {
    autoInstall?: boolean;
    cwd?: string;
}
declare function detect({ autoInstall, cwd }: DetectOptions): Promise<"npm" | "pnpm" | "yarn" | "yarn@berry" | "pnpm@6" | "bun" | null>;

interface RunnerContext {
    hasLock?: boolean;
    cwd?: string;
}
type Runner = (agent: Agent, args: string[], ctx?: RunnerContext) => Promise<string | undefined> | string | undefined;
declare function runCli(fn: Runner, options?: DetectOptions): Promise<void>;
declare function run(fn: Runner, args: string[], options?: DetectOptions): Promise<void>;

declare function getCommand(agent: Agent, command: Command, args?: string[]): string;
declare const parseNi: Runner;
declare const parseNr: Runner;
declare const parseNu: Runner;
declare const parseNun: Runner;
declare const parseNx: Runner;
declare const parseNa: Runner;

interface Config {
    defaultAgent: Agent | 'prompt';
    globalAgent: Agent;
}
declare function getConfig(): Promise<Config>;
declare function getDefaultAgent(): Promise<"npm" | "pnpm" | "yarn" | "yarn@berry" | "pnpm@6" | "bun" | "prompt">;
declare function getGlobalAgent(): Promise<"npm" | "pnpm" | "yarn" | "yarn@berry" | "pnpm@6" | "bun">;

declare function remove<T>(arr: T[], v: T): T[];
declare function exclude<T>(arr: T[], v: T): T[];
declare function cmdExists(cmd: string): boolean;
declare function getVoltaPrefix(): string;

export { DetectOptions, Runner, RunnerContext, cmdExists, detect, exclude, getCommand, getConfig, getDefaultAgent, getGlobalAgent, getVoltaPrefix, parseNa, parseNi, parseNr, parseNu, parseNun, parseNx, remove, run, runCli };
