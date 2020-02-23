import { app  } from "./app";

const server = app.listen(app.port, () => {
    // tslint:disable-next-line:no-console
    console.log(`Server started at http://localhost:${app.port}`);
});

export { server };