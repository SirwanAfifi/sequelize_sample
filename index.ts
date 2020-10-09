import * as dotenv from "dotenv";
dotenv.config()
import { database } from "./dbConnection"

(async () => {
    await database.sequelize.sync({ alter: true });
    
})();