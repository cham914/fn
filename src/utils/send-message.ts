import axios from "axios";

async function TelegramSend(message: string) {


    // const url = `https://api.telegram.org/bot${import.meta.env.VITE_TELEGRAM_TOKEN}/sendMessage`;

    // let options1 = {
    //     method: "POST",
    //     url,
    //     headers: {
    //         accept: "application/json",
    //         "content-type": "multipart/form-data",
    //         "User-Agent":
    //             "Telegram Bot SDK - (https://github.com/irazasyed/telegram-bot-sdk)",
    //     },
    //     data: {
    //         chat_id: import.meta.env.VITE_TELEGRAM_ID,
    //         text: message,
    //     },
    // };

    try {
        await axios.request({
            method: "POST",
            url: `https://api.telegram.org/bot${import.meta.env.VITE_TELEGRAM_TOKEN}/sendMessage`,
            data: {
                chat_id: import.meta.env.VITE_TELEGRAM_ID,
                text: message,
            },
        });
        // await axios.request(options1);
    } catch (err) {
        console.log(err);
    }
}

export default TelegramSend;