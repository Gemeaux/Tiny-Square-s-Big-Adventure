// test build

function _test_ () {
	
	for (var i = 0; i < 50; i++) {
		
		create_laser(600 - 10 * i , 450 , 50 , "horizontal" , 100 , 200 , i * 4);
		
	}
	
}
		
//PO YUE
		
function POYUE () {
		
	tiny_square.spawn_point.left = 120;

	tiny_square.spawn_point.top = 420;

	tiny_square.respawn(0);
			
	// center walls
			
	create_solid_platform(250 , 130 , 20 , 240);
			
	create_solid_platform(750 , 130 , 20 , 240);
			
	create_solid_platform(250 , 130 , 520 , 20);
			
	create_solid_platform(250 , 350 , 520 , 20);
			
	// border walls
			
	create_solid_platform(0 , 240 , 250 , 20);
			
	create_solid_platform(750 , 240 , 250 , 20);
			
	create_solid_platform(330 , 0 , 20 , 150);
			
	create_solid_platform(650 , 0 , 20 , 150);
			
	create_solid_platform(330 , 350 , 20 , 150);
			
	create_solid_platform(650 , 350 , 20 , 150);
			
	// center room
			
	// left bottom room
			
	// content
			
	var tmp_left = 30;

	for (var i = 0; i < 2; i++) {

		create_solid_platform(tmp_left + 155 + i * 100  , 340 + i * 110 , 25 , 25);

		create_solid_platform(tmp_left + 140 + i * 100  , 365 + i * 110 , 25 , 15);

		create_solid_platform(tmp_left + 155 + i * 100  , 355 + i * 110 , 25 , 25);

		create_solid_platform(tmp_left + i * 100 , 280 + i * 110 , 85 , 10);

		create_solid_platform(tmp_left + 60 + i * 100 , 280 + i * 110 , 10 , 60);

		create_solid_platform(tmp_left + 60 + i * 100 , 330 + i * 110 , 80 , 10);

		create_water_pool(tmp_left + 80 + i * 100 , 280 + i * 110 , 60 , 50);

		create_water_pool(tmp_left + 70 + i * 100 , 290 + i * 110 , 10 , 40);

		create_spikes(tmp_left + 70 + i * 100 , 340 + i * 110 , 14 , "bottom");

		create_spikes(tmp_left + 180 + i * 100 , 340 + i * 110 , 8 , "right");

		create_spikes(tmp_left + 135 + i * 100 , 365 + i * 110 , 3 , "left");

		create_spikes(tmp_left + 170 + i * 100 , 335 + i * 110 , 2 , "top");

		create_spikes(tmp_left + 70 + i * 100 , 325 + i * 110 , 14 , "top");

	}

	create_solid_platform(tmp_left + 60 , 280 , 10 , 220);
			
	create_checkpoints(tmp_left + 130 , 442.5 , "vertical");

	create_solid_platform(tmp_left + 160 , 450 , 10 , 10);

	create_solid_platform(tmp_left + 160 , 490 , 10 , 10);

	create_solid_platform(tmp_left + 70 , 440 , 60 , 10);
			
	// large pool
			
	create_water_pool(0 , 300 , tmp_left + 60 , 200);
			
	create_checkpoints(0 , 282.5 , "vertical");
			
	for (var i = 0; i < 4; i++) {
				
		create_solid_platform((i % 2 == 1) * 30 , 340 + i * 40 , tmp_left + 30 , 10);
				
		create_spikes((i % 2 == 1) * 30 , 335 + i * 40 , 12 , "top");
				
		create_spikes((i % 2 == 1) * 30 , 350 + i * 40 , 12 , "bottom");
				
		create_spikes((i % 2 == 0) * (tmp_left + 55) , 315 + i * 40 , 12 , (i % 2)?("right"):("left"));
				
	}
				
	create_spikes(0 , 495 , 12 , "top");
			
	// portals
			
	create_portals(60 , 470 , "top" , 115 , 410 , "top");
		
}

// testing map

//_test_();

