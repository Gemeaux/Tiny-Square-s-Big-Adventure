// restore function

function restore () {
	
	return 0;
	
}

// 1464 林士傑

function lin_shi_jei () {
	
create_entry(0  , 0, "bottom");

create_solid_platform(0 , 20 , 11 , 5);

create_solid_platform(30 , 0 , 10 , 450);

for (var i = 0; i < 3; i++) {
	
	create_spikes((i % 2) * 15 , 25 + 45 * (i + 1) * (i + 1) , 3 , "top");
	
	create_spikes((i % 2) * 15 , 35 + 45 * (i + 1) * (i + 1) , 3 , "bottom");
	
	create_spikes(15 - (i % 2) * 5 , 30 + 45 * (i + 1) * (i + 1) , 1 , (i % 2)?("left"):("right"));
	
	create_solid_platform((i % 2) * 15 , 30 + 45 * (i + 1) * (i + 1) , 15 , 5);
	
}

create_spikes(0 , 495 , 6 , "top");

create_solid_platform(100 , 50 , 10 , 450);

create_solid_platform(25 , 480 , 75 , 20);

create_checkpoints(60, 450 , "horizontal");

create_water_pool(40 , 0 , 60 , 440);

create_solid_platform(40 , 440 , 40 , 10);

for (var i = 0; i < 6; i++) {
	
	create_lava_pool(40 + (i % 2) * 20 , 430 - (75 - i * 5) * i , 40 , 10);
	
}

create_solid_platform(100 , 0 , 15 , 10);

create_checkpoints(105, 10 , "horizontal");

create_solid_platform(100 , 40 , 15 , 10);

create_turret(50 , 0 , 40 , 80 , 60 , 90 , 50);
create_solid_platform(100 , 50 , 865 , 10);
create_saw(25 , [[800 ,50] , [200 , 50]] , 20);
create_saw(25 , [[200 ,50] , [800 , 50]] , 20);
create_saw(25 , [[850 ,0] , [150 , 0]] , 20);
create_saw(25 , [[150 ,0] , [850 , 0]] , 20);
create_saw(25 , [[900 ,0] , [900 , 70]] , 5);
create_spikes(500 , 45 , 1 , "top");
create_spikes(945 , 45 , 4 , "top");
create_checkpoints(965 , 50 , "vertical");
create_solid_platform(995 , 50 , 5 , 5);
create_water_pool(965 , 0 , 35 , 500);
create_solid_platform(955 , 50 , 10 , 350);
create_turret(965 , 500 , 965 , 50 , 25 , 350 , 150);
create_turret(1000 , 500 , 980 , 50 , 25 , 350 ,150);
create_checkpoints(960 , 400 , "horizontal");

//create_solid_platform(855 , 90 , 10 , 410)

for (var i = 0; i < 4; i++) {
	
	create_solid_platform(855 , 85 - ((i != 0) * 10) + 105 * i , 10 , 45 - (i == 0) * 10);
	
	create_solid_platform(855 , 160 + 105 * i , 10 , 25);
	
	create_solid_platform(845 , 150 + 105 * i , 30 , 10);
	
	create_solid_platform(865 , 180 + 105 * i , 90 , 10);
	
}

create_solid_platform(865 , 85 , 90 , 10);
create_solid_platform(890 , 430 , 75 , 35);
create_spikes(865 , 400 , 7 , "right");
create_spikes(865 , 400 , 20 , "bottom");
create_water_pool(865 ,465 , 100 , 35);
create_spikes(890 , 465 , 15 , "bottom");
create_spikes(965 , 395 , 1 , "right");
create_portals(885 , 470 , "top" , 885 , 295 , "bottom");
create_portals(885 , 360 , "top" , 970 , 450 , "left");
create_portals(845 , 330 , "top" , 970 , 450 , "left");
create_portals(925 , 325 , "left" , 885 , 190 , "bottom");
create_portals(885 , 255 , "top" , 970 , 450 , "left");
create_portals(845 , 225 , "top" , 885 ,95 , "bottom");
create_portals(925 , 220 , "left" , 970 , 450 , "left");
create_portals(885 , 150 , "top" , 970 , 450 , "left");
create_portals(845 , 120 , "top" , 970 , 450 , "left");
create_portals(925 , 120 , "left" , 925 , 55 , "left");
create_portals(845 , 435 , "top" , 970 , 450 , "left");
create_checkpoints(855, 60 , "horizontal");
create_solid_platform(825 , 60 , 10 , 420);
create_solid_platform(795 , 80 , 10 , 420);
create_water_pool(805 ,60 , 50 , 440);
create_lava_pool(835 , 60 , 5 , 50);
create_lava_pool(835 , 180 , 10 ,30);
create_lava_pool(835 , 285 , 10 , 30);
create_lava_pool(835 , 390 , 10 , 30);
create_lava_pool(815 , 475 , 10 , 5);
create_lava_pool(805 , 440 , 10 , 5);
create_lava_pool(805 , 370 , 10 , 5);
create_lava_pool(805 , 300 , 10 , 5);
create_lava_pool(805 , 230 , 10 , 5);
create_lava_pool(805 , 160 , 10 , 5);
create_lava_pool(805 , 90 , 10 , 5);
create_lava_pool(815 , 405 , 10 , 5);
create_lava_pool(815 , 335 , 10 , 5);
create_lava_pool(815 , 265 , 10 , 5);
create_lava_pool(815 , 195 , 10 , 5);
create_lava_pool(815 , 125 , 10 , 5);
create_solid_platform(150 , 90 , 655 , 10);
create_solid_platform(620 , 80 , 160 , 10);
create_solid_platform(440 , 80 , 160 , 10);
create_solid_platform(150 , 80 , 270 , 10);
create_spikes(150 , 75 , 1 , "top");

create_lava_pool(145 , 90 , 5 , 360);

create_lava_pool(110 , 90 , 5 , 410);

for (var i = 0; i < 10; i++) {
	
	create_lava_pool(115 + (i % 2) * 20 , 130 + 35 * i , 10 , 5);
	
}

create_solid_platform(150 , 405 , 580 , 5);

create_solid_platform(150 , 395 , 115 , 10);

create_lava_pool(265 , 395 , 460 , 10);

create_checkpoints(115, 95 , "vertical");

create_water_pool(110 ,60 , 40 , 440);

create_lava_pool(115 , 495, 680 , 5);

create_water_pool(150 , 410, 645 , 90);

create_solid_platform(150 , 100 , 45 , 295);

// lava mine field

create_lava_pool(160 , 480, 5 , 5);
create_lava_pool(170 , 460, 5 , 5);
create_lava_pool(180 , 430, 5 , 5);
create_lava_pool(190 , 470, 5 , 5);
create_lava_pool(200 , 410, 5 , 5);
create_lava_pool(210 , 420, 5 , 5);
create_lava_pool(220 , 440, 5 , 5);
create_lava_pool(230 , 460, 5 , 5);
create_lava_pool(240 , 450, 5 , 5);
create_lava_pool(260 , 490, 5 , 5);
create_lava_pool(260 , 410, 5 , 5);
create_lava_pool(280 , 450, 5 , 5);
create_lava_pool(280 , 470, 5 , 5);
create_lava_pool(300 , 420, 5 , 5);
create_lava_pool(300 , 460, 5 , 5);
create_lava_pool(330 , 440, 5 , 5);
create_lava_pool(330 , 470, 5 , 5);
create_lava_pool(330 , 490, 5 , 5);

// left spike pillar

create_solid_platform(370 , 490, 5 , 10);
create_spikes(375 , 490 , 2 , "right");
create_spikes(365 , 490 , 2 , "left");
create_spikes(370 , 485 , 1 , "top");
create_solid_platform(370 , 410, 5 , 50);
create_spikes(375 , 410 , 10 , "right");
create_spikes(365 , 410 , 10 , "left");
create_spikes(370 , 460 , 1 , "bottom");

// right spike pillar

create_solid_platform(410 , 410, 5 , 10);
create_spikes(415 , 410 , 2 , "right");
create_spikes(405 , 410 , 2 , "left");
create_spikes(410 , 420 , 1 , "bottom");
create_solid_platform(410 , 450, 5 , 50);
create_spikes(415 , 450 , 10 , "right");
create_spikes(405 , 450 , 10 , "left");
create_spikes(410 , 445 , 1 , "top");
create_checkpoints(410 , 420 , "horizontal");

create_saw(10 , [[430 ,430] , [470 , 470]] , 3);
create_saw(10 , [[470 ,430] , [430 , 470]] , 3);
create_saw(10 , [[480 ,480] , [540 , 420]] , 3);
create_saw(10 , [[480 ,420] , [540 , 480]] , 3);

for (var i = 0; i < 3; i++) {
	
	create_solid_platform(550 + 75 * i , 415 + (i % 2) * 25 , 50 , 50);
	
	create_spikes(550 + 75 * i , 410 + (i % 2) * 25 , 10 , "top");
	
	create_spikes(550 + 75 * i , 465 + (i % 2) * 25 , 10 , "bottom");
	
	create_spikes(545 + 75 * i , 415 + (i % 2) * 25 , 10 , "left");
	
	create_spikes(600 + 75 * i , 415 + (i % 2) * 25 , 10 , "right");
	
}

create_checkpoints(777.5 , 390 , "horizontal");

create_solid_platform(775 , 420 , 20 , 10);
create_solid_platform(785 , 410 , 10 , 10);

for (var i = 0; i < 9; i++) {
	
	create_solid_platform(775 - (i % 2) * 20 - i * 2 , 380 - i * 25 , 10 , 10);
	
}
    create_solid_platform(740  , 150 , 10 , 10)

for (var i = 0; i < 7; i++) {
	
	create_solid_platform(270 + i * 65  , 130 + (i % 2) * 10 , 30 , 10);
	
}

create_solid_platform(225 , 140 , 5 , 230);
create_solid_platform(220 , 130 , 15 , 10);

create_solid_platform(230 , 155 , 500 , 5);
create_solid_platform(725 , 160 , 5 , 245);

create_spikes(195 , 100 , 59 , "right");
create_spikes(220 , 140 , 46 , "left");

create_spikes(230 , 150 , 100 , "top");
create_spikes(730 , 155 , 50 , "right");

create_checkpoints(225 , 100 , "horizontal");

create_water_pool(230 , 160 , 145 , 145);
create_water_pool(230 , 305 , 35 , 90);

create_water_pool(375 , 160 , 200 , 45);

create_water_pool(575 , 160 , 150 , 145);
create_water_pool(675 , 305 , 50 , 50);
create_spikes(230 , 160 , 99 , "bottom" );
create_spikes(230 , 160 , 42 , "right" );
create_spikes(720 , 160 , 39 , "left" );
for (var i = 0; i < 3; i++) {
	
	for (var j = 0; j < 2 - (i % 2) * 1; j++) {
		
		create_solid_platform(400 + j * 100 + (i % 2) * 50 , 230 + 50 * i, 50 , 5);
		
		create_solid_platform(400 + j * 100 + (i % 2) * 50 , 275 + 50 * i, 50 , 5);
		
		create_solid_platform(400 + j * 100 + (i % 2) * 50 , 230 + 50 * i, 5 , 50);
		
		create_solid_platform(445 + j * 100 + (i % 2) * 50 , 230 + 50 * i, 5 , 50);
		
		create_spikes(400 + j * 100 + (i % 2) * 50 , 225 + 50 * i, 10 , "top");
		
		create_spikes(400 + j * 100 + (i % 2) * 50 , 280 + 50 * i, 10 , "bottom");
		
		create_spikes(395 + j * 100 + (i % 2) * 50 , 230 + 50 * i, 10 , "left");
		
		create_spikes(450 + j * 100 + (i % 2) * 50 , 230 + 50 * i, 10 , "right");
		
	}
	
}

create_turret(425 , 255 , 225 , 155 , 150 , 150 , 5);
create_turret(475 , 305 , 225 , 155 , 500 , 215 , 5);
create_turret(525 , 355 , 675 , 155 , 50 , 215 , 5);
create_turret(425 , 355 , 225 , 155 , 50 , 215 , 5);
create_turret(525 , 255 , 575 , 155 , 150 , 150 , 5);

create_saw(15 , [[250 , 205] , [350 , 305]] , 5);
create_saw(15 , [[275 , 180] , [375 , 280]] , 5);
create_saw(15 , [[575 , 280] , [675 , 180]] , 5);
create_saw(15 , [[700 , 205] , [600 , 305]] , 5);

create_exit(685 , 360 , "top");

create_solid_platform(685 , 390 , 30 , 10);
	
}

