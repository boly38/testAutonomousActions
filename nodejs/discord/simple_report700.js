import {simpleFetchPostJsonPayload} from "../util/netUtil.js";
import {readUTF8File} from "../util/fileUtil.js";
import {env} from "node:process";

//~ input
const webhookUrl = env["DISCORD_WEBHOOK_URL"];//ex. 'https://discord.com/api/webhooks/your_webhook_id/your_webhook_token';
const reportFileName = "data/report_700cars.md";

//~ read data
const reportContent = await readUTF8File(reportFileName);

//~ format discord request
const webhookPayload = JSON.stringify({content: reportContent});

//~ send to discord
simpleFetchPostJsonPayload(webhookUrl, webhookPayload)
