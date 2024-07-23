const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923499455315";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_23_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzksXG4gICAgICAgIDYwLFxuICAgICAgICAyMjksXG4gICAgICAgIDI2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODIsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTA1LFxuICAgICAgICA4NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjA2LFxuICAgICAgICA3MyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI0LFxuICAgICAgICAxODAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTc3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTg3LFxuICAgICAgICA5MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAzMixcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTksXG4gICAgICAgIDQzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTI5LFxuICAgICAgICA3MyxcbiAgICAgICAgNDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTAyLFxuICAgICAgICA0MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDcxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTc4LFxuICAgICAgICAxODUsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTY1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDksXG4gICAgICAgIDIwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDksXG4gICAgICAgIDE5NixcbiAgICAgICAgNDAsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTAyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTAwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDQxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxODQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDg2LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgODcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTUyLFxuICAgICAgICA1NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzMixcbiAgICAgICAgMjE4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDY0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDc3LFxuICAgICAgICA5MCxcbiAgICAgICAgNixcbiAgICAgICAgNDAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA5MixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDY5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc3LFxuICAgICAgICAzNixcbiAgICAgICAgMjQ5LFxuICAgICAgICA2NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDQ5LFxuICAgICAgICA2MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTksXG4gICAgICAgIDQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxODAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDgxLFxuICAgICAgICAzMixcbiAgICAgICAgNzcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTU0LFxuICAgICAgICAxODQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMixcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDY0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNSxcbiAgICAgICAgMjE4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTc1LFxuICAgICAgICA3NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTE4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJvN09BQzlOa0dpY2RnSmpYRDMwZy9pZHhteVJqK2xDTmpheDBURUdTdXZJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJFdlFhSTlxSFJXS0M2dnEtYlhLR29RXCIsXG4gIFwicGhvbmVJZFwiOiBcIjYxY2VlYWM3LTYyMDAtNDQ1Ni05ODJlLTY2YjQ5NjM5YzQyYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzUsXG4gICAgICAyMDcsXG4gICAgICAxNTksXG4gICAgICA3MSxcbiAgICAgIDE3OCxcbiAgICAgIDI0MSxcbiAgICAgIDk5LFxuICAgICAgNDgsXG4gICAgICAxNzMsXG4gICAgICAyMzIsXG4gICAgICAxODIsXG4gICAgICAxNDcsXG4gICAgICAxMjcsXG4gICAgICAxMjgsXG4gICAgICAyOCxcbiAgICAgIDEwMSxcbiAgICAgIDIxOSxcbiAgICAgIDExNixcbiAgICAgIDI0MyxcbiAgICAgIDEwOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NixcbiAgICAgIDU3LFxuICAgICAgNTksXG4gICAgICA4MyxcbiAgICAgIDc5LFxuICAgICAgMTc5LFxuICAgICAgNzUsXG4gICAgICAxMjQsXG4gICAgICAxNzYsXG4gICAgICA4MixcbiAgICAgIDM0LFxuICAgICAgMTM0LFxuICAgICAgMTM4LFxuICAgICAgMjQ4LFxuICAgICAgMTcyLFxuICAgICAgNTIsXG4gICAgICA1NCxcbiAgICAgIDY3LFxuICAgICAgMTA1LFxuICAgICAgOTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWFYzNzE3RUdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzQ5OTQ1NTMxNToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNTI2MzA1MjEyNjYzMDE6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLM1ozTElGRU4rWS9iUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjZVekljdmtoWlVjdHIwTTh0TjN2TE9ITjNJdTNpd1U0Q3V4dnBobFdHekE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwieDcxd2J0Y0dtbmtKaEpBNmtCNnltWTB3U2FMdkFGMklocllTU2NWd0R0TWR3N3g3UGU3aHRhdEQ2L2tTRm9tN0JCWVVPTjcrWm5rbnFGWFpodTdORFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaHVVL0ZYTWkwSmh3ckdmdXF2SzJNci9BV2NwSC9UeEZDaHBzNjEwNlB4SmlpQzE1SzMxd2pucmdHTzNURnZUakduTGJZZDZhT2dXakdpN3Q3NjAxQlE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDk5NDU1MzE1OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDQ4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE3MTU4MTBcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
