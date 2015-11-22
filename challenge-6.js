{
    init: function(elevators, floors) {
        $.each(elevators, function(index, elevator){
            var goingUp = function(){
                elevator.goingUpIndicator(true);
                elevator.goingDownIndicator(false);
            };
            var goingDown = function(){
                elevator.goingUpIndicator(false);
                elevator.goingDownIndicator(true);  
            };
            var toggleIndicator = function(){
                var up = elevator.goingUpIndicator();
                var down = elevator.goingDownIndicator();
                
                elevator.goingUpIndicator(!up);
                elevator.goingDownIndicator(!down);
            };
            
            goingDown();
            
            elevator.on("idle", function(){
                toggleIndicator();
            });
            
            elevator.on("floor_button_pressed", function(floor){
                elevator.goToFloor(floor);
                if (floor === 3){
                    goingDown();
                }
                if (floor === 0){
                    goingUp();
                }
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
