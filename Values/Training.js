const training = [
    {
        id: 1,
        title: "Sprint Surge",
        description: "Designed to build your sprinting endurance, this program features interval training on the track, pushing you to maintain high speeds over longer distances.",
        img: require("../assets/trainings/I1.png"), // replace with the actual path to the icon image asset
        bg: require("../assets/trainings/BG1.png"), // replace with the actual path to the background image asset
        time: 1,
        values: [
            {
                "title": "Calories/h",
                "value": "650/h"
            },
            {
                "title": "Total",
                "value": "45m"
            },
            {
                "title": "Downloads",
                "value": "2890"
            },
            {
                "title": "Start",
                "value": "lvl 2"
            }
        ]
    },
    {
        id: 2,
        title: "Endurance Master",
        description: "This endurance-centric training program is tailored for those looking to increase their stamina on the track. Expect long, steady-paced sessions with incremental speed increases to test and build your endurance over time.",
        img: require("../assets/trainings/I2.png"), // replace with the actual path to the icon image asset
        bg: require("../assets/trainings/BG2.png"), // replace with the actual path to the background image asset
        time: 1,
        values: [
            {
                "title": "Calories/h",
                "value": "500/h"
            },
            {
                "title": "Total",
                "value": "1h"
            },
            {
                "title": "Downloads",
                "value": "3500"
            },
            {
                "title": "Start",
                "value": "lvl 1"
            }
        ]
    },


]

export default training
