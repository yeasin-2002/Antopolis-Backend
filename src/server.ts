// import { Server } from "https"
import app from "./app";
import { port } from "./utils";

async function main() {
    app.listen(port, () => {
        console.log(`🔥 Server running on http://localhost:${port}`);
    });
}

main();
