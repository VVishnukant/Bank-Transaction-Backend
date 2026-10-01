const express = require("express")
const cookieParser = require("cookie-parser")

const app = express()

// Routes required
const authRouter = require("./routes/auth.routes")
const accountRouter = require("./routes/account.routes")
const transactionRoutes = require("./routes/transaction.routes")

app.use(express.json()) // express ka server req.body ke andar ke data ko padh sake
app.use(cookieParser())


// Use Routes

app.get("/",(req,res)=>{
    res.send("Ledger service is up and running")
})

app.use("/api/auth", authRouter)
app.use("/api/accounts", accountRouter)
app.use("/api/transactions", transactionRoutes)

module.exports = app