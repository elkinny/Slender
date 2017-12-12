import { Paper } from "./Paper.js";
import { CIRCLE } from "../main.js";
import { Bitmap } from "./Bitmap.js";

export class Player {
    constructor(x, y, direction, papers, map, sounds, state) {
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.papers = papers;
        this.map = map;
        this.sounds = sounds;
        this.state = state;
        this.right_hand = new Bitmap('img/knife_hand.png', 200, 200);
        this.left_hand = new Bitmap('img/left_hand.png', 200, 200);
        this.paces = 0;
        this.paper = new Paper(0,0);
        this.speed = 1;
        this.hitting_the_fence = false;
        this.hitting_the_wall = false;
    };

    rotate(angle) {
        this.direction = (this.direction + angle + CIRCLE) % (CIRCLE);
    };

    walk(distance, map, direction) {
        let dx = Math.cos(direction) * distance;
        let dy = Math.sin(direction) * distance;
        let in_the_x_way = map.get(this.x + dx, this.y);
        let in_the_y_way = map.get(this.x, this.y + dy);

        if (in_the_x_way == 2 || in_the_y_way == 2) {
            this.hitting_the_fence = true;
            this.WalkSound();
        } else if (in_the_x_way == 1 || in_the_y_way == 1) {
            this.hitting_the_wall = true;
            this.WalkSound();
        }
        if (in_the_x_way <= 0) this.x += dx;
        if (in_the_y_way <= 0) this.y += dy;
        this.paces += distance;
    };

    update(controls, map, seconds) {
        this.running = controls.shift;
        this.walking = (controls.forward || controls.backward ||
                        controls.sideLeft || controls.sideRight);
        if (controls.left) this.rotate(-Math.PI * seconds);
        if (controls.right) this.rotate(Math.PI * seconds);
        if (controls.forward) {
            this.walkSound();
            this.walk(this.speed * seconds, map, this.direction);
        }
        if (controls.backward) {
            this.walkSound();
            this.walk(-(this.speed) * seconds, map, this.direction);
        }
        if (controls.sideLeft) {
            this.dodgeSound();
            this.walk(this.speed/2 * seconds, map, this.direction - Math.PI/2);
        }
        if (controls.sideRight) {
            this.dodgeSound();
            this.walk(-(this.speed/2) * seconds, map, this.direction - Math.PI/2);
        }
        controls.shift ? this.speed = 3 : this.speed = 1;
    };

    snowWalkSound() {
        if (this.sounds.sound_end) {
            if (this.hitting_the_fence) {
                this.sounds.makeSound('hitting_the_fence');
                this.hitting_the_fence = false;
            } else if (this.hitting_the_wall) {
                this.sounds.makeSound('hitting_the_wall');
                this.hitting_the_wall = false;
            } else if (this.running) {
                this.sounds.makeSound('running');
            } else {
                (Math.random() > 0.5) ? this.sounds.makeSound('forward_step') :
                                        this.sounds.makeSound('backward_step');
            }
        }
    }

    snowDodgeSound() {
        if (this.sounds.sound_end) {
            (Math.random() > 0.5) ? this.sounds.makeSound('dodge_step_0') :
                                    this.sounds.makeSound('dodge_step_1');
        }
    }

    rainWalkSound() {
        if (this.sounds.sound_end) {
            if (this.hitting_the_fence) {
                this.sounds.makeSound('hitting_the_fence');
                this.hitting_the_fence = false;
            } else if (this.hitting_the_wall) {
                this.sounds.makeSound('hitting_the_wall');
                this.hitting_the_wall = false;
            } else if (this.running) {
                this.sounds.makeSound('running');
            } else {
                if (Math.random() > 0.3) {
                    (Math.random() > 0.5) ? this.sounds.makeSound('rain_forward_step') :
                                            this.sounds.makeSound('rain_backward_step');
                } else {
                    this.sounds.makeSound('rain_step');
                }
            }
        }

    };

    rainDodgeSound() {
        if (this.sounds.sound_end) {
            (Math.random() > 0.5) ? this.sounds.makeSound('rain_dodge_step_0') :
                                    this.sounds.makeSound('rain_dodge_step_1');
        }
    };

    walkSound() {
        (this.state.winter) ? this.snowWalkSound() : this.rainWalkSound();
    }

    dodgeSound() {
        (this.state.winter) ? this.snowDodgeSound() : this.rainDodgeSound();
    }

    dosmth(action){
        if(action === 'enter') console.log('Bam!');
        if(action === 'space') {
            if (!this.running && !this.walking && this.sounds.sound_end) {
                let paper_type = this.paper.placePaper(this.papers, this.x, this.y, this.map);
                if (paper_type === 0) {
                    this.sounds.makeSound('placing_loo_paper')
                } else if (paper_type === 7) {
                    this.sounds.makeSound('placing_bomb');
                } else {
                    this.sounds.makeSound('placing_paper');
                }
            } else console.log("You can't place a paper while moving!");
        }
        if(action === 'escape') location.reload();
    }
}
