# manual discord JS light examples

## setup (one time)
ℹ️ launch discord samples using your own DISCORD_WEBHOOK_URL secret value
````bash
pnpm install
export DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/11111111111111/222222222
````

## run samples
````bash
# ok:
node ./nodejs/discord/simple_one_line.js
node ./nodejs/discord/simple_report700.js
node ./nodejs/discord/attachement_report2564.js 

# failed (discord side):
node ./nodejs/discord/embed_report700.js
````