// 1457 戴廷宇

function dai_ting_yu () {

create_entry(102.5 , 40 , "top");

create_solid_platform(0 , 160 , 1000 , 10);
create_solid_platform(0 , 330, 1000 , 10);

create_solid_platform(235 , 0 , 20 , 500);
create_solid_platform(490 , 0 , 20 , 500);
create_solid_platform(745 , 0 , 20 ,500);

//1
create_portals(0 , 8 , "right" , 460 , 8 , "left");
create_portals(0 , 46 , "right" , 715 , 178 , "left");
create_portals(0 , 84 , "right" , 205 , 348 , "left");
create_portals(0 , 122 , "right" , 460 , 348 , "left");
//2
create_portals(0 , 178 , "right" , 205 , 8 , "left");
create_portals(0 , 216 , "right" , 460 , 178 , "left");
create_portals(0 , 254 , "right" , 460 , 386 , "left");
create_portals(0 , 292 , "right" , 715 , 8 , "left");
//3
create_portals(0 , 348 , "right" , 715 , 386 , "left");
create_portals(0 , 386 , "right" , 715 , 254 , "left");
create_portals(0 , 424 , "right" , 205 , 178 , "left");
create_portals(0 , 462 , "right" , 970 , 8 , "left");
//4
create_portals(255 , 8 , "right" , 205 , 46 , "left");
create_portals(255 , 46 , "right" , 205 , 216 , "left");
create_portals(255 , 84 , "right" , 715 , 348 , "left");
create_portals(255 , 122 ,"right" , 970 , 46 , "left");
//5
create_portals(255 , 178 , "right" , 970 , 178 , "left");
create_portals(255 , 216 , "right" , 460 , 84 , "left");
create_portals(255 , 254 , "right" , 205 , 254, "left");
create_portals(255 , 292 , "right" , 715 , 46 , "left");
//6
create_portals(255 , 348 , "right" , 460 , 216 , "left");
create_portals(255 , 386 , "right" , 205 , 84 , "left");
create_portals(255 , 424 , "right" , 715 , 216 , "left");
create_portals(255 , 462 , "right" , 970 , 84 , "left");
//7
create_portals(510 , 8 , "right" , 970 , 216 , "left");
create_portals(510 , 46 , "right" , 205 , 292 , "left");
create_portals(510 , 84 , "right" , 205 , 386 , "left");
create_portals(510 , 122 , "right" , 460 , 46 , "left");
//8
create_portals(510 , 178 , "right" , 205 , 462 , "left");
create_portals(510 , 216 , "right" , 460 , 254 , "left");
create_portals(510 , 254 , "right" , 205 , 122 , "left");
create_portals(510 , 292 , "right" , 970 , 254 , "left");
//9
create_portals(510 , 348 , "right" , 205 , 424 , "left");
create_portals(510 , 386 , "right" , 460 , 292 , "left");
create_portals(510 , 424 , "right" , 460 , 462 , "left");
create_portals(510 , 462 , "right" , 970 , 122 ,"left");
//10
create_portals(765 , 8 , "right" , 715 , 84 , "left");
create_portals(765 , 46 , "right" , 460 , 424 , "left");
create_portals(765 , 84 , "right" , 715 , 424 , "left");
create_portals(765 , 122 , "right" , 970 , 292 , "left");
//11
create_portals(765 , 178 , "right" , 460 , 122 , "left");
create_portals(765 , 216 , "right" , 955 , 340 , "bottom");
create_portals(765 , 254 , "right" , 715 , 122 , "left");
create_portals(765 , 292 , "right" , 715 , 462 , "left");

// 205 , 460 , 715 , 970

for (var i = 0; i < 4; i++) {
	
	for (var j = 0; j < 3; j++) {
		
		for (var k = 0; k < 3; k++) {
		// 235 160
			create_solid_platform(65 + k * 15 + i * (235 + 20) , 125 - k * 30 + j * (160 + 10) , 105 - k * 30 , 5);
			
		}
		
	}
	
}

create_saw(15 , [[780 , 485] , [985 , 485]] , 15);
create_saw(15 , [[780 , 355] , [985 , 485]] , 15);
create_exit(870, 470 , "top");
	
}

