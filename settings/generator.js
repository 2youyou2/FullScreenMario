FullScreenMario.prototype.settings.generator = {
    "possibilities": {
        
        // General obstacles
        "LandObstacleGroup": {
            "width": 40,
            "height": 80,
            "contents": {
                "mode": "Random",
                "direction": "right",
                "children": [{
                    "percent": 25,
                    "type": "Random",
                    "title": "LandObstacleGroupSingleStory"
                }, {
                    "percent": 25,
                    "type": "Random",
                    "title": "LandObstacleGroupDoubleStory"
                }]
            }
        },
        "LandObstacleGroupSingleStory": {
            "width": 40,
            "height": 32,
            "contents": {
                "mode": "Certain",
                "direction": "top",
                "children": [{
                    "type": "Random",
                    "title": "EnemySmall"
                }, {
                    "type": "Random",
                    "title": "Nothing",
                    "sizing": {
                        "height": 12
                    }
                }, {
                    "type": "Random",
                    "title": "SolidSmall"
                }]
            }
        },
        "LandObstacleGroupDoubleStory": { // !
            "width": 40,
            "height": 80,
            "contents": {
                "mode": "Certain",
                "direction": "top"
            }
        },

        // Enemy groups
        "EnemySmall": {
            "width": 8,
            "height": 12,
            "contents": {
                "mode": "Random",
                "direction": "right",
                "children": [{
                    "percent": 45,
                    "type": "Random",
                    "title": "Goomba"
                }, {
                    "percent": 35,
                    "type": "Random",
                    "title": "Koopa"
                }, {
                    "percent": 20,
                    "type": "Random",
                    "title": "Beetle"
                }]
            }
        },
        
        // Solid groups
        "SolidSmall": {
            "width": 8,
            "height": 12,
            "contents": {
                "mode": "Random",
                "direction": "right",
                "children": [{
                    "percent": 70,
                    "type": "Random",
                    "title": "Brick"
                }, {
                    "percent": 30,
                    "type": "Random",
                    "title": "Block"
                }]
            }
        },

        // Characters
        "Goomba": {
            "width": 8,
            "height": 8,
            "contents": {
                "mode": "Certain",
                "direction": "right",
                "snap": "bottom",
                "children": [{
                    "type": "Known",
                    "title": "Goomba"
                }]
            }
        },
        "Koopa": {
            "width": 8,
            "height": 8,
            "contents": {
                "mode": "Random",
                "direction": "right",
                "snap": "bottom",
                "children": [{
                    "percent": 30,
                    "type": "Known",
                    "title": "Koopa",
                }, {
                    "percent": 30,
                    "type": "Known",
                    "title": "Koopa",
                    "arguments": {
                        "smart": true
                    }
                }, {
                    "percent": 20,
                    "type": "Known",
                    "title": "Koopa",
                    "arguments": {
                        "jumping": true
                    }
                }, {
                    "percent": 20,
                    "type": "Known",
                    "title": "Koopa",
                    "arguments": {
                        "smart": true,
                        "jumping": true
                    }
                }]
            }
        },
        "Beetle": {
            "width": 8,
            "height": 8.5,
            "contents": {
                "mode": "Certain",
                "direction": "right",
                "snap": "bottom",
                "children": [{
                    "percent": 100,
                    "type": "Known",
                    "title": "Beetle"
                }]
            }
        },
        
        // Solids
        "Brick": {
            "width": 8,
            "height": 8,
            "contents": {
                "mode": "Certain",
                "direction": "right",
                "snap": "top",
                "children": [{
                    "percent": 95,
                    "type": "Known",
                    "title": "Brick"
                }, {
                    "percent": 5,
                    "type": "Known",
                    "title": "Brick"
                }]
            }
        },
        "Block": {
            "width": 8,
            "height": 8,
            "contents": {
                "mode": "Certain",
                "direction": "right",
                "snap": "top",
                "children": [{
                    "percent": 90,
                    "type": "Known",
                    "title": "Block"
                }, {
                    "percent": 10,
                    "type": "Known",
                    "title": "Block"
                }]
            }
        },
        
        // Misc.
        "Nothing": {
            "width": 8,
            "height": 8,
            "contents": {
                "mode": "Certain",
                "children": []
            }
        }
    }
};