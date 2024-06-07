import dotenv from 'dotenv'
import { app } from "./app.js";

dotenv.config({
    path: "./.env"
})


app.on("error", (error) => {
    console.log("ERROR: ", error)
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`)
})
