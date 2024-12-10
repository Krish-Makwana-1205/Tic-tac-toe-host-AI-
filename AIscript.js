let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let b4 = document.getElementById("b4");
let b5 = document.getElementById("b5");
let b6 = document.getElementById("b6");
let b7 = document.getElementById("b7");
let b8 = document.getElementById("b8");
let b9 = document.getElementById("b9");
let prev;
let count = 0;
const bools = [];
for(let i = 0; i < 9; i++){
    bools[i] = false;
}
let toggle = false;
function change(event){
    if(bools[nums(event)-1] == true){
        return ;
    }
    ++count;
    if(prev != null){
        prev.style.backgroundColor = 'rgba(32, 32, 219, 0.324)';
    }
    event.target.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
    prev = event.target;
    event.target.innerHTML = 'X';
    bools[nums(event)-1] = true;
    if(goal_state(event)){
        return ;
    }
    bot_plays();
}
function goal_state(event){
    if(event.target == b1 || event.target == b2 || event.target == b3){
        if(b2.innerHTML == b1.innerHTML && b3.innerHTML == b1.innerHTML){
            b1.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            b2.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            b3.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            disable_all();
            return true;
        }
    }
    if(event.target == b4 || event.target == b5 || event.target == b6){
        if(b5.innerHTML == b4.innerHTML && b6.innerHTML == b5.innerHTML){
            b4.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            b5.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            b6.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            disable_all();
            return true;
        }
    }
    if(event.target == b7 || event.target == b8 || event.target == b9){
        if((b7.innerHTML == b8.innerHTML) && (b7.innerHTML == b9.innerHTML)){
            b7.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            b8.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            b9.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            disable_all();
            return true;
        }
    }
    if(event.target == b4 || event.target == b1 || event.target == b7){
        if(b1.innerHTML == b4.innerHTML && b7.innerHTML == b1.innerHTML){
            b1.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            b4.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            b7.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            disable_all();
            return true;
        }
    }
    if(event.target == b2 || event.target == b5 || event.target == b8){
        if((b2.innerHTML == b5.innerHTML) && (b2.innerHTML == b8.innerHTML)){
            b2.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            b5.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            b8.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            disable_all();
            return true;
        }
    }
    if(event.target == b3 || event.target == b6 || event.target == b9){
        if(b3.innerHTML == b6.innerHTML && b3.innerHTML == b9.innerHTML){
            b3.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            b6.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            b9.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            disable_all();
            return true;
        }
    }
    if(event.target == b1 || event.target == b5 || event.target == b9){
        if(b1.innerHTML == b5.innerHTML && b1.innerHTML == b9.innerHTML){
            b1.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            b5.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            b9.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            disable_all();
            return true;
        }
    }
    if(event.target == b7 || event.target == b5 || event.target == b3){
        if(b7.innerHTML == b5.innerHTML && b7.innerHTML == b3.innerHTML){
            b3.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            b5.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            b7.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            disable_all();
            return true;
        }
    }
    if(count == 9){
        b1.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
        b2.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
        b3.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
        b4.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
        b5.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
        b6.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
        b7.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
        b8.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
        b9.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
        return true;
    }
    return false;
}
function disable_all(){
    for(let i = 0; i < 9; i++){
        bools[i] = true;
    }
}
function nums(event){
    if(event.target == b1){
        return 1;
    }
    else if(event.target == b2){
        return 2;
    }
    else if(event.target == b3){
        return 3;
    }
    else if(event.target == b4){
        return 4;
    }
    else if(event.target == b5){
        return 5;
    }
    else if(event.target == b6){
        return 6;
    }
    else if(event.target == b7){
        return 7;
    }
    else if(event.target == b8){
        return 8;
    }
    else if(event.target == b9){
        return 9;
    }
}
let temp;
function bot_plays(){
    bot = AI()
    console.log(bot);
    ++count;
    if(bot == 1){
        temp = b1;
    }
    else if(bot == 2){
        temp = b2;
    }
    else if(bot == 3){
        temp = b3;
    }
    else if(bot == 4){
        temp = b4;
    }
    else if(bot == 5){
        temp = b5;
    }
    else if(bot == 6){
        temp = b6;
    }
    else if(bot == 7){
        temp = b7;
    }
    else if(bot == 8){
        temp = b8;
    }
    else if(bot == 9){
        temp = b9;
    }
    if(prev != null){
        prev.style.backgroundColor = 'rgba(32, 32, 219, 0.324)';
    }
    console.log("Running");
    temp.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
    prev = temp;
    temp.innerHTML = 'O';
    bools[bot-1] = true;
    if(bot == 1){
        b1 = temp;
    }
    else if(bot == 2){
        b2 = temp;
    }
    else if(bot == 3){
        b3 = temp;
    }
    else if(bot == 4){
        b4 = temp;
    }
    else if(bot == 5){
        b5 = temp;
    }
    else if(bot == 6){
        b6 = temp;
    }
    else if(bot == 7){
        b7 = temp;
    }
    else if(bot == 8){
        b8 = temp;
    }
    else if(bot == 9){
        b9 = temp;
    }
    goal_state_bot(temp);
}
function goal_state_bot(temp){
    if(temp == b1 || temp == b2 || temp == b3){
        if(b2.innerHTML == b1.innerHTML && b3.innerHTML == b1.innerHTML){
            b1.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            b2.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            b3.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            disable_all();
            return ;
        }
    }
    if(temp == b4 || temp == b5 || temp == b6){
        if(b5.innerHTML == b4.innerHTML && b6.innerHTML == b5.innerHTML){
            b4.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            b5.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            b6.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            disable_all();
            return ;
        }
    }
    if(temp == b7 || temp == b8 || temp == b9){
        if((b7.innerHTML == b8.innerHTML) && (b7.innerHTML == b9.innerHTML)){
            b7.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            b8.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            b9.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            disable_all();
            return ;
        }
    }
    if(temp == b4 || temp == b1 || temp == b7){
        if(b1.innerHTML == b4.innerHTML && b7.innerHTML == b1.innerHTML){
            b1.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            b4.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            b7.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            disable_all();
            return ;
        }
    }
    if(temp == b2 || temp == b5 || temp == b8){
        if((b2.innerHTML == b5.innerHTML) && (b2.innerHTML == b8.innerHTML)){
            b2.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            b5.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            b8.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            disable_all();
            return ;
        }
    }
    if(temp == b3 || temp == b6 || temp == b9){
        if(b3.innerHTML == b6.innerHTML && b3.innerHTML == b9.innerHTML){
            b3.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            b6.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            b9.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            disable_all();
            return ;
        }
    }
    if(temp == b1 || temp == b5 || temp == b9){
        if(b1.innerHTML == b5.innerHTML && b1.innerHTML == b9.innerHTML){
            b1.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            b5.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            b9.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            disable_all();
            return ;
        }
    }
    if(temp == b7 || temp == b5 || temp == b3){
        if(b7.innerHTML == b5.innerHTML && b7.innerHTML == b3.innerHTML){
            b3.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            b5.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            b7.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            disable_all();
            return ;
        }
    }
    if(count == 9){
        b1.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
        b2.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
        b3.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
        b4.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
        b5.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
        b6.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
        b7.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
        b8.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
        b9.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
    }
}
function AI(){
    let inter = [];
    if(b1.innerText == 'X'){
        inter[0] = -1;
    }
    else if(b1.innerText == 'O'){
        inter[0] = 1;
    }
    else{
        inter[0] = 0;
    }
    if(b2.innerText == 'X'){
        inter[1] = -1;
    }
    else if(b2.innerText == 'O'){
        inter[1] = 1;
    }
    else{
        inter[1] = 0;
    }
    if(b3.innerText == 'X'){
        inter[2] = -1;
    }
    else if(b3.innerText == 'O'){
        inter[2] = 1;
    }
    else{
        inter[2] = 0;
    }
    if(b4.innerText == 'X'){
        inter[3] = -1;
    }
    else if(b4.innerText == 'O'){
        inter[3] = 1;
    }
    else{
        inter[3] = 0;
    }
    if(b5.innerText == 'X'){
        inter[4] = -1;
    }
    else if(b5.innerText == 'O'){
        inter[4] = 1;
    }
    else{
        inter[4] = 0;
    }
    if(b6.innerText == 'X'){
        inter[5] = -1;
    }
    else if(b6.innerText == 'O'){
        inter[5] = 1;
    }
    else{
        inter[5] = 0;
    }
    if(b7.innerText == 'X'){
        inter[6] = -1;
    }
    else if(b7.innerText == 'O'){
        inter[6] = 1;
    }
    else{
        inter[6] = 0;
    }
    if(b8.innerText == 'X'){
        inter[7] = -1;
    }
    else if(b8.innerText == 'O'){
        inter[7] = 1;
    }
    else{
        inter[7] = 0;
    }
    if(b9.innerText == 'X'){
        inter[8] = -1;
    }
    else if(b9.innerText == 'O'){
        inter[8] = 1;
    }
    else{
        inter[8] = 0;
    }
    return bestmovemax(inter)[1] + 1;

}
function bestmovemax(inter){
    let opt = -2, opti = -1;
    let temp;
    for(let i = 0; i < 9; ++i){
        if(inter[i] == 0){
            inter[i] = 1;
            temp = finstate(inter);
            if(temp == 2){
                let b = bestmovemin(inter);
                if(b[0] > opt){
                    opti = i;
                    opt = b[0];
                }
                inter[i] = 0;
            }
            else{
                if(temp > opt){
                    opti = i;
                    opt = temp;
                }
                inter[i] = 0;
            }
        }
    }
    return [opt, opti];
}
function finstate(inter){
    for(let i = 0; i < 7; i += 3){
        if(inter[i] == inter[i+1] && inter[i+1] == inter[i+2]){
            if(inter[i] == 1){
                return 1;
            }
            else if(inter[i] == -1){
                return -1;
            }
        }
    }
    for(let i = 0; i < 3; ++i){
        if(inter[i] == inter[i+3] && inter[i+3] == inter[i+6]){
            if(inter[i] == 1){
                return 1;
            }
            else if(inter[i] == -1){
                return -1;
            }
        }
    }
    if(inter[0] == inter[4] && inter[4] == inter[8]){
        if(inter[0] == 1){
            return 1;
        }
        else if(inter[0] == -1){
            return -1;
        }
    }
    if(inter[2] == inter[4] && inter[4] == inter[6]){
        if(inter[2] == 1){
            return 1;
        }
        else if(inter[2] == -1){
            return -1;
        }
    }
    for(let i = 0; i < 9; ++i){
        if(inter[i] == 0){
            return 2;
        }
    }
    return 0;
}
function bestmovemin(inter){
    let opt = 3, opti = -1;
    let temp;
    for(let i = 0; i < 9; ++i){
        if(inter[i] == 0){
            inter[i] = -1;
            temp = finstate(inter);
            if(temp == 2){
                let a = bestmovemax(inter)
                if(a[0] < opt){
                    opti = i;
                    opt = a[0];
                }
                inter[i] = 0;
            }
            else{
                if(temp < opt){
                    opti = i;
                    opt = temp;
                }
                inter[i] = 0;
            }
        }
    }
    return [opt, opti];
}