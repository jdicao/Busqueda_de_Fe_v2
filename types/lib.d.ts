declare namespace NodeJS{
    interface ProcessEnv{
        readonly OPENAI_API_KEY:string;
        readonly NODE_ENV: "development" | "productio";
    }
}