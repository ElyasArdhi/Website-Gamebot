var data = [
				{
// first level data goes here.
//consists of 1 monkey along with coordinates.
//for the house, contains a single storey building with single room made from blocks.

					level:0,
					nobirds:4,
					monkey:[
							{
								x:30,
								y:0,
							}
						],
					box:[

//  groundlevel wall  starts here 

							{                
								x:0,
								y:5,
								w:80,
								h:5,
							},


//Groundlevel wall ends here and the left support column start here
              {
                x:0,
                y:45,
                w:5,
                h:40,
              },

// left support column ends here and the right support column starts here               
							
              {
                x:75,
                y:45,
                w:5,
                h:40,
              },

// right support column ends here and the first floor horizontal column starts from here
							{
								x:0,
								y:50,
								w:80,
								h:5,
							}
// first level data complete       
						]
				},
        {
// second level data goes here
//consists of 2 monkeys along with their coordinates
//for the house, contains a double storey building with single room made from blocks.

          level:1,
          nobirds:4,
          monkey:[
              {
                x:30,
                y:0,
              },
              {
                x:30,
                y:45,
              }
            ],
          box:[

//  groundlevel wall  starts here 

              {                
                x:0,
                y:5,
                w:80,
                h:5,
              },

//Groundlevel wall ends here and the left support column start here
              {
                x:0,
                y:45,
                w:5,
                h:40,
              },

// left support column ends here and the right support column starts here               
              
              {
                x:75,
                y:25,
                w:5,
                h:20,
              },
              {
                x:75,
                y:45,
                w:5,
                h:20,
              },

// right support column ends here and the first floor horizontal column starts from here

              {
                x:0,
                y:50,
                w:40,
                h:5,
              },
              {
                x:40,
                y:50,
                w:40,
                h:5,
              },

// first floor horizontal column ends here and left support column for second floor starts here
            
             {
                x:0,
                y:70,
                w:5,
                h:20,
              },
              {
                x:0,
                y:90,
                w:5,
                h:20,
              },
// left support column for the second floor ends here and right support column starts from here

               {
                x:75,
                y:70,
                w:5,
                h:20,
              },
              {
                x:75,
                y:90,
                w:5,
                h:20,
              },            
// right support column ends here and second floor horizontal column starts from here
              
              {
                x:0,
                y:95,
                w:40,
                h:5,
              },
              {
                x:40,
                y:95,
                w:40,
                h:5,
              },

// horizontal column ends here
//second level data ends here

            ]
        },
        {
// third level data goes here.
//consists of 3 monkey along with coordinates.
//for the house, contains a 2 storey building with three room made from blocks.

          level:2,
          nobirds:4,
          monkey:[
              {
                x:30,
                y:0,
              },
              {
                x:110,
                y:0,
              },
              {
                x:110,
                y:50,
              }
            ],
          box:[

//  groundlevel wall for first room starts here 

              {                
                x:0,
                y:5,
                w:40,
                h:5,
              },
              {
                x:40,
                y:5,
                w:40,
                h:5,
              },

//Groundlevel wall ends here and the left support column start here

              {
                x:0,
                y:25,
                w:5,
                h:20,
              },
              {
                x:0,
                y:45,
                w:5,
                h:20,
              },

// left support column ends here and the right support column starts here               
              
              {
                x:75,
                y:25,
                w:5,
                h:20,
              },
              {
                x:75,
                y:45,
                w:5,
                h:20,
              },

// right support column ends here and the first floor horizontal column starts from here

              {
                x:0,
                y:50,
                w:40,
                h:5,
              },
              {
                x:40,
                y:50,
                w:40,
                h:5,
              },

//  groundlevel wall for second room  starts here 
  

              {                
                x:80,
                y:5,
                w:40,
                h:5,
              },
              {
                x:120,
                y:5,
                w:40,
                h:5,
              },

//Groundlevel wall ends here and the left support column start here

              {
                x:80,
                y:25,
                w:5,
                h:20,
              },
              {
                x:80,
                y:45,
                w:5,
                h:20,
              },

// left support column ends here and the right support column starts here               
              
              {
                x:155,
                y:25,
                w:5,
                h:20,
              },
              {
                x:155,
                y:45,
                w:5,
                h:20,
              },

// right support column ends here and the first floor horizontal column starts from here

              {
                x:80,
                y:50,
                w:40,
                h:5,
              },
              {
                x:120,
                y:50,
                w:40,
                h:5,
              },
//first floor ended
//  second floor groundlevel wall  starts here 

              {                
                x:80,
                y:55,
                w:40,
                h:5,
              },
              {
                x:120,
                y:55,
                w:40,
                h:5,
              },

//Groundlevel wall ends here and the left support column start here

              {
                x:80,
                y:75,
                w:5,
                h:20,
              },
              {
                x:80,
                y:95,
                w:5,
                h:20,
              },

// left support column ends here and the right support column starts here               
              
              {
                x:155,
                y:75,
                w:5,
                h:20,
              },
              {
                x:155,
                y:95,
                w:5,
                h:20,
              },

// right support column ends here and the first floor horizontal column starts from here

              {
                x:80,
                y:95,
                w:40,
                h:5,
              },
              {
                x:120,
                y:95,
                w:40,
                h:5,
              }

// third level data complete       
            ]
        },
        {
        level:3,
        nobirds:4,
        monkey:[
              {
                x:30,
                y:0,
              },
              {
                x:110,
                y:0,
              },
              {
                x:30,
                y:50,
              },
              {
                x:110,
                y:50,
              }
            ],
          box:[

//  groundlevel wall  starts here 

              {                
                x:0,
                y:5,
                w:40,
                h:5,
              },
              {
                x:40,
                y:5,
                w:40,
                h:5,
              },

//Groundlevel wall ends here and the left support column start here

              {
                x:0,
                y:25,
                w:5,
                h:20,
              },
              {
                x:0,
                y:45,
                w:5,
                h:20,
              },

// left support column ends here and the right support column starts here               
              
              {
                x:75,
                y:25,
                w:5,
                h:20,
              },
              {
                x:75,
                y:45,
                w:5,
                h:20,
              },

// right support column ends here and the first floor horizontal column starts from here

              {
                x:0,
                y:50,
                w:40,
                h:5,
              },
              {
                x:40,
                y:50,
                w:40,
                h:5,
              },
// first level data complete       
              // groundlevel wall starts here 
              {
                x : 0,
                y : 55,
                w : 40,
                h : 5,
              },
              {
                x : 40,
                y : 55,
                w : 40,
                h : 5,
              },
              //Groundlevel wall ends here and the left support column start here
              {
                x : 0,
                y : 75,
                w : 5,
                h : 20,
              },
              {
                x : 0,
                y : 95,
                w : 5,
                h : 20,
              },
              // left support column ends here and the right support column starts here
              {
                x : 75,
                y : 75,
                w : 5,
                h : 20,
              },
              {
                x : 75,
                y : 95,
                w : 5,
                h : 20,
              },
              // right support column ends here and the first floor horizontal column starts from here
              {
                x : 0,
                y : 100,
                w : 40,
                h : 5,
              },
              {
                x : 40,
                y : 100,
                w : 40,
                h : 5,
              },

              // groundlevel wall starts here 
              {
                x : 80,
                y : 5,
                w : 40,
                h : 5,
              },
              {
                x : 120,
                y : 5,
                w : 40,
                h : 5,
              },
              //Groundlevel wall ends here and the left support column start here
              {
                x : 80,
                y : 25,
                w : 5,
                h : 20,
              },
              {
                x : 80,
                y : 45,
                w : 5,
                h : 20,
              },
              // left support column ends here and the right support column starts here
              {
                x : 155,
                y : 25,
                w : 5,
                h : 20,
              },
              {
                x : 155,
                y : 45,
                w : 5,
                h : 20,
              },
              // right support column ends here and the first floor horizontal column starts from here
              {
                x : 80,
                y : 50,
                w : 40,
                h : 5,
              },
              {
                x : 120,
                y : 50,
                w : 40,
                h : 5,
              },

              // groundlevel wall starts here 
              {
                x : 80,
                y : 55,
                w : 40,
                h : 5,
              },
              {
                x : 120,
                y : 55,
                w : 40,
                h : 5,
              },
              //Groundlevel wall ends here and the left support column start here
              {
                x : 80,
                y : 75,
                w : 5,
                h : 20,
              },
              {
                x : 80,
                y : 95,
                w : 5,
                h : 20,
              },
              // left support column ends here and the right support column starts here
              {
                x : 155,
                y : 75,
                w : 5,
                h : 20,
              },
              {
                x : 155,
                y : 95,
                w : 5,
                h : 20,
              },
              // right support column ends here and the first floor horizontal column starts from here
              {
                x : 80,
                y : 100,
                w : 40,
                h : 5,
              },
              {
                x : 120,
                y : 100,
                w : 40,
                h : 5,
              }
            ]
        },
        {
        level:4,
        nobirds:4,
        monkey:[
              {
                x:30,
                y:0,
              },
              {
                x:110,
                y:0,
              },
              {
                x:30,
                y:50,
              },
              {
                x:110,
                y:50,
              },
              {
                x:190,
                y:0,
              }
            ],
          box:[

//  groundlevel wall  starts here 

              {                
                x:0,
                y:5,
                w:40,
                h:5,
              },
              {
                x:40,
                y:5,
                w:40,
                h:5,
              },

//Groundlevel wall ends here and the left support column start here

              {
                x:0,
                y:25,
                w:5,
                h:20,
              },
              {
                x:0,
                y:45,
                w:5,
                h:20,
              },

// left support column ends here and the right support column starts here               
              
              {
                x:75,
                y:25,
                w:5,
                h:20,
              },
              {
                x:75,
                y:45,
                w:5,
                h:20,
              },

// right support column ends here and the first floor horizontal column starts from here

              {
                x:0,
                y:50,
                w:40,
                h:5,
              },
              {
                x:40,
                y:50,
                w:40,
                h:5,
              },
// first level data complete       
              // groundlevel wall starts here 
              {
                x : 0,
                y : 55,
                w : 40,
                h : 5,
              },
              {
                x : 40,
                y : 55,
                w : 40,
                h : 5,
              },
              //Groundlevel wall ends here and the left support column start here
              {
                x : 0,
                y : 75,
                w : 5,
                h : 20,
              },
              {
                x : 0,
                y : 95,
                w : 5,
                h : 20,
              },
              // left support column ends here and the right support column starts here
              {
                x : 75,
                y : 75,
                w : 5,
                h : 20,
              },
              {
                x : 75,
                y : 95,
                w : 5,
                h : 20,
              },
              // right support column ends here and the first floor horizontal column starts from here
              {
                x : 0,
                y : 100,
                w : 40,
                h : 5,
              },
              {
                x : 40,
                y : 100,
                w : 40,
                h : 5,
              },

              // groundlevel wall starts here 
              {
                x : 80,
                y : 5,
                w : 40,
                h : 5,
              },
              {
                x : 120,
                y : 5,
                w : 40,
                h : 5,
              },
              //Groundlevel wall ends here and the left support column start here
              {
                x : 80,
                y : 25,
                w : 5,
                h : 20,
              },
              {
                x : 80,
                y : 45,
                w : 5,
                h : 20,
              },
              // left support column ends here and the right support column starts here
              {
                x : 155,
                y : 25,
                w : 5,
                h : 20,
              },
              {
                x : 155,
                y : 45,
                w : 5,
                h : 20,
              },
              // right support column ends here and the first floor horizontal column starts from here
              {
                x : 80,
                y : 50,
                w : 40,
                h : 5,
              },
              {
                x : 120,
                y : 50,
                w : 40,
                h : 5,
              },

              // groundlevel wall starts here 
              {
                x : 80,
                y : 55,
                w : 40,
                h : 5,
              },
              {
                x : 120,
                y : 55,
                w : 40,
                h : 5,
              },
              //Groundlevel wall ends here and the left support column start here
              {
                x : 80,
                y : 75,
                w : 5,
                h : 20,
              },
              {
                x : 80,
                y : 95,
                w : 5,
                h : 20,
              },
              // left support column ends here and the right support column starts here
              {
                x : 155,
                y : 75,
                w : 5,
                h : 20,
              },
              {
                x : 155,
                y : 95,
                w : 5,
                h : 20,
              },
              // right support column ends here and the first floor horizontal column starts from here
              {
                x : 80,
                y : 100,
                w : 40,
                h : 5,
              },
              {
                x : 120,
                y : 100,
                w : 40,
                h : 5,
              },
              // groundlevel wall starts here 
              {
              x : 160,
              y : 5,
              w : 40,
              h : 5,
              },
              {
              x : 200,
              y : 5,
              w : 40,
              h : 5,
              },
              //Groundlevel wall ends here and the left support column start here
              {
              x : 160,
              y : 25,
              w : 5,
              h : 20,
              },
              {
              x : 160,
              y : 45,
              w : 5,
              h : 20,
              },
              // left support column ends here and the right support column starts here
              {
              x : 235,
              y : 25,
              w : 5,
              h : 20,
              },
              {
              x : 235,
              y : 45,
              w : 5,
              h : 20,
              },
              // right support column ends here and the first floor horizontal column starts from here
              {
              x : 160,
              y : 50,
              w : 40,
              h : 5,
              },
              {
              x : 200,
              y : 50,
              w : 40,
              h : 5,
              }
            ]
        },
        {
        level:5,
        nobirds:4,
        monkey:[
              {
                x:30,
                y:0,
              },
              {
                x:110,
                y:0,
              },
              {
                x:30,
                y:50,
              },
              {
                x:110,
                y:50,
              },
              {
                x:190,
                y:0,
              }
            ],
          box:[

//  groundlevel wall  starts here 

              {                
                x:0,
                y:5,
                w:40,
                h:5,
              },
              {
                x:40,
                y:5,
                w:40,
                h:5,
              },

//Groundlevel wall ends here and the left support column start here

              {
                x:0,
                y:25,
                w:5,
                h:20,
              },
              {
                x:0,
                y:45,
                w:5,
                h:20,
              },

// left support column ends here and the right support column starts here               
              
              {
                x:75,
                y:25,
                w:5,
                h:20,
              },
              {
                x:75,
                y:45,
                w:5,
                h:20,
              },

// right support column ends here and the first floor horizontal column starts from here

              {
                x:0,
                y:50,
                w:40,
                h:5,
              },
              {
                x:40,
                y:50,
                w:40,
                h:5,
              },
// first level data complete       
              // groundlevel wall starts here 
              {
                x : 0,
                y : 55,
                w : 40,
                h : 5,
              },
              {
                x : 40,
                y : 55,
                w : 40,
                h : 5,
              },
              //Groundlevel wall ends here and the left support column start here
              {
                x : 0,
                y : 75,
                w : 5,
                h : 20,
              },
              {
                x : 0,
                y : 95,
                w : 5,
                h : 20,
              },
              // left support column ends here and the right support column starts here
              {
                x : 75,
                y : 75,
                w : 5,
                h : 20,
              },
              {
                x : 75,
                y : 95,
                w : 5,
                h : 20,
              },
              // right support column ends here and the first floor horizontal column starts from here
              {
                x : 0,
                y : 100,
                w : 40,
                h : 5,
              },
              {
                x : 40,
                y : 100,
                w : 40,
                h : 5,
              },

              // groundlevel wall starts here 
              {
                x : 80,
                y : 5,
                w : 40,
                h : 5,
              },
              {
                x : 120,
                y : 5,
                w : 40,
                h : 5,
              },
              //Groundlevel wall ends here and the left support column start here
              {
                x : 80,
                y : 25,
                w : 5,
                h : 20,
              },
              {
                x : 80,
                y : 45,
                w : 5,
                h : 20,
              },
              // left support column ends here and the right support column starts here
              {
                x : 155,
                y : 25,
                w : 5,
                h : 20,
              },
              {
                x : 155,
                y : 45,
                w : 5,
                h : 20,
              },
              // right support column ends here and the first floor horizontal column starts from here
              {
                x : 80,
                y : 50,
                w : 40,
                h : 5,
              },
              {
                x : 120,
                y : 50,
                w : 40,
                h : 5,
              },

              // groundlevel wall starts here 
              {
                x : 80,
                y : 55,
                w : 40,
                h : 5,
              },
              {
                x : 120,
                y : 55,
                w : 40,
                h : 5,
              },
              //Groundlevel wall ends here and the left support column start here
              {
                x : 80,
                y : 75,
                w : 5,
                h : 20,
              },
              {
                x : 80,
                y : 95,
                w : 5,
                h : 20,
              },
              // left support column ends here and the right support column starts here
              {
                x : 155,
                y : 75,
                w : 5,
                h : 20,
              },
              {
                x : 155,
                y : 95,
                w : 5,
                h : 20,
              },
              // right support column ends here and the first floor horizontal column starts from here
              {
                x : 80,
                y : 100,
                w : 40,
                h : 5,
              },
              {
                x : 120,
                y : 100,
                w : 40,
                h : 5,
              },
              // groundlevel wall starts here 
              {
              x : 160,
              y : 5,
              w : 40,
              h : 5,
              },
              {
              x : 200,
              y : 5,
              w : 40,
              h : 5,
              },
              //Groundlevel wall ends here and the left support column start here
              {
              x : 160,
              y : 25,
              w : 5,
              h : 20,
              },
              {
              x : 160,
              y : 45,
              w : 5,
              h : 20,
              },
              // left support column ends here and the right support column starts here
              {
              x : 235,
              y : 25,
              w : 5,
              h : 20,
              },
              {
              x : 235,
              y : 45,
              w : 5,
              h : 20,
              },
              // right support column ends here and the first floor horizontal column starts from here
              {
              x : 160,
              y : 50,
              w : 40,
              h : 5,
              },
              {
              x : 200,
              y : 50,
              w : 40,
              h : 5,
              },
              // groundlevel wall starts here 
              {
              x : 80,
              y : 105,
              w : 40,
              h : 5,
              },
              {
              x : 120,
              y : 105,
              w : 40,
              h : 5,
              },
              //Groundlevel wall ends here and the left support column start here
              {
              x : 80,
              y : 125,
              w : 5,
              h : 20,
              },
              {
              x : 80,
              y : 145,
              w : 5,
              h : 20,
              },
              // left support column ends here and the right support column starts here
              {
              x : 155,
              y : 125,
              w : 5,
              h : 20,
              },
              {
              x : 155,
              y : 145,
              w : 5,
              h : 20,
              },
              // right support column ends here and the first floor horizontal column starts from here
              {
              x : 80,
              y : 150,
              w : 40,
              h : 5,
              },
              {
              x : 120,
              y : 150,
              w : 40,
              h : 5,
              }
            ]
        }
			];
