{
    init: function(elevators, floors) {
        $.each(elevators, function(index, elevator){
            elevator.goingUpIndicator(true);
            elevator.goingDownIndicator(false);
            
            elevator.on("floor_button_pressed", function(floor){
                elevator.goToFloor(floor);
            });
            
            $.each(floors, function(index, floor){
                
            });
            
        });
    },
    update: function(dt, elevators, floors) {
        // dt is the number of game seconds that passed since the last time update was called
        $.each(elevators, function(index, elevator){
           
        });
    }
}
