{
    init: function(elevators, floors) {
        // Do stuff with the elevators and floors, which are both arrays of objects
        var elevator = elevators[0];
        
        $.each(floors, function(index, floor){
           floor.on("up_button_pressed", function(){
               elevator.goToFloor(floor.floorNum());
           });
            
           floor.on("down_button_pressed", function(){
               elevator.goToFloor(floor.floorNum());
           });
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
