import { app } from "./app";


app.listen({port: 3000, host: "0.0.0.0"}, (error, address) => {
    if (error) {
        app.log.error(error);
        process.exit(1);
    }
    app.log.info(`Server is running on ${address}`);
});
 