// 1459 羅禾筑

function lwo_ha_zhoo () {

create_entry(30 , 420 , "top");

create_exit(945 , 450 , "top");

create_portals(80 , 455 , "top" , 30 , 320 , "top");

create_lava_pool(0 , 490 , 1000 , 10);

create_solid_platform(65 , 485 , 60 , 15);

create_solid_platform(910 , 100 , 10 , 400);

create_solid_platform(940 , 480 , 40 , 20);
	
create_turret(1000 , 300 , 100 , 110 , 900 , 390 , 100);

for (var i = 0; i < 9; i++) {
    
    for (var j = 0; j < 9; j++) {
        
        create_solid_platform(10 + 100 * j + (i % 2) * 40 , 50 + 50 * i , 70 , 10);
        
        if (i == 8) {
            
            continue;
            
        }
        
        create_solid_platform(50 + 100 * j + (i % 2) * 60 , 60 + 50 * i , 10 , 40);
        
        create_spikes(60 + 100 * j + (i % 2) * 60 , 55 + 50 * i , 9 , "right");
        
        create_spikes(45 + 100 * j + (i % 2) * 60 , 60 + 50 * i , 9 , "left");
        
    }
    
}
	
for (var i = 0; i < 4; i++) {
	
	create_checkpoints(180 + i * 200 , 252.5 , "vertical");
	
}

create_portals(150 , 420 , "top" , 30 , 220 , "top");
create_portals(250, 420 , "top" , 30 , 120 , "top");
create_portals(350 , 420 , "top" , 90 , 70 , "top");
create_portals(450,420  , "top" , 190 , 70 , "top");
create_portals(550, 420 , "top" , 290 , 70 , "top");
create_portals(650, 420 , "top" , 390 , 70 , "top");
create_portals(750 , 420 , "top" , 490 , 70 , "top");
create_portals(850 , 420 , "top" , 590 , 70 , "top");
create_portals(870 , 370 , "top" , 690 , 70 , "top");
create_portals(870 , 270 , "top" , 790 , 70 , "top");
create_portals(870 , 170 , "top" , 890, 70 , "top");
	
}

