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
}, {    id: 1,
    name: 'Wake up',
    requirements: {
        location: 'start',
        notInHistory: [1],
        inHistory: [0]
    },
    texts: [
        'A strange voice awakens me.',
        'I can feel I\'m laying down in what seems to be a confined space.', 
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
} , {
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
        'Stepping out I breathe a bit of fresh air.',
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
        `Apart from slits of smoke, four pipes come out of the pit.`,
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
        `Another pipe leads back from the box to the bridge.`,
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
        `There are still some glass bottles on the many shelves, with last bits of colorful fluids in them.`,
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