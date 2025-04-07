import {readUTF8File} from "../util/fileUtil.js";
import {simpleFetchPostJsonPayload} from "../util/netUtil.js";
import {env} from "node:process";
import {checkMaxLength} from "../util/checkUtil.js";

//~ input
const webhookUrl = env["DISCORD_WEBHOOK_URL"];//ex. 'https://discord.com/api/webhooks/your_webhook_id/your_webhook_token';
const oneLineFileName = "data/report_one_line_84cars.txt";
const reportFileName = 'data/report_700cars.md';

//~ read data
const oneLineContent = (await readUTF8File(oneLineFileName))?.trim();
const report = (await readUTF8File(reportFileName))?.trim();

//~ format discord request
const title = checkMaxLength("title", oneLineContent, 256);// max 256 cars
const description = checkMaxLength("description", report, 2048);// max 2048 cars
const color = 5814783; // decimal color
const body = JSON.stringify({embeds: [{title, description, color}]});

//~ send to discord
simpleFetchPostJsonPayload(webhookUrl, body);

// !!! Embed just seems to not work on discord side => webhook POST ok but bad/empty visual output on channel :'(