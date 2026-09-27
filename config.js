const fs = require('fs');
const dotenv = require('dotenv');

if (fs.existsSync('.env')) {
    dotenv.config({ path: '.env' });
}

module.exports = {

    // =============================
    // DATABASE
    // =============================
    DATABASE_URL:
        process.env.MONGODB_URI ||
        process.env.DATABASE_URL ||
        "",

    // =============================
    // BOT CORE SETTINGS
    // =============================
    OWNER_NUMBER:
        process.env.OWNER_NUMBER ||
        "27783799346",
    
    PREFIX: process.env.PREFIX || ".",

    // =============================
    // GLOBAL BRANDING
    // =============================
    BOT_NAME:
        process.env.BOT_NAME ||
        "PrimeSA_AI",

    OWNER_NAME:
        process.env.OWNER_NAME ||
        "Pro Sahil",

    CAPTION:
        process.env.CAPTION ||
        "POWERED BY PrimeSA_Bot",

    STATUS_MSG:
        process.env.STATUS_MSG ||
        "Hello From PrimeSA_AI",

    NEWSLETTER_JID:
        process.env.NEWSLETTER_JID ||
        "120363406672648713@newsletter",

    MENU_IMG:
        process.env.MENU_IMG ||
        "https://bandaheali-cdn.koyeb.app/bandaheali/smd.jpg",

    // =============================
    // SITE URL FOR PAIR CMD
    // =============================
    SITE_URL:
        process.env.SITE_URL ||
        "https://mr-shaban.vercel.app",

    PORT:
        process.env.PORT ||
        "21604"
};
