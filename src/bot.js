require('dotenv').config();

//const pingCommand = require('./commands/ping');
//const pokemonCommand = require('./commands/pokemon');
const commandsHelper = require('./commands/commands');

const { Client, Intents } = require('discord.js');
const PREFIX = '##13';
const client = new Client({intents: [Intents.FLAGS.GUILDS, 
    Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_PRESENCES],
    partials: ['MESSAGE', 'CHANNEL', 'REACTION']});

client.on('ready', () => {
    console.log(`Bot ${client.user.id} is logged in!`);

    const guild = client.guilds.cache.get(process.env.GUILD_ID);
    const commands = guild.commands;
    // commands.create(pingCommand);
    // commands.create(pokemonCommand);
    commandsHelper.forEach(command => {
        commands.create(command);
    })
});

client.on('messageCreate', message => {
    console.log(`User ${message.author.tag} sent a message: ${message.content}`);

    if (message.content.startsWith(PREFIX)) {
        //DS$ping   1     2
        const [CMD_NAME, ...args] = message.content.trim().substring(PREFIX.length).split(/\s+/);
        if (CMD_NAME === 'ping') {
            //message.reply('pong!');
            message.channel.send('pong!');
        } else if (CMD_NAME === 'pokemon') {
            if (args.length !== 1) {
                message.reply('Incorrect number of arguments! Should be 1!');
            } else {
                message.channel.send(`https://images.pokemontcg.io/${args[0]}/1_hires.png`)
            }
        }
    }
});

client.on('interactionCreate', interaction => {
    if (interaction.isCommand()) {
        const { commandName, options } = interaction;
        // if (commandName === 'ping') {
        //     interaction.reply({
        //         content: 'Pong!'
        //     })
        // } else if ( commandName === 'pokemon') {
        //     const id = options.getString('id');

        //     interaction.reply({
        //         content: https://images.pokemontcg.io/${id}/1_hires.png
        //     })
        // }
        commandsHelper.forEach(command => {
            if (command.name === commandName) {
                command.action(interaction, options);
            }
        })
    }
})



client.login(process.env.DISCORD_BOT_TOKEN);