// 1464 曾子韓

function zheng_zhi_han () {

create_entry(10,120,"top");
create_exit(850,10,"top");
create_solid_platform(0,150.5,90,25);
create_solid_platform(130,150.5,85,25);
create_solid_platform(230,120.5,70,30);
create_solid_platform(360,120.5,110,30);
create_solid_platform(70.5,230,100,20);
create_solid_platform(70.5,250,20,30);
create_solid_platform(10,280,80.5,20);
create_solid_platform(10,330,20,50);
create_solid_platform(279,210,90,30);
create_solid_platform(320,450,150,20);
create_solid_platform(30,470,30,30);
create_solid_platform(185,280,80,10);
create_solid_platform(165,320,80,50);
create_solid_platform(280,330,80,50);
create_solid_platform(70,375,60,30);
create_solid_platform(250,480,30,20);
create_solid_platform(269,480,30,20);
create_solid_platform(0,430,30,20);
create_solid_platform(750,0,10,500);
create_solid_platform(720,130,30,300);
create_solid_platform(460,0,60,480);
create_portals(100,470,"top",720,470,"top");
create_portals(680,20,"top",970,470,"top");
create_lava_pool(299,480,331,20);
create_water_pool(90,150.5,39.99,79.99);
create_water_pool(0,175,90,200)
create_spikes(225,125.5,5,"left");
create_spikes(130,175.5,17,"bottom");
create_spikes(65.5,240,8,"left");
create_spikes(60,470,6,"right");
create_spikes(245,480,4,"left");
create_spikes(165,315,16,"top");
create_spikes(160,320,10,"left");
create_spikes(245,320,10,"right");
create_spikes(165,370,16,"bottom");
create_spikes(455,156,10,"left");
create_spikes(90,225,8,"top");
create_spikes(455,220,10,"left");
create_spikes(455,275,10,"left");
create_spikes(455,330,10,"left");
create_spikes(455,385,10,"left");
create_turret(450,110,0,100,450,20,10);
create_turret(450,215,0,215,450,20,19);
create_turret(450,273,0,273,450,20,18);
create_turret(450,327.5,300,327.5,122.5,20,17);
create_turret(450,383.5,0,383.5,450,20,16);
create_turret(0,180,0,280,90,10);
create_turret(0,386,450,328,16);
create_saw(15 , [[50 , 360],[50 , 370]] ,5);
create_saw(15 , [[180 , 280],[70 , 350]] ,19);

create_solid_platform(630.5,480,50,20);
create_solid_platform(630.5,470,20,5);
create_solid_platform(610,450,20,20);
create_solid_platform(500,440,108.25,20);
create_solid_platform(610,405,50,10);
create_solid_platform(650,399,10,10);
create_solid_platform(500,370,108.25,20);
create_solid_platform(610,335,50,10);
create_solid_platform(650,329,10,70);
create_solid_platform(500,300,108.25,20);
create_solid_platform(610,265,50,10);
create_solid_platform(650,259,10,70);
create_solid_platform(500,230,108.25,20);
create_solid_platform(610,195,50,10);
create_solid_platform(650,109,10,178);
create_solid_platform(500,160,108.25,20);
create_solid_platform(610,125,50,10);
create_solid_platform(670,99,50,10);
create_solid_platform(610,74,50,10);
create_solid_platform(670,50,50,10);
create_solid_platform(650,99,30,45);
create_solid_platform(610,60,10,30)
create_turret(713,140,530,146,150,35,35);
create_turret(713,210,530,196,150,35,35);
create_turret(713,280,530,266,150,35,35);
create_turret(713,350,530,336,150,35,35);
create_solid_platform(608,167.5,7,5);
create_solid_platform(645,167.5,5,5);
create_checkpoints(615,167.5,"vertical");
create_solid_platform(645,415,5,20);
create_checkpoints(645,435,"horizontal");
create_solid_platform(645,465,5,5);

create_portals(765,470,"top",765,110,"bottom");
create_solid_platform(765,180,115,10);
create_solid_platform(870,180,10,290);
create_solid_platform(920.01,180,10,290);
create_solid_platform(920.01,180,125,10);
create_solid_platform(870,145,65,10);
create_solid_platform(870,120,20,30);
create_solid_platform(830,120,60,10);
create_solid_platform(830,95,20,30);
create_solid_platform(750,90,100,20);
create_solid_platform(870,70,120,10);
create_solid_platform(840,39,120,10);
create_water_pool(870,180,60,290);
create_spikes(760,40,10,"right");
	
}

