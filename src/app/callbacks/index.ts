const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 8080;

export const handleServerListening = () =>
    console.log(`Server is running on port http://localhost:${PORT}.`);

export const handleError = (err: any) => {
    if (err.code === "EADDRINUSE") {
        console.log("Error: address already in use");
    } else {
        console.log(err);
    }
};