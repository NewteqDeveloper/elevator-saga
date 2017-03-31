{
    init: function(elevators, floors) {
        var idleElevators = [];

        $.each(floors, function(floorNum, floor){
            floor.on("up_button_pressed", function(){
                if (idleElevators.length > 0){
                    idleElevators.pop().goToFloor(floorNum);
                }
            });

            floor.on("down_button_pressed", function(){
                if (idleElevators.length > 0){
                    idleElevators.pop().goToFloor(floorNum);
                }
            });
        });

        $.each(elevators, function(index, elevator){            
            elevator.on("idle", function(){
                idleElevators.push(elevator);
            });

            elevator.on("passing_floor", function(floorNum, direction){
                debugger;
                var pressedFloors = elevator.getPressedFloors();
                if(pressedFloors.length > 0) {
                    if ($.inArray(floorNum, pressedFloors) > -1) {
                        elevator.goToFloor(floorNum, true)
                    }
                }
            });
            
            elevator.on("floor_button_pressed", function(floor){
                elevator.goToFloor(floor);
            });
        });
    },
    update: function(dt, elevators, floors) {
        // dt is the number of game seconds that passed since the last time update was called
        $.each(elevators, function(index, elevator){
           
        });
    }
}
