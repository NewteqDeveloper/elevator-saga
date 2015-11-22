{
    init: function(elevators, floors) {
        // Do stuff with the elevators and floors, which are both arrays of objects
        var elevator = elevators[0];
        
        elevator.on("idle", function() {
            elevator.goToFloor(0);
            elevator.goToFloor(1);
            elevator.goToFloor(2);
            elevator.goToFloor(3);
            elevator.goToFloor(4);
        });
        
        elevator.on("stopped_at_floor", function(floor){
            if (floor === 4){
                elevator.goToFloor(0);
            }
        });
        
        elevator.on("floor_button_pressed", function(floor){
            elevator.goToFloor(floor, true);
        });
    },
    update: function(dt, elevators, floors) {
        // Do more stuff with the elevators and floors
        // dt is the number of game seconds that passed since the last time update was called
    }
}
