
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

                    message: '!help,!ping,!<CHARACHTERNAME>,!<PLAYERNAME>,!haillordgoomy,!goomywiki,!heresy,!micah,!sophia,!eric'

                });

            break;
			
			case 'haillordgoomy':

                bot.sendMessage({

                    to: channelID,

                    message: 'https://pbs.twimg.com/profile_images/495361901119827969/zqIORBgt.jpeg'

                });

            break;
			
			case 'goomywiki':

                bot.sendMessage({

                    to: channelID,

                    message: 'http://goomy.wikia.com/wiki/Goomy_Wiki'

                });

            break;
			
			case 'heresy':

                bot.sendMessage({

                    to: channelID,

                    message: 'https://s-media-cache-ak0.pinimg.com/736x/cb/dc/70/cbdc70cf819a13ac49834ee7849e0beb.jpg'

                });

            break;
			case 'micah':

                bot.sendMessage({

                    to: channelID,

                    message: 'Micah is playing in both Morgan and Shea\'s campaigns. In Morgan\'s he is playing a Rubbish Elf named Sophia Lassalle. Sophia is an outlaw. Fun fact: Sophia dislikes gas masks. In Shea\'s campaign he is playing a human named Eric Rodriguez. Eric is a Soldier subclass Scout. Fun fact: Eric enjoys eating tacos.'

                });

            break;
			case 'eric':

                bot.sendMessage({

                    to: channelID,

                    message: 'Taken at a young age by pirates, he would eventually be rescued by government at 16. Would then work for government for many years as a sniper. He would be fired after punching a senior officer who he suspected had an affair with his wife. After this he would be hired as an assassin for the company luxuria. After many successful years of service, luxuria would eventually have him imprisoned for life, attempting to tie down all loose ends. After 20 years he would escape and begin his hunt to take down the company who betrayed him.'

                });

            break;
			case 'sophia':

                bot.sendMessage({

                    to: channelID,

                    message: 'Born on the junk planet of Alfheim, she would be born into the minority, the Rubbish Elves. This race has been outcast by the main race of the planet, Humans. The humans greatly disliked the Rubbish Elves, and their greed for more land and resources would eventually lead to them attempting to all but wipe out the populations of rubbish elves. Fleeing the planet with her little robot drone, her family dead and her mind scared by the force that hurt her, she would seek a new life elsewhere among the stars.'

                });

            break;

            // Just add any case commands if you want to..

         }

     }

});
