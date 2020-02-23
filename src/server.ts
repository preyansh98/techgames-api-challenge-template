import  app   from "./app";

const port = process.env.SERVER_PORT || 3000;

const server = app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`Server started at http://localhost:${port}`);
});

export { server };