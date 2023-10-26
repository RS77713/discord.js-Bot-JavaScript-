const { Constants } = require('discord.js');

module.exports = [{
    name: 'ping',
    description: 'Replies with Pong!',
    action: async function (interaction, options) {
        return interaction.reply({
            content: 'Pong!'
        });
    }
},
{
    name: 'pokemon',
    description: 'Sends a pokemon card to a user',
    options: [{
        name: 'id',
        description: 'Pokemon ID',
        required: true,
        type: Constants.ApplicationCommandOptionTypes.STRING
    }],
    action: async function (interaction, options) {
        const id = options.getString('id');

        return interaction.reply({
            content: `https://images.pokemontcg.io/${id}/1_hires.png`
        })
    }
}]