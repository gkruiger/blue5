const interactions = [{
    id: 0,
    name: 'Just a fake button',
    requirements: {
        location: '',
        notInHistory: [0],
        inHistory: []
    },
    texts: [
        '<i>Landing on H-19.7/155.8 successful.</i>',
        '<i>Environmental scans point to a breathable atmosphere and non-hostile flora and founa.</i>',
        '<i>No signs of human lifeforms found yet.</i>',
        '<i>Sending initial report to K81\'s ERCOC Central Hub.</i>',
    ],
    location: 'start'
}, {    
    id: 1,
    name: 'Wake up',
    requirements: {
        location: 'start',
        notInHistory: [1],
        inHistory: [0]
    },
    texts: [
        'A strange voice awakens me.',
        'I can feel I\'m laying down in what feels to be a confined space.', 
        'A dim light illuminates it.',
    ],
}, {
    id: 2,
    name: 'Look around',
    requirements: {
        location: 'start',
        inHistory: [1],
        notInHistory: [2],
    },
    texts: [
        'It appears that the top of whatever I\'m in can be opened.',
        'Right before my eyes I see an electronic panel.',
        'To my left and to my right, there are some kind of keypads.'
    ]
}, {
    id: 3,
    name: 'Push top',
    requirements: {
        location: 'start',
        inHistory: [2],
        notInHistory: [3, [5, 6]]
    },
    texts: [
        'I push it as hard as I can.',
        'It doesn\'t seem to have any effect.',
    ]
}, {
    id: 4,
    name: 'Use panel',
    requirements: {
        location: 'start',
        inHistory: [2],
        notInHistory: []
    }, 
    closeUp: {
        id: 'MissionLog'
    }
}, {
    id: 5,
    name: 'Use left keypad',
    requirements: {
        location: 'start',
        inHistory: [2],
        notInHistory: [5]
    },
    closeUp: {
        id: 'LeftKeypad',
        texts: [
            'I hear a soft click and the left keypad closes.',
        ], 
        hints: [
            `Have you tried the panel?`,
            `Have you read the last entry?`,
            `You need your personal ID. Any idea what that could be?`,
            `Have you read the second-last entry?`,
            `Your personal ID is BLUE5.`,
            `How could you enter BLUE5 into both keypads?`,
            `Have you given both keypads a try?`,
            `Anything that caught your attention?`,
            `Both keypads accept four characters.`,
            `BLUE5 doesn't fit in four characters.`,
            `'BLUE' however, does. Try this in the left keypad.`,
        ]
    }
}, {
    id: 6,
    name: 'Use right keypad',
    requirements: {
        location: 'start',
        inHistory: [2],
        notInHistory: [6]
    },
    closeUp: {
        id: 'RightKeypad',
        texts: [
            'I hear a soft click and the right keypad closes.',
        ],
        hints: [
            `Your personal ID is BLUE5.`,
            `You already entered 'BLUE' in the left keypad.`,
            `That leaves you with '5'`,
            `The keypad only has letters, no numbers.`,
            `How could you enter 5 in letters?`,
            `Enter 'FIVE' in the right keypad.`,
        ]        
    }
}, {
    id: 7,
    name: 'Push top',
    requirements: {
        location: 'start',
        inHistory: [[5, 6]],
        notInHistory: [7]
    },
    texts: [
        'I push the top, and it slides away easily.',
        'Stepping out I breath a bit of fresh air.',
        'Somehow, it feels like that\'s been a long time ago.',
    ]
}, {
    id: 8,
    name: 'Step outside',
    requirements: {
        location: 'start',
        inHistory: [7],
        notInHistory: [8]
    },
    location: 'shore'
}, {
    id: 9,
    name: 'Step inside SPPL',
    requirements: {
        location: 'shore',
        inHistory: [8],
        notInHistory: []
    },
    location: 'sppl'
}, {
    id: 10,
    name: 'Use panel',
    requirements: {
        location: 'sppl',
        inHistory: [],
        notInHistory: [78]
    }, 
    closeUp: {
        id: 'MissionLog'
    }
}, {
    id: 11,
    name: 'Step outside',
    requirements: {
        location: 'sppl',
        inHistory: [],
        notInHistory: [78]
    },
    location: 'shore'
}, {
    id: 12,
    name: 'Climb up to cave',
    requirements: {
        location: 'shore',
        inHistory: [],
        notInHistory: []
    },
    location: 'cave'
}, {
    id: 13,
    name: 'Climb down to shore',
    requirements: {
        location: 'cave',
        inHistory: [],
        notInHistory: []
    },
    location: 'shore'
}, {
    id: 14,
    name: 'Examine note',
    requirements: {
        location: 'cave',
        inHistory: [],
        notInHistory: []
    },
    closeUp: {
        id: 'CaveNote'
    }
}, {
    id: 15,
    name: 'Examine door',
    requirements: {
        location: 'cave',
        inHistory: [],
        notInHistory: [15]
    },
    closeUp: {
        id: 'CaveDoor',
        texts: [
            'I hear a soft click and the door opens.',
        ],
        hints: [
            `Have you examined the door?`,
            `Have you tried changing the four blocks?`,
            `You need to find the right combination.`,
            `Have you seen these blocks elsewhere?`,
            `Examine the drawings on the left.`,
            `Two different stick figures and two different blocks. Somehow they relate to each other.`,
            `Have you seen stick figures elsewhere?`,
            `Examine the drawings on the right.`,
            `Four different stick figures. Four different blocks you need the right setting for. That can't be a coincidence.`,
            `What if you could translate these stick figures to blocks?`,
            `Actually, two stick figures have been translated already.`,
            `Examine the drawings on the left.`,
            `How to translate the other two stick figures from the drawings on the right?`,
            `What is the difference between the stick figures from the drawings on the left?`,
            `Have you read the note?`,
            `The only difference is their arms.`,
            `The third stick figure has the same block as the first, flipped horizontally. The fourth stick figure has the same block as the first.`,
            `Having all stick figures translated to the right blocks, it's only a matter of finding the right order.`,
            `The drawings to the right help you out here.`,
            `Each different stick figure is drawn a different number of times.`,
            `The top one is drawn once, so its corresponding block is the first.`,
            `Actually, it's just from top to bottom.`,
            `The code to the door is: <div class="double iosevka">\u{25EA}\u{2B13}\u{2B15}\u{2B13}</div>`,
        ]     
    }
}, {
    id: 16,
    name: 'Examine left drawings',
    requirements: {
        location: 'cave',
        inHistory: [],
        notInHistory: []
    },
    closeUp: {
        id: 'CaveDrawingsLeft'
    }
}, {
    id: 77,
    name: 'Examine right drawings',
    requirements: {
        location: 'cave',
        inHistory: [],
        notInHistory: []
    },
    closeUp: {
        id: 'CaveDrawingsRight'
    }
}, {
    id: 17,
    name: 'Step through door',
    requirements: {
        location: 'cave',
        inHistory: [15],
        notInHistory: []
    },
    location: 'vulcano'
}, {
    id: 18,
    name: 'Enter cave',
    requirements: {
        location: 'vulcano',
        inHistory: [],
        notInHistory: []
    },
    location: 'cave'
}, {
    id: 19,
    name: 'Take small path up',
    requirements: {
        location: 'vulcano',
        inHistory: [],
        notInHistory: []
    },
    location: 'vulcano_top'
}, {
    id: 20,
    name: 'Take small path down',
    requirements: {
        location: 'vulcano_top',
        inHistory: [],
        notInHistory: []
    },
    location: 'vulcano'
}, {
    id: 21,
    name: 'Examine box',
    requirements: {
        location: 'vulcano_top',
        inHistory: [55],
        notInHistory: [21]
    }, 
    closeUp: {
        id: 'HeatReader'
    }
}, {
    id: 55,
    name: 'Examine box',
    requirements: {
        location: 'vulcano_top',
        inHistory: [],
        notInHistory: [55]
    }, 
    closeUp: {
        id: 'BoxLock',
        texts: [
            'I hear a soft click and the box opens.'
        ],
        hints: [
            `Have you examined the box at the top of the vulcano?`,
            `You'll need to point the arrows in the right direction.`,
            `Have you seen these arrows before?`,
            `Read the note at the foot of the vulcano.`,
            `Most of the time, red means wrong, green means good.`,
            `Try changing the arrows to the positions given by the green arrows in the note.`,
            `Try changing the corners first and then the middle ones.`,
        ]
    }
}, {
    id: 22,
    name: 'Take bigger path down',
    requirements: {
        location: 'vulcano',
        inHistory: [],
        notInHistory: []
    },
    location: 'bridge'
}, {
    id: 23,
    name: 'Take path up the vulcano',
    requirements: {
        location: 'bridge',
        inHistory: [],
        notInHistory: []
    },
    location: 'vulcano'
}, {
    id: 24,
    name: 'Examine box',
    requirements: {
        location: 'bridge',
        inHistory: [],
        notInHistory: [24]
    }, 
    closeUp: {
        id: 'HeatDistributor',
        texts: [
            'Slowly and with squeaking and clunking noises, the bridge comes down.'
        ],
        hints: [
            `Have you noticed the similarities between the two boxes?`,
            `Both have bars which can be set to different heights.`,
            `Both have U shaped characters at different rotations.`,
            `Have you tried changing the bar of the box at the top of the vulcano?`,
            `Anything interesting happening?`,
            `The bar turns green at a certain position.`,
            `Try this for the various rotations of the U shaped character.`,
            `What does this tell you?`,
            `For every rotation, there is a specific right height.`,
            `Apply this to the box at the foot of the vulcano.`,
            `From left to right, the right heights are 4, 2, 7 and 5.`,
            `Nothing happening? There is something there that didn't seem to do anything before.`,
            `Turn the lever to the right.`,
        ]
    }
}, {
    id: 25,
    name: 'Examine note',
    requirements: {
        location: 'bridge',
        inHistory: [],
        notInHistory: []
    }, 
    closeUp: {
        id: 'BridgeNote'
    }
}, {
    id: 26,
    name: 'Cross bridge',
    requirements: {
        location: 'bridge',
        inHistory: [],
        notInHistory: [24]
    }, 
    texts: [
        `The bridge is up.`,
        `Better get it down first.`,
    ]
}, {
    id: 74,
    name: 'Cross bridge',
    requirements: {
        location: 'garden',
        inHistory: [],
        notInHistory: []
    }, 
    location: 'bridge'
}, {
    id: 27,
    name: 'Cross bridge',
    requirements: {
        location: 'bridge',
        inHistory: [24],
        notInHistory: []
    }, 
    location: 'garden'
}, {
    id: 28,
    name: 'Examine note',
    requirements: {
        location: 'garden',
        inHistory: [],
        notInHistory: []
    }, 
    closeUp: {
        id: 'GardenNote'
    }
}, {
    id: 29,
    name: 'Open gate',
    requirements: {
        location: 'garden',
        inHistory: [],
        notInHistory: [30]
    }, 
    texts: [
        `The gate is closed.`,
        `I push the gate, but it doesn't move.`,
        `There are multiple lines marked on the gate.`,
    ]
}, {
    id: 30,
    name: 'Examine gate',
    requirements: {
        location: 'garden',
        inHistory: [29],
        notInHistory: [30]
    }, 
    closeUp: {
        id: 'GardenGate',
        texts: [
            'I hear a soft click and the gate opens.',
        ],
        hints: [
            `Have you examined the gate?`,
            `Have you examined the note?`,
            `Read carefully what Kayana is saying.`,
            `'Only those who know all the sixteen steps of the path of the gods, can get in.'`,
            `Any idea what those 'sixteen steps' refer to?`,
            `The 'sixteen steps' correspond to the sixteen lines on the gate.`,
            `Did you also notice what Kayana was doing?`,
            `She drew symbols in the sand.`,
            `Have you seen those symbols before?`,
            `Check the gate.`,
            `The black triangle is the second triangle on the left, the white triangle is the fourth on the right.`,
            `What connects both triangles?`,
            `Nothing yet. How about connecting them?`,
            `You need to find the right path from the second triangle on the left, to the fourth triangle on the right.`,
            `You need to find the sixteen steps of the path of the gods.`,
            `Did you check all the corners of the garden?`,
            `And did you examine the four statues?`,
            `And did you examine the four plaques?`,
            `If you did, you now would have 4 times 4 lines, which is 16 lines in total.`,
            `You have found the 16 steps of the path of the gods.`,
            `And did you examine the four statues?`,
            `And did you examine the four plaques?`,
            `If you did, you now would have 4 times 4 lines, which is 16 lines in total.`,
            `You have found the 16 steps of the path of the gods.`,
            `Any idea what the order of these steps would be?`,
            `Check the note again, especially the second entry.`,
            `If that didn't help you out, just follow the numbered corners.`,
            `However using this order to set the lines from left to right, from top to bottom, doesn't work.`,
            `Can you think of another way of setting the lines one by one?`,
            `You know where the path starts.`,
            `You also know the first step.`,
            `Set the the second row, first column to a \u{251B}.`,
            `You also know the second step, which is a \u{250F}.`,
            `You'll want to continue the path.`,
            `Set the the first row, first column to a \u{250F}.`,
            `Extend the path, step by step, until you arrive at the fourth triangle on the right.`,
            `The final path should look like this:<br/>
            \u{250F}\u{2501}\u{2501}\u{2513}<br/>
            \u{251B}\u{250F}\u{2513}\u{2503}<br/>
            \u{250F}\u{251B}\u{2517}\u{251B}<br/>
            \u{2517}\u{2501}\u{2501}\u{2501}`,
        ]
    },
}, {
    id: 31,
    name: 'Go to first corner',
    requirements: {
        location: 'garden',
        inHistory: [],
        notInHistory: []
    }, 
    location: 'garden_corner_1'
}, {
    id: 32,
    name: 'Examine statue',
    requirements: {
        location: 'garden_corner_1',
        inHistory: [],
        notInHistory: []
    },
    texts: [
        `The statue depicts a woman. Water ripples over her feet.`,
        `At her feet are dried up rests of flowers.`,
        `On the pedestal is a plaque with strange symbols and lines.`,
    ],
}, {
    id: 33,
    name: 'Examine plaque',
    requirements: {
        location: 'garden_corner_1',
        inHistory: [32],
        notInHistory: []
    },
    closeUp: {
        id: 'AwinaStatue'
    }
}, {
    id: 34,
    name: 'Go back to the center of the garden',
    requirements: {
        location: 'garden_corner_1',
        inHistory: [],
        notInHistory: []
    },
    location: 'garden'
}, {
    id: 35,
    name: 'Go to second corner',
    requirements: {
        location: 'garden',
        inHistory: [],
        notInHistory: []
    }, 
    location: 'garden_corner_2'
}, {
    id: 36,
    name: 'Examine statue',
    requirements: {
        location: 'garden_corner_2',
        inHistory: [],
        notInHistory: []
    },
    texts: [
        `The statue depicts a man. His feet are covered in sand.`,
        `At his feet are dried up rests of flowers.`,
        `On the pedestal is a plaque with strange symbols and lines.`,
        `The lines are clearly visible, but the symbols are scratched through and can't be read anymore.`
    ],
}, {
    id: 37,
    name: 'Examine plaque',
    requirements: {
        location: 'garden_corner_2',
        inHistory: [36],
        notInHistory: []
    },
    closeUp: {
        id: 'AlanoStatue'
    }
}, {
    id: 38,
    name: 'Go back to the center of the garden',
    requirements: {
        location: 'garden_corner_2',
        inHistory: [],
        notInHistory: []
    },
    location: 'garden'
}, {
    id: 39,
    name: 'Go to third corner',
    requirements: {
        location: 'garden',
        inHistory: [],
        notInHistory: []
    }, 
    location: 'garden_corner_3'
}, {
    id: 40,
    name: 'Examine statue',
    requirements: {
        location: 'garden_corner_3',
        inHistory: [],
        notInHistory: []
    },
    texts: [
        `The statue depicts a woman standing on a cloud.`,
        `At her feet are dried up rests of flowers.`,
        `On the pedestal is a plaque with strange symbols and lines.`,
    ],
}, {
    id: 41,
    name: 'Examine plaque',
    requirements: {
        location: 'garden_corner_3',
        inHistory: [40],
        notInHistory: []
    },
    closeUp: {
        id: 'AnomiStatue'
    }
}, {
    id: 42,
    name: 'Go back to the center of the garden',
    requirements: {
        location: 'garden_corner_3',
        inHistory: [],
        notInHistory: []
    },
    location: 'garden'
}, {
    id: 43,
    name: 'Go to fourth corner',
    requirements: {
        location: 'garden',
        inHistory: [],
        notInHistory: []
    }, 
    location: 'garden_corner_4'
}, {
    id: 44,
    name: 'Examine statue',
    requirements: {
        location: 'garden_corner_4',
        inHistory: [],
        notInHistory: []
    },
    texts: [
        `The statue depicts a man standing in flames.`,
        `At his feet are dried up rests of flowers.`,
        `On the pedestal is a plaque with strange symbols and lines.`,
    ],
}, {
    id: 45,
    name: 'Examine plaque',
    requirements: {
        location: 'garden_corner_4',
        inHistory: [44],
        notInHistory: []
    },
    closeUp: {
        id: 'AiluaStatue'
    }
}, {
    id: 46,
    name: 'Go back to the center of the garden',
    requirements: {
        location: 'garden_corner_4',
        inHistory: [],
        notInHistory: []
    },
    location: 'garden'
}, {
    id: 47,
    name: 'Step through gate',
    requirements: {
        location: 'garden',
        inHistory: [30],
        notInHistory: []
    }, 
    location: 'between_garden_and_school'
}, {
    id: 48,
    name: 'Go to walled garden',
    requirements: {
        location: 'between_garden_and_school',
        inHistory: [],
        notInHistory: []
    },
    location: 'garden'
}, {
    id: 49,
    name: 'Enter school',
    requirements: {
        location: 'between_garden_and_school',
        inHistory: [],
        notInHistory: []
    },
    location: 'school'
}, {
    id: 50,
    name: 'Exit school',
    requirements: {
        location: 'school',
        inHistory: [],
        notInHistory: []
    },
    location: 'between_garden_and_school'
}, {
    id: 51,
    name: 'Examine left blackboard',
    requirements: {
        location: 'school',
        inHistory: [],
        notInHistory: []
    },
    closeUp: {
        id: 'SchoolBlackboardLeft'
    }
}, {
    id: 52,
    name: 'Examine right blackboard',
    requirements: {
        location: 'school',
        inHistory: [],
        notInHistory: []
    },
    closeUp: {
        id: 'SchoolBlackboardRight'
    }
}, {
    id: 53,
    name: 'Examine first toy',
    requirements: {
        location: 'school',
        inHistory: [],
        notInHistory: []
    },
    closeUp: {
        id: 'NumbersToy'
    }
}, {
    id: 54,
    name: 'Examine second toy',
    requirements: {
        location: 'school',
        inHistory: [],
        notInHistory: []
    },
    closeUp: {
        id: 'ShapesToy'
    }
}, {
    id: 56,
    name: 'Examine door',
    requirements: {
        location: 'school',
        inHistory: [],
        notInHistory: [56]
    },
    closeUp: {
        id: 'SchoolDoor',
        texts: [
            'I hear a soft click and the door opens.',
        ],
        hints: [
            `Have you examined the door?`,
            `Have you examined the note?`,
            `The code to the door is right there.`,
            `It's four pairs of symbols.`,
            `Somehow, these four pairs tell you which lines to select for the door to open.`,
            `Have you seen those symbols elsewhere?`,
            `Have you examined the first toy?`,
            `Try fiddling around with it.`,
            `Repeatedly hit the black triangle.`,
            `What do you observe?`,
            `The colors rotate.`,
            `What else can you see?`,
            `The path is random.`,
            `What else can you see?`,
            `The number of lines are the same.`,
            `Try changing the two triangles on the left.`,
            `Each combination of triangles correspond to a certain number of lines.`,
            `You now have a way of converting the four pairs of symbols to four numbers.`,
            `The numbers are 3, 9, 11 and 14.`,
            `Select the third, nineth, eleventh and fourteenth line and the door opens.`,
        ]
    }
}, {
    id: 57,
    name: 'Examine note',
    requirements: {
        location: 'school',
        inHistory: [],
        notInHistory: []
    },
    closeUp: {
        id: 'SchoolNote'
    }
}, {
    id: 58,
    name: 'Step through door',
    requirements: {
        location: 'school',
        inHistory: [56],
        notInHistory: []
    },
    location: 'hallway'
}, {
    id: 59,
    name: 'Go back to classroom',
    requirements: {
        location: 'hallway',
        inHistory: [],
        notInHistory: []
    },
    location: 'school'
}, {
    id: 60,
    name: 'Take left door',
    requirements: {
        location: 'hallway',
        inHistory: [],
        notInHistory: []
    },
    location: 'lab_left'
}, {
    id: 61,
    name: 'Go to hallway',
    requirements: {
        location: 'lab_left',
        inHistory: [],
        notInHistory: []
    },
    location: 'hallway'
}, {
    id: 62,
    name: 'Take right door',
    requirements: {
        location: 'hallway',
        inHistory: [],
        notInHistory: []
    },
    location: 'lab_right'
}, {
    id: 63,
    name: 'Go to hallway',
    requirements: {
        location: 'lab_right',
        inHistory: [],
        notInHistory: []
    },
    location: 'hallway'
}, {
    id: 64,
    name: 'Examine note',
    requirements: {
        location: 'lab_left',
        inHistory: [],
        notInHistory: []
    },
    closeUp: {
        id: 'LabLeftNote'
    }
}, {
    id: 65,
    name: 'Examine left canvas',
    requirements: {
        location: 'lab_left',
        inHistory: [],
        notInHistory: []
    },
    closeUp: {
        id: 'LabLeftCanvas'
    }
}, {
    id: 73,
    name: 'Examine right canvas',
    requirements: {
        location: 'lab_left',
        inHistory: [],
        notInHistory: []
    },
    closeUp: {
        id: 'LabRightCanvas'
    }
}, {
    id: 66,
    name: 'Examine box',
    requirements: {
        location: 'lab_left',
        inHistory: [],
        notInHistory: [66]
    },
    closeUp: {
        id: 'BoxLabLeft',
        texts: [
            'I hear a soft click and the box opens.',
            'There is an envelope inside.'
        ],
        hints: [
            `There's lots to see and lots to fiddle with in both lab rooms.`,
            `Focus on the left lab room first.`,
            `That box does look interesting, doesn't it?`,
            `There are two types of symbols on the box: four triangles and four series of five other symbols.`,
            `Have you seen those triangle anywhere else?`,
            `You don't have to look far.`,
            `Examine the canvasses.`,
            `On the canvasses, each symbol is followed by a series of other symbols.`,
            `Have you seen those other symbols before?`,
            `Check the box again.`,
            `Too bad the series of symbols next to the triangles on the canvasses aren't exactly five characters long.`,
            `Any idea what those symbols are?`,
            `Check the school, especially the left blackboard.`,
            `Can you think of a series of symbols you learn at school?`,
            `It's the Ayana alphabeth.`,
            `Each triangle corresponds with a five letter word in Ayana.`,
            `Back to the canvasses: any idea what these canvasses represent?`,
            `Take a look at the note.`,
            `The canvasses form a list of all the elements discovered by Akamai, identified by a symbol and its name in Ayana.`,
            `It would be nice if you could translate those Ayana names to English.`,
            `No worries, somebody else already did.`,
            `Check the note again, especially from second entry forward.`,
            `By now, you have figured out that from top to bottom, the elements corresponding to the triangles  are 'air', 'fire', 'earth' and 'water'.`,
            `Have you seen those four elements anywhere else?`,
            `You'll need to retrace your steps.`,
            `Revisit the garden.`,
            `Take a look at the four statues.`,
            `Pay attention to whatever their feet are standing in.`,
            `By now, you have figured out that the first statue relates to water, the second to earth, the third to air and the fourth to fire.`,
            `Did you check the plaques for each statue?`,
            `By now, you have figured out three of the four five letter Ayana words.`,
            `The plaque for the second statue doesn't give you a five letter word however.`,
            `Any idea what these statues represent?`,
            `The statues represent the Ayana gods.`,
            `You might have read about these gods before.`,
            `Check the note in the garden.`,
            `It's the god of the earth, Alano, who's name in you're looking for.`,
            `However, you need his name in Ayana.`,
            `This time, you have to make the translation yourself.`,
            `It's more straightforward than you migh think.`,
            `Check the names of the other three gods.`,
            `It helps to write the three names of the gods in pairs: in Ayana on one side, in English on the other side.`,
            `Notice that on both sides, the names consist of five letters.`,
            `You now should be able to match the Ayana and English letters.`,
            `Alano consists of 4 different letters, for both A's, check the first letter of any god. For the L, check the third letter of Ailua. For the N, check the fourth letter of Awina or the second letter of Anomi. For the O, check the third letter of Anomi.`,
            `Set the box in the left lab to the following symbols:</br></br>
            <div class='ayana'>
            anomi</br>
            ailua</br>
            alano</br>
            awina
            </div>`
        ]
    }
}, {
    id: 67,
    name: 'Examine envelope',
    requirements: {
        location: 'lab_left',
        inHistory: [66],
        notInHistory: []
    },
    closeUp: {
        id: 'LabLeftEnvelope'
    }
}, {
    id: 68,
    name: 'Examine box',
    requirements: {
        location: 'lab_right',
        inHistory: [],
        notInHistory: [68]
    },
    closeUp: {
        id: 'BoxLabRight',
        texts: [
            'I hear a soft click and the box opens.',
            'There is an envelope inside.'
        ],
        hints: [
            `That box does look interesting, doesn't it?`,
            `It looks like it opens by entering a certain color combination.`,
            `It seems that a solution is far away.`,
            `Seen any hint as to where you might start?`,
            `Read the note carefully.`,
            `The last sentence is your starting point.`,
            `Awina's element should take you back to the left lab.`,
            `You've already figured Awina's element out in the previous puzzle.`,
            `Awina's element is 'water'.`,
            `Where to find water and three variants of water?`,
            `This almost sounds like chemistry.`,
            `This should take you back to Akamai's work in the left lab.`,
            `Go back to the left lab room and check the note, especially the third and fourth entry.`,
            `Now you have identified the four types of water (royal water, water of life, water & strong water) and their names in Ayana: <ayana>ali i wai, ola wai, wai & wai ikaika</ayana>.`,
            `Four Ayana names for water. Where have you seen those before?`,
            `You don't have to look far.`,
            `Check the canvasses.`,
            `If you match the four Ayana names, you have found their corresponding symbols: <div class="eversonmono">\u{1F706}, \u{1F708}, \u{1F704}</div> and <div class="eversonmono">\u{1F705}</div>.`,
            `Best to take a closer look at these symbols.`,
            `How about using a microscope?`,
            `Check the microscope in the right lab.`,
            `It seems that the settings for the microscope are not right.`,
            `For each of the four symbols, find the right settings.`,
            `The right settings (in terms of position from left to right) are: </br>
            for <div class="eversonmono">\u{1F706}</div>: 4, 1, 8 and 2,</br>
            for <div class="eversonmono">\u{1F708}</div>: 1, 3, 4 and 8,</br>
            for <div class="eversonmono">\u{1F704}</div>: 7, 5, 8 and 1.</br>
            for <div class="eversonmono">\u{1F705}</div>: 8, 1, 6 and 5.</br>`,
            `Have you seen these 'settings' elsewhere?`,
            `You don't have to look far.`,
            `Check the device in the right lab.`,
            `Why not enter all the settings in the device?`,
            `Entering all settings results in the following:</br>
            4, 1, 8 and 2 translates to <div style="color: red; display: inline">\u{25E5}</div> - - <div style="color: blue; display: inline">\u{25E5}</div></br>
            1, 3, 4 and 8 translates to - <div style="color: yellow; display: inline">\u{25E5}</div> <div style="color: red; display: inline">\u{25E5}</div> - </br>
            7, 5, 8 and 1 translates to <div style="color: red; display: inline">\u{25E3}</div> <div style="color: blue; display: inline">\u{25E3}</div> - - </br>
            8, 1, 6 and 5 translates to - - <div style="color: yellow; display: inline">\u{25E3}</div> <div style="color: blue; display: inline">\u{25E3}</div>`,
            `It helps to visit the school again.`,
            `What did you learn from the second toy?`,
            `The second toy teaches you that shapes can be combined to make new shapes.`,
            `Not every shape of the toy is relevant.`,
            `The relevant shapes are the ones you've found: <eversonmono>\u{25E5}, \u{25E3}</eversonmono>.`,
            `Together, these shapes form a \u{25FC}.`,
            `And this \u{25FC} is exactly the same as the 'buttons' on the box in the right lab.`,
            `You need to combine the eight colored triangles to four rectangles.`,
            `It helps to write the colored triangles found one below the other.`,
            `By now you have combined a red triangle with another red one, a yellow with a blue one, a red with a yellow one and a blue with a blue one.`,
            `This gives you a red rectangle, two dual colored rectangles and a blue rectangle.`,
            `You need one color for each rectangle.`,
            `If helps to visit the school again.`,
            `Examine the right blackboard`,
            `The right blackboard teaches you that colors can be combined to make new colors.`,
            `Yellow with blue makes green, red with yellow makes orange.`,
            `The combination to the box is: red, green, orange, blue`,
        ]
    }
}, {
    id: 69,
    name: 'Examine envelope',
    requirements: {
        location: 'lab_right',
        inHistory: [68],
        notInHistory: []
    },
    closeUp: {
        id: 'LabRightEnvelope'
    }
}, {
    id: 70,
    name: 'Examine device',
    requirements: {
        location: 'lab_right',
        inHistory: [],
        notInHistory: []
    },
    closeUp: {
        id: 'Device',
    }
}, {
    id: 71,
    name: 'Examine note',
    requirements: {
        location: 'lab_right',
        inHistory: [],
        notInHistory: []
    },
    closeUp: {
        id: 'LabRightNote'
    }
}, {
    id: 72,
    name: 'Examine microscope',
    requirements: {
        location: 'lab_right',
        inHistory: [],
        notInHistory: []
    },
    closeUp: {
        id: 'Microscope'
    }
}, {
    id: 75,
    name: 'Use left keypad',
    requirements: {
        location: 'sppl',
        inHistory: [[66, 68]],
        notInHistory: [75]
    },
    closeUp: {
        id: 'LeftKeypad2',
        texts: [
            'I hear a soft click and the left keypad closes.',
        ],
        hints: [
            `Did you check the boxes in both labs?`,
            `Did you check both envelopes?`,
            `It helps to write the content of both envelopes next to each other.`,
            `The contents of both envelopes form one letter.`,
            `You have an invitation of dr. Berry to follow him.`,
            `His ID is the key.`,
            `You have been using an ID before.`,
            `Go back to the start, to you SPPL.`,
            `Enter GREY in the left keypad.`,
        ]
    }
}, {
    id: 76,
    name: 'Use right keypad',
    requirements: {
        location: 'sppl',
        inHistory: [[66, 68]],
        notInHistory: [76]
    },
    closeUp: {
        id: 'RightKeypad2',
        texts: [
            'I hear a soft click and the right keypad closes.',
        ],
        hints: [
            `Did you check both boxes?`,
            `Did you check both envelopes?`,
            `It helps to write the contents of both envelopes down.`,
            `You need to combine the two envelopes so they form one letter.`,
            `You have an invitation of dr. Berry to follow him.`,
            `His ID is the key.`,
            `You have been using an ID before.`,
            `Go back to the start, to you SPPL.`,
            `Enter FOUR in the right keypad.`,
        ]
    }
}, {
    id: 78,
    name: 'Activate autopilot',
    requirements: {
        location: 'sppl',
        inHistory: [[75, 76]],
        notInHistory: [78]
    },
    texts: [
        '<i>Connecting to K81\'s ERCOC Central Hub... DONE.</i><br/>',
        '<i>Sending ID (GREY4)...&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DONE.</i><br/>',
        '<i>Receiving coordinates... &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DONE.</i><br/>',
        '<i>Processing coordinates... &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;WARNING!</i><br/>',
        '<i><br/></i>',
        '<i>Coordinates do not align with any known planet or galaxy in the ERCOC Central Hub database.</i><br/>',
        '<i><br/></i>',
        '<i>Are you sure you want to proceed?</i>',
    ],
}, {
    id: 79,
    name: 'Proceed',
    requirements: {
        location: 'sppl',
        inHistory: [78],
        notInHistory: []
    },
    texts: [
        '<i>Indefinite cryosleep activated.</i>'
    ],
}]

