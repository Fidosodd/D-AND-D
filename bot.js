
var Discord = require('discord.io');

var logger = require('winston');

var auth = require('./auth.json');

// Configure logger settings

logger.remove(logger.transports.Console);

logger.add(logger.transports.Console, {

    colorize: true

});

logger.level = 'debug';

// Initialize Discord Bot

var bot = new Discord.Client({

   token: auth.token,

   autorun: true

});

bot.on('ready', function (evt) {

    logger.info('Connected');

    logger.info('Logged in as: ');

    logger.info(bot.username + ' - (' + bot.id + ')');

});

bot.on('message', function (user, userID, channelID, message, evt) {

    // Our bot needs to know if it will execute a command

    // It will listen for messages that will start with `!`

    if (message.substring(0, 1) == '!') {

        var args = message.substring(1).split(' ');

        var cmd = args[0];

       

        args = args.splice(1);

        switch(cmd) {

            // !ping

            case 'ping':

                bot.sendMessage({

                    to: channelID,

                    message: 'Pong!'

                });

            break;
			
			case 'morgan':

                bot.sendMessage({

                    to: channelID,

                    message: 'Morgan is playing in Shea\'s campaign. He is playing a cactus named Specimen A17. A17 is a Soldier subclass Medic. Fun fact: A17 has poor understanding of humor and laughs at seemingly random things.'

                });

            break;
			
			case 'a17':

                bot.sendMessage({

                    to: channelID,

                    message: 'This is a sample bio. A17 is a cactus.'

                });

            break;
			
			case 'help':

                bot.sendMessage({

                    to: channelID,

                    message: '!help,!ping,!<CHARACHTERNAME>,!<PLAYERNAME>'

                });

            break;
			case 'haillordgoomy':

                bot.sendMessage({

                    to: channelID,

                    message: 'https://pbs.twimg.com/profile_images/495361901119827969/zqIORBgt.jpeg'

                });
	 break;
			case 'haillordgoomy':
		bot.sendMessage({

                    to: channelID,

                    message: 'http://goomy.wikia.com/wiki/Goomy_Wiki'

                });
            break;
			
// Just add any case commands if you want to..

         }

     }

});
