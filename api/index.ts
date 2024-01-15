//           ____                ___
//         ,'  , `.            ,--.'|_             ,--,
//      ,-+-,.' _ |            |  | :,'   __  ,-.,--.'|
//   ,-+-. ;   , ||            :  : ' : ,' ,'/ /||  |,     ,--,  ,--,
//  ,--.'|'   |  || ,--.--.  .;__,'  /  '  | |' |`--'_     |'. \/ .`|
// |   |  ,', |  |,/       \ |  |   |   |  |   ,',' ,'|    '  \/  / ;
// |   | /  | |--'.--.  .-. |:__,'| :   '  :  /  '  | |     \  \.' /
// |   : |  | ,    \__\/: . .  '  : |__ |  | '   |  | :      \  ;  ;
// |   : |  |/     ," .--.; |  |  | '.'|;  : |   '  : |__   / \  \  \
// |   | |`-'     /  /  ,.  |  ;  :    ;|  , ;   |  | '.'|./__;   ;  \
// |   ;/        ;  :   .'   \ |  ,   /  ---'    ;  :    ;|   :/\  \ ;
// '---'         |  ,     .-./  ---`-'           |  ,   / `---'  `--`
//                `--`---'                        ---`-'

import sequelize from "./src/db";
import app from "./src/app";

sequelize.sync({ alter: true, force: false }).then(() => {
  app.listen(3001, () => {
    console.log("Wake up, Neo. The Matrix has you...");
  });
});
