import app from "./app.js";

const main = () => {
    app.listen(app.set("port"), () => {
        console.log(`Server on port ${app.set("port")} you are welcome`);
    });
};

main();