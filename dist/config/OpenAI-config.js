import { Configuration } from "openai";
export const configureOpenAi = () => {
    const configure = new Configuration({
        apiKey: process.env.OPEN_AI_SECRET,
        organization: process.env.OPEN_AI_ORG,
    });
    return configure;
};
//# sourceMappingURL=OpenAI-config.js.map