// 1464 周沐謙

function zhou_mooh_chien () {

create_entry(0,0,"bottom")

create_exit(970,470,"top")

create_solid_platform(0 , 60 , 50,40);
create_solid_platform(50 , 80, 120, 20);
create_solid_platform(170 , 60, 100, 40);
create_solid_platform(270 , 80, 100, 20);
create_solid_platform(400 , 0, 10, 150);
create_solid_platform(90 , 150, 320, 20);
create_solid_platform(200 , 130, 100, 20);
create_solid_platform(120 , 110, 80, 40);
create_solid_platform(70 , 100, 20, 70);

create_turret(200 , 10 , 50 , 0 , 350 , 130 , 30);


create_portals(90 , 120, "top" , 0 , 150 , "right");
create_solid_platform(100 , 300, 100, 30);
create_solid_platform(0 , 280, 100, 20);
create_solid_platform(200 , 330, 100, 30);
create_lava_pool(200 , 305 , 100, 25);
create_solid_platform(300 , 300, 150, 30);
create_saw(10 , [[100 , 300] , [400 , 300]] , 7);
create_saw(10 , [[90 , 300] , [410 , 300]] , 9);
create_solid_platform(430 , 10, 20, 290);
create_solid_platform(450 , 10, 400, 20);
create_saw(10 , [[500 , 0] , [500 , 80]] , 9);
create_saw(10 , [[570 , 0] , [570 , 80]] , 9);
create_saw(10 , [[640 , 0] , [640 , 80]] , 9);
create_saw(10 , [[710 , 0] , [710 , 80]] , 9);
create_saw(10 , [[780 , 0] , [780 , 80]] , 9);
create_solid_platform(830 , 30, 70, 20);
create_solid_platform(880 , 0, 20, 50);
create_portals(850 , 0, "top" , 0 , 470 , "top");



create_turret(470 , 220 , 10 , 450 , 980 , 50 , 1);
create_turret(490 , 220 , 10 , 450 , 980 , 50 , 1);
create_turret(510 , 220 , 10 , 450 , 980 , 50 , 1);

create_water_pool(410 , 0 , 20, 300);
create_water_pool(200 , 480 , 300, 20);
create_solid_platform(180 , 480, 20, 20);
create_solid_platform(500 , 480, 20, 20);
	
}

