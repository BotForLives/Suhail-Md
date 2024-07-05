const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="avenyamakazi8@gmail.com"
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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "27767494368";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_40_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTY3LFxuICAgICAgICA1MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjUzLFxuICAgICAgICAxNyxcbiAgICAgICAgNDksXG4gICAgICAgIDI0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDU3LFxuICAgICAgICA5MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTcxLFxuICAgICAgICA1MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDgzLFxuICAgICAgICAxMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjEsXG4gICAgICAgIDk5LFxuICAgICAgICA4OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDgxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA0MixcbiAgICAgICAgMTcxLFxuICAgICAgICA5OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjE4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDc4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDYxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTA2LFxuICAgICAgICA5OCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDksXG4gICAgICAgIDk0LFxuICAgICAgICA0MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDc3LFxuICAgICAgICAxMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDk4LFxuICAgICAgICAyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjUxLFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MyxcbiAgICAgICAgMTk5LFxuICAgICAgICA3NixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDksXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDI4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjE5LFxuICAgICAgICA1MixcbiAgICAgICAgMjI4LFxuICAgICAgICA0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQ3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0LFxuICAgICAgICA1MixcbiAgICAgICAgNjcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICA2OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxODcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQ1LFxuICAgICAgICA1MixcbiAgICAgICAgMjcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjAyLFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NixcbiAgICAgICAgODEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzLFxuICAgICAgICA4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjUyLFxuICAgICAgICAxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDg1LFxuICAgICAgICAxODEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDQ2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMjNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDYwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAyLFxuICAgICAgICA0LFxuICAgICAgICAxNzksXG4gICAgICAgIDk1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDU2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjExLFxuICAgICAgICAxODcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAwLFxuICAgICAgICAyLFxuICAgICAgICA1LFxuICAgICAgICA0MixcbiAgICAgICAgNDgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTY0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDc1LFxuICAgICAgICA4OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTUwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTczLFxuICAgICAgICAzMixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTM2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ0aGg2aTRTSGhXK2htVklwOFdpT3A1R1BwNzR2clFNN0FubU9FTENpS3lzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI3NjY1NTcyODg2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJEMkU2MjY5OTA1MjQ2RjNGMDM3QTg3MDVBRDI2OUNFN1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAxMDc2MjlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNzY2NTU3Mjg4NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQ0I2NUI4OTc2MEM4QTIyRUYxNTA5RUUzRjc1NUE3OUVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMTA3NjI5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlU3VzMyNC1fUnpHaFpMNGF1VXNVV2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDJmNWI2OTgtMzJjZi00YTVmLWI4ZDktZDU4ZWRkNjQzNDE0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3OCxcbiAgICAgIDMsXG4gICAgICAyMzQsXG4gICAgICAxMDQsXG4gICAgICAxNjAsXG4gICAgICAxNTUsXG4gICAgICAxMTMsXG4gICAgICAyLFxuICAgICAgMTAwLFxuICAgICAgMjcsXG4gICAgICAxNjEsXG4gICAgICAxLFxuICAgICAgNzIsXG4gICAgICAyNDgsXG4gICAgICAyMDIsXG4gICAgICA1NixcbiAgICAgIDE3MSxcbiAgICAgIDYzLFxuICAgICAgOSxcbiAgICAgIDk2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzOCxcbiAgICAgIDg4LFxuICAgICAgMTUyLFxuICAgICAgMyxcbiAgICAgIDEyNCxcbiAgICAgIDE5MyxcbiAgICAgIDkwLFxuICAgICAgMjM0LFxuICAgICAgMTk0LFxuICAgICAgMTQ4LFxuICAgICAgMTk4LFxuICAgICAgMjM2LFxuICAgICAgNDUsXG4gICAgICAxNDksXG4gICAgICAxODcsXG4gICAgICAzNCxcbiAgICAgIDIwMixcbiAgICAgIDIxMCxcbiAgICAgIDQ1LFxuICAgICAgMTcxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk1OVjg0RzY3XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNzY2NTU3Mjg4Njo0NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlllc1wiLFxuICAgIFwibGlkXCI6IFwiODU4MTgxNDQzMTgyMjo0NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOckt6VmNRNUlTYnRBWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImNucTVVRnRTSzd3ZTN1M29DV3VockRBMG9wQ05ROThYbjdYaUoyUm9Pbms9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibzJJZER1L1QzMWNFNnFMNE44WWhQeUw1YWduaDU0UndOYmltOE5lMEhHWEhOTXdpbEI1STJoeG1zVForYWpGMlpHcXAzMmVLU1VxOVBaclI1OUZYRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaGpMZVpCeUMxNGxJaGVwbmVka1pOejAxYU9RWEVEcGN6RTRDMUp3WUhoUHpsU1dQbHF0MzlTYWFNN1lrVnNBREtUQTJDZXhyNXJyKzNFL3hqRGdKalE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjc2NjU1NzI4ODY6NDZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDEwNzYyNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdWZVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR1ZlLmpzb24iOiAie1wia2V5RGF0YVwiOlwibC9jWUF6WUhqQXFYL0hPd2EyZEVuOWh2d2M2bVNoeFd6TVpLbWxYdXpxOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODM3MjMzNTQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDEwNzYyNTE4MFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Av3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
