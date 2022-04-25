module.exports = {
    app: {
        px: 'XXX',
        token: 'OTY4MDQxNzg1MTIzMjc0NzUy.YmZFKg.u8su2iOFcjhcH-o1YDyGRh2RV1c',
        playing: 'by Zerio ❤️'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
