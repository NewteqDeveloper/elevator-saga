{
    init: function(elevators, floors) {
        function floorPress(floor, isUp) {
            console.log(isUp ? "Up" : "Down");
            var floorNum = floor.floorNum();
            if (!elevator.destinationQueue.includes(floorNum)){
                elevator.goToFloor(floorNum);
            }
        }
        
        var elevator = elevators[0]; // Let's use the first elevator
        
        elevator.on("floor_button_pressed", function(floorNum) {
            if (!elevator.destinationQueue.includes(floorNum)){
                elevator.goToFloor(floorNum);
            }
        })
        
        $.each(floors, function(i, floor) {
            floor.on("up_button_pressed", function() {
                floorPress(floor, true);
            });
            floor.on("down_button_pressed", function() {
                floorPress(floor, false);
            }); 
        });
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}