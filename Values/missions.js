const missions = [
    {
        id: 1,
        title: "Mission save the President",
        description: "Classic end of the week hike, a variety of medium inclines on a path through a forest.",
        img: require('../assets/missions/IStopwatch.png'),
        bg: require('../assets/missions/BGSaveThePresident.png'),
        time: 1,
        values: [
            {
                "title": "Calories/h",
                "value": "600/h+"
            },
            {
                "title": "Time",
                "value": "1h"
            },
            {
                "title": "Downloads",
                "value": "215"
            },
            {
                "title": "Start",
                "value": "lvl2"
            }
        ]
    },
    {
        id: 2,
        title: "Assassinate the King",
        description: "A covert mission set in a medieval world. Sneak past guards and navigate through the shadows to reach the castle and dethrone the tyrant king.",
        img: require('../assets/missions/IAssasinateTheKing.png'), // Path to the icon image
        bg: require('../assets/missions/BGAssasinateTheKing.png'), // Path to the background image
        time: 1,
        values: [
            {
                "title": "Calories/h",
                "value": "650/h+"
            },
            {
                "title": "Time",
                "value": "1h"
            },
            {
                "title": "Downloads",
                "value": "342"
            },
            {
                "title": "Start",
                "value": "lvl 3"
            }
        ]
    }

]
export default missions
