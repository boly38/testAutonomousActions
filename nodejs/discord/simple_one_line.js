import {simpleFetchPostJsonPayload} from "../util/netUtil.js";
import {readUTF8File} from "../util/fileUtil.js";
import {env} from "node:process";

//~ input
const webhookUrl = env["DISCORD_WEBHOOK_URL"];//ex. 'https://discord.com/api/webhooks/your_webhook_id/your_webhook_token';
const oneLineFileName = "data/report_one_line_84cars.txt";

//~ read data
const oneLineContent = (await readUTF8File(oneLineFileName))?.trim();

//~ format discord request
const webhookPayload = JSON.stringify({content: oneLineContent});

//~ send to discord
simpleFetchPostJsonPayload(webhookUrl, webhookPayload)
