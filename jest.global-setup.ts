import { loadEnvConfig } from "@next/env";

const configTest = async () => {
    const projectDir = process.cwd();
    loadEnvConfig(projectDir);
};

export default configTest;
