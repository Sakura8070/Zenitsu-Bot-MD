let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let text = `𝐎𝐖𝐍𝐄𝐑 / 𝐂𝐑𝐄𝐀𝐓𝐎𝐑 :
𝐍𝐊𝐌𝐎𝐃𝐒 𝐎𝐅𝐂

*YT:*
_1, youtube.com/c/NKMODS_
_2, youtube.com/c/NKMODS2.0_
_3, youtube.com/channel/UCTZhhXFVkB4cQmJmZ30vTng_

*Instagram:*
*@nkmods.666_opz*
_instagram.com/nkmods.666_opz_
*@nkmods.ofc*
_instagram.com/nkmods.ofc_`.trim()   
let buttonMessage= {
'document': { url: `https://github.com/NKMODS/Zenitsu-Bot-MD` },
'mimetype': `application/${document}`,
'fileName': `「  𝑯𝒆𝒍𝒍𝒐 𝑾𝒐𝒓𝒍𝒅 」`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://github.com/NKMODS/Zenitsu-Bot-MD',
'mediaType': 2,
'previewType': 'pdf',
'title': 'Best WhatsApp Bot',
'body': wm,
'thumbnail': imagen1,
'sourceUrl': 'https://www.youtube.com/channel/UCSTDMKjbm-EmEovkygX-lCA' }},
'caption': text,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: '𝙼𝙴𝙽𝚄'}, type: 1}, 
{buttonId: `${usedPrefix}script`, buttonText: {displayText: '𝚂𝙲𝚁𝙸𝙿𝚃'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
//let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;𝓷𝓴𝓶𝓸𝓭𝓼⁶⁶⁶ O͏p͏z͏;;;\nFN:𝓷𝓴𝓶𝓸𝓭𝓼⁶⁶⁶ O͏p͏z͏\nORG:𝓷𝓴𝓶𝓸𝓭𝓼⁶⁶⁶ O͏p͏z͏\nTITLE:\nitem1.TEL;waid=5219996125657:+521 999 612 5657\nitem1.X-ABLabel:𝓷𝓴𝓶𝓸𝓭𝓼⁶⁶⁶ O͏p͏z͏\nX-WA-BIZ-DESCRIPTION:[❗] ᴄᴏɴᴛᴀᴄᴛᴀ ᴀ ᴇsᴛᴇ ɴᴜᴍ ᴘᴀʀᴀ ᴄᴏsᴀs ɪᴍᴘᴏʀᴛᴀɴᴛᴇs.\nX-WA-BIZ-NAME:𝓷𝓴𝓶𝓸𝓭𝓼⁶⁶⁶ O͏p͏z͏\nEND:VCARD`
//await conn.sendMessage(m.chat, { contacts: { displayName: '𝓷𝓴𝓶𝓸𝓭𝓼⁶⁶⁶ O͏p͏z͏', contacts: [{ vcard }] }}, {quoted: m})
//const data = global.owner.filter(([id, isCreator]) => id && isCreator)
//await conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|creador|propietario)$/i
export default handler