// 1468 朱顯宇

function zhoo_zhian_yu () {

create_entry(50 , 100 ,"top");
create_exit(965 , 0 ,"bottom");
create_solid_platform( 75 , 0 , 5 , 470);
create_solid_platform( 50, 130 , 30 , 10);
create_spikes( 0 , 150 , 125 , "right");
create_water_pool( 0 , 300 , 1000 , 200 );
create_spikes( 0 , 495 , 200 , "top");
create_spikes( 80 , 300 , 184 , "bottom");
create_saw( 15 , [[230 , 320] , [300 , 480]] , 23);
create_saw( 15 , [[200 , 480] , [230 , 320]] , 17);
create_solid_platform( 350 , 300 , 5 , 470);
create_portals( 320 , 350 , "left" , 355 , 380 , "right");
create_turret( 75 , 140 , 0 , 140 , 150 , 340 , 5);
create_solid_platform(355 , 375 , 50 , 5);
create_checkpoints(400 , 380 , "horizontal");
create_solid_platform(355 , 410 , 50 , 5);
create_turret(500 , 300 , 380 , 200 , 100 , 1000 , 10);
create_turret(650 , 500 , 460 , 300 , 150 , 1000 , 12);
create_turret(800 , 300 , 540 , 200 , 200 , 1000 , 14);
create_turret(950 , 500 , 760 , 300 , 1000 , 1000 , 15);
create_portals(970 , 390 , "left" , 200 , 100 , "top");
create_checkpoints(170 , 170 , "horizontal");
create_solid_platform( 80 , 200 , 95 , 10 );
create_solid_platform( 230 , 0 , 10 , 190 );
create_solid_platform( 170 , 130 , 60 , 10 );
create_solid_platform( 170 , 140 , 5 , 30 );
create_solid_platform( 300 , 100 , 100 , 100 );
create_solid_platform( 500 , 100 , 100 , 100 );
create_solid_platform( 700 , 100 , 100 , 100 );
create_spikes( 300 , 200 , 20 , "bottom");
create_spikes( 500 , 200 , 20 , "bottom");
create_spikes( 700 , 200 , 20 , "bottom");
create_water_pool(240 , 0 , 1000 , 280);
create_spikes( 80 , 275 , 184 , "top");
create_turret( 550 , 50 , 240 , 0 , 280 , 261 , 15);

create_solid_platform( 80 , 280 , 1000 , 20);

for (var i = 0; i < 4; i++) {
	
	create_solid_platform(800 + i * 50 , 30 - (i % 2) * 30 , 10 , 250);
	
	create_spikes(810 + i * 50 , 30 - (i % 2) * 30 , 50 , "right");
	
	create_spikes(845 + i * 50 , 0 + (i % 2) * 30 , 50 , "left");
	
}

create_spikes(995 , 0 , 6 , "left");

create_solid_platform(700 , 0 , 5 , 35);

create_solid_platform(700 , 65 , 5 , 35);

create_checkpoints(700 , 35 , "horizontal");
	
}

