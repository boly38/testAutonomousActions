import {readUTF8File} from "../util/fileUtil.js";
import {fetchPostPayload} from "../util/netUtil.js";
import {env} from "node:process";

const {FormData, Blob} = globalThis;

//~ input
const webhookUrl = env["DISCORD_WEBHOOK_URL"];//ex. 'https://discord.com/api/webhooks/your_webhook_id/your_webhook_token';
const oneLineFileName = "data/report_one_line_84cars.txt";
const hugeReportFileName = 'data/report_2564cars.md';

//~ read data
const oneLineContent = await readUTF8File(oneLineFileName);
const fileBuffer = await readUTF8File(hugeReportFileName);
const blob = new Blob([fileBuffer]);

//~ format discord request
const formData = new FormData();
formData.append('file', blob, 'fichier.txt');
formData.append('content', oneLineContent);

//~ send to discord
fetchPostPayload(webhookUrl, formData);