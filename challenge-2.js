{
    init: function(elevators, floors) {
        var elevator = elevators[0]; // Let's use the first elevator

        // Whenever the elevator is idle (has no more queued destinations) ...
        //elevator.on("idle", function() {
            // let's go to all the floors (or did we forget one?)
            //elevator.goToFloor(0);
            //elevator.goToFloor(1);
        //});
        
        elevator.on("floor_button_pressed", function(floorNum) {
            if (!elevator.destinationQueue.includes(floorNum)){
                elevator.goToFloor(floorNum);
            }
        })
        
        $.each(floors, function(i, floor) {
            floor.on("up_button_pressed", function() {
                var floorNum = floor.floorNum();
                if (!elevator.destinationQueue.includes(floorNum)){
                    elevator.goToFloor(floorNum);
                }
            });
            floor.on("down_button_pressed", function() {
                var floorNum = floor.floorNum();
                if (!elevator.destinationQueue.includes(floorNum)){
                    elevator.goToFloor(floorNum);
                }
            }); 
        });
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}