// 1464 顏子茗

function iang_zhi_ming () {

create_entry(10,60,"bottom")

create_exit(970,400,"top")

create_solid_platform(960,430,40,10)

create_solid_platform(0,165,50,10)

create_lava_pool(0,480,1000,20)

create_spikes(0,60,22,"right")

create_solid_platform(0,50,50,10)

create_saw(15,[[175,200],[900,200]],2)

for (var i = 0; i < 5; i++) {
    
    create_solid_platform(100 + 100 * i , 150 , 50 , 10);
	
	create_solid_platform(150 + 100 * i , 180 , 50 , 10);
    
}

create_solid_platform(0,200,600,10)

create_solid_platform(600,0,10,200)
create_solid_platform(60,115,140,10)
create_solid_platform(250,115,200,10)
create_solid_platform(50,40,10,85)
create_solid_platform(50,0,10,10)
create_solid_platform(510,115,100,10)
create_solid_platform(90,50,475,10)
create_water_pool(50,50,550,75)
create_spikes(90 ,60 , 20 , "bottom")
create_spikes(60,110 , 20 , "top")

create_saw(15,[[70,70],[175,100],[300,85],[500,70],[200,85]],5)
create_turret(250 , 60, 150 , 60, 350 , 75, 30)
create_lava_pool(510 , 100 , 90, 20);
create_solid_platform(550,30,30,10)
create_portals(570 , 0 , "left" , 550 , 400 , "top")
create_turret(500 ,0, 500 , 0, 10 , 50, 500)
create_turret(400 ,0, 400, 0, 10, 50,500)
create_turret(300 ,0, 300 , 0, 10 , 50, 300)
create_solid_platform(250,30,30,5)
create_solid_platform(220,25,30,5)
create_solid_platform(200,40,5,10)
create_solid_platform(200,0,5,10)
create_spikes(205 ,40 , 2 , "right")
create_spikes(205 ,0 ,2 , "right")
create_solid_platform(150,30,40,5)
create_solid_platform(90,30,40,5)
create_spikes(90,45 , 20 , "top")
create_spikes(0,45 , 10 , "top")
create_spikes(0,0 , 10 , "bottom")
create_portals(10 , 10, "right" , 620 , 0 , "bottom")
create_solid_platform(0,5,10,40)
create_solid_platform(525,430,80,5)
create_solid_platform(700,50,10,200)
create_solid_platform(610,110,50,10)
create_turret(610 ,130, 700,130 , 0, 10 , 50, 300)
create_solid_platform(650,150,50,10)
create_solid_platform(610,190,50,10)
create_turret(700 ,180,610,180 , 0, 10 , 50, 300)
create_solid_platform(525,240,175,10)
create_solid_platform(525,240,10,190)
create_solid_platform(595,300,10,130)
create_spikes(535,250 ,36 , "right")
create_spikes(590,300 ,26 , "left")
create_water_pool(600,200,100,50)
create_solid_platform(100,250,430,10)
create_solid_platform(100,240,40,10)
create_solid_platform(170,240,40,10)
create_solid_platform(240,240,40,10)
create_solid_platform(310,240,40,10)
create_solid_platform(380,240,40,10)
create_solid_platform(450,240,40,10)

create_solid_platform(100,250,10,170)

create_solid_platform(0,450,110,10)

for (var i = 0; i < 6; i++) {
	
	create_solid_platform(60 - (i % 2) * 60,250 + i * 30,40,10)
	
}

for (var i = 0; i < 3; i++) {
	
	create_solid_platform(205 + i * 80,410 - i * 20,20,20 + i * 20);
	
}

create_solid_platform(440,340,80,110)
	
create_portals(140 , 420, "top" , 200, 260 , "bottom")
create_portals(200 , 380, "top" , 280, 260 , "bottom")
create_portals(280 , 360, "top" , 360, 260 , "bottom")
create_portals(360 , 340, "top" , 440, 260 , "bottom")
	
create_solid_platform(135 , 450 , 40 , 10);

create_portals(440 , 310, "top" , 950, 0 , "bottom")


create_solid_platform(480,340,20,110)
create_solid_platform(700,250,10,110)
create_solid_platform(700,360,300,10)

for (var i = 0; i < 3; i++) {
	
	for (var j = 0; j < 3; j++) {
		
		create_solid_platform(710 + i * 90,130 + j * 100,40,10)
		
	}
	
}

create_portals(715 , 300, "top" , 805, 200 , "top")
create_portals(805 , 300, "top" , 715, 200 , "top")
create_portals(895 , 300, "top" , 895, 200 , "top")
create_portals(715 , 160, "bottom" , 895, 100, "top")
create_portals(805 , 160, "bottom" , 715, 100, "top")
create_portals(895 , 160, "bottom" , 805, 100, "top")
create_portals(715 , 60, "bottom" , 550, 435, "bottom")
create_portals(805 , 60, "bottom" , 0, 170, "right")
create_portals(895 , 60, "bottom" , 970, 370, "bottom")
	
for (var i = 0; i < 3; i++) {
	
	for (var j = 0; j < 2; j++) {
		
		create_solid_platform(710 + i * 90,50 + j * 100,40,10);
		
	}
	
}

create_saw(10 , [[0 , 300] , [50 , 300]] , 4)
create_saw(10 , [[90 , 330] , [50 , 330]] , 4)
create_saw(10 , [[0 , 360] , [50 , 360]] , 4)
create_saw(10 , [[90 , 390] , [50 , 390]] , 4)
create_spikes(210,245 , 7 , "top")
create_spikes(140,245 , 7 , "top")
create_spikes(280,245 , 7 , "top")
create_spikes(350,245 , 7 , "top")
create_spikes(420,245 , 7 , "top")
create_checkpoints(555 , 0 , "horizontal")
create_checkpoints(480 , 210 , "horizontal")
create_checkpoints(102.5 , 420 , "horizontal")
	
}
		