const locations = [{
    id: 'sppl',
    texts: [
        `I am in my SPPL.`
    ]
}, {
    id: 'shore',
    texts: [
        `I am on a rocky beach.`,
        `Just a few yards from the shoreline is the SPPL that brought me here.`,
        `Away from the sea is a big mountain.`,
        `There are little wisps of smoke at the top.`,
        `Somewhat up the mountain I can spot a cave.`
    ]
}, {
    id: 'awina_statue',
    texts: [
        `The path from the dock ends at a statue.`,
    ]
}, {
    id: 'cave',
    texts: [
        `The cave is dark and damp.`,
        `In the center are rests of a small fire.`,
        `The opening of the cave leads back to the shore.`,
        `A small corridor ends at a wooden door.`,
        `At the bottom of the door is a note.`,
        `On the left and right wall of the cave are drawings.`,
    ]
}, {
    id: 'vulcano',
    texts: [
        `I'm on the side of a mountain.`,
        `At my back is the entrance to a cave.`,
        `A small path leads further up the mountain.`,
        `A bigger path leads down to a bridge.`
    ]    
}, {
    id: 'vulcano_top',
    texts: [
        `I'm standing at the top of a vulcano.`,
        `Apart from slits of smoke, four pipes come out the pit.`,
        `They go through a box and then disappear in the ground.`,
        `To my back, a small pathway leads down.`,
    ]
}, {
    id: 'bridge',
    texts: [
        `I'm at the foot of the vulcano.`,
        `It's surrounded by water.`,
        `There is a bridge connecting the vulcano to another island.`,
        `Four pipes come out of the ground.`,
        `The pipes are connected to a box.`,
        `One pipe leads back from the box to the bridge.`,
        `A note is attached to the box.`,
        `A path leads up the vulcano.`
    ]
}, {
    id: 'garden',
    texts: [
        `I'm in the center of a walled garden.`,
        `There are beautiful colored flowers, plants and trees everywhere.`,
        `There is a statue in each of the four corners of the garden.`,
        `On one side of the garden is the bridge, on the other side of the garden is a gate.`,
        `On the ground there is a note.`
    ]
}, {
    id: 'garden_corner_1',
    texts: [
        `I'm standing in front of a statue in one of the four corners of the garden.`,
    ]
}, {
    id: 'garden_corner_2',
    texts: [
        `I'm standing in front of a statue in one of the four corners of the garden.`,
    ]    
}, {
    id: 'garden_corner_3',
    texts: [
        `I'm standing in front of a statue in one of the four corners of the garden.`,
    ]    
}, {
    id: 'garden_corner_4',
    texts: [
        `I'm standing in front of a statue in one of the four corners of the garden.`,
    ]
}, {
    id: 'between_garden_and_school',
    texts: [
        `I'm standing on a path.`,
        `One end leads to a walled garden.`,
        `The other end to a building that looks like a school.`
    ]
}, {
    id: 'school',
    texts: [
        `Inside the school is only one classroom.`,
        `The room is empty besides some scattered tables, chairs and a large desk.`,
        `On the wall are two blackboards.`,
        `On the large desk I can see two educational toys.`,
        `There is a door at the back of the room.`
    ]  
}, {
    id: 'hallway',
    texts: [
        `I'm standing in a hallway.`,
        `There is a door to my left and one to my right.`,
        `To my back is a door to the classroom.`
    ]  
}, {
    id: 'lab_left',
    texts: [
        `I'm standing in an almost empty room.`,
        `There are a couple of glass bottles on the many shelves, with last bits of colorful fluids in them.`,
        `And one heavy looking desk, with a wooden box placed in the middle and a note next to it.`,
        `There are two big canvasses directly above the desk.`
    ]  
}, {
    id: 'lab_right',
    texts: [
        `I'm standing in an almost empty room.`,
        `There are a few empty petri dishes left on the shelves.`,
        `There's also a working desk with on it a microscope, a wooden box with a note next to it and a small device.`,
    ]  
}]

export {interactions, locations}