// BloodAppraiser (completed)
		
function bloodappraiser () {// 950 450
			
	create_entry(920 , 435 , "top");
			
	create_exit(50 , 35 , "top");

	for (var j = 0; j < 5; j++) {

		// platforms

		// sides

		create_solid_platform(0 , 465 - j * 100 , 200 , 35);

		create_solid_platform(800 , 465 - j * 100 , 200 , 35);

		create_solid_platform(0 , 400 - j * 100 , 200 , 35);

		create_solid_platform(800 , 400 - j * 100 , 200 , 35);

		// steppes

		for (var i = 0; i < 4; i++) {

			create_solid_platform(295 + i * 120 , 465 - j * 100 , 50 , 20);

		}

		// checkpoints
		
		create_checkpoints(860 , 435 - j * 100 , "horizontal");
		
		// portals

		if (j == 4) {
			continue;
		}

		create_portals(50 , 435 - j * 100 , "top" , 920 , 335 - j * 100 , "top");
				
		// spikes
				
		create_spikes(200 , 370 - j * 100 , 12 , "right");
				
		create_spikes(795 , 370 - j * 100 , 12 , "left");

	}

	create_saw(15 , [[250 , 340] , [750 , 340]] , 15);

	create_saw(15 , [[250 , 240] , [500 , 240]] , 15);

	create_saw(15 , [[500 , 240] , [750 , 240]] , 15);

	create_saw(15 , [[250 , 140] , [410 , 140]] , 15);

	create_saw(15 , [[420 , 140] , [580 , 140]] , 15);

	create_saw(15 , [[590 , 140] , [750 , 140]] , 15);

	create_saw(15 , [[250 , 40] , [375 , 40]] , 15);

	create_saw(15 , [[375 , 40] , [500 , 40]] , 15);

	create_saw(15 , [[500 , 40] , [625 , 40]] , 15);

	create_saw(15 , [[625 , 40] , [750 , 40]] , 15);

	// spikes

	create_spikes(0 , 495 , 200 , "top");
			
}


