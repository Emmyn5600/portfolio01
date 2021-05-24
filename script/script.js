let head = document.getElementById("head-one")
let span = document.getElementById("span-one")
let cursos = document.getElementById("cursor")
let i = 0;
let i2 = 0
let i3 = 0
let intro = "I'm"
let myname = "NSABIMANA Emmanuel."
let myrole = "Full-Stack-Developer."
let passion = "Rwanda."
let love = "I 'm located in"
let count = 0
let inner = "I 'm a"
i2 = inner.length

function loveWriter() {
    head.innerHTML = inner.substring(0, i2)
    head.innerHTML += "|"
    i2--
    if (i2 >= 0) {
        setTimeout(loveWriter, 80)
    } else if (i <= love.length) {
        head.innerHTML = love.substring(0, i)
        head.innerHTML += "|"
        i++
        setTimeout(loveWriter, 80)
    } else {
        i = 0
        passionWriter()
    }
}
function passionWriter() {
    head.innerHTML = love
    if (i < passion.length) {
        span.innerHTML += passion[i]
        cursor.innerHTML = "|"
        i++
        setTimeout(passionWriter, 80)
    } else {
        if (count >= 5) {
            i2 = passion.length
            i = love.length
            passionDeleting()
            return
        } else if (count % 2 == 0) {
            cursor.innerHTML = "|"
        } else {
            cursor.innerHTML = ""
        }
        count++
        setTimeout(passionWriter, 500)
    }
}
function passionDeleting() {
    
   
    if (i2 >= 0) {
        span.innerHTML = passion.substring(0, i2)
        i2--
        setTimeout(passionDeleting, 80)
    } else if (i >= 0) {
        cursor.innerHTML = ""
        head.innerHTML = love.substring(0, i)
        head.innerHTML += "|"
        i--
        setTimeout(passionDeleting, 80)
    } else if (i3 < intro.length) {
        i3++
        head.innerHTML = intro.substring(0, i3)
        head.innerHTML += "|"
        
        setTimeout(passionDeleting, 80)
    }
    else {
        head.innerHTML = intro
        i = 0
        i2 = 0
        i3 = 0
        count = 0
        nameWriter()
    }
}
function nameWriter() {
    
    if (i < myname.length) {
        cursor.innerHTML = "|"
        span.innerHTML += myname[i];
        i++
        i2 = myname.length
        setTimeout(nameWriter, 80)
    }
    else if (i >= myname.length) {
        
        if (count >= 5) {
            deleting()
            return
        } else if (count % 2 == 0) {
            cursor.innerHTML = "|"
        } else {
            cursor.innerHTML = ""
        }
        count++
        setTimeout(nameWriter, 500)
            
    }
}
function deleting (){
    span.innerHTML = myname.substring(0,i2);
    i2--
    if (i2 >= 0) {
          setTimeout(deleting, 80) 
    } else {
        i = 0
        count = 0
        setTimeout(role, 150) 
    }
 
}
function deletingRole (){
    span.innerHTML = myrole.substring(0,i2);
    i2--
    if (i2 >= 0) {
          setTimeout(deletingRole, 80) 
    } else {
        i = 0
        count = 0
        cursor.innerHTML = ""
        i2 = inner.length
        setTimeout(loveWriter, 80)
    }
 
}
function role() {
    head.innerHTML = "I am a "
    if (i < myrole.length) {
        cursor.innerHTML = "|"
        span.innerHTML += myrole[i];
        i++;
        setTimeout(role, 80)
    }
    else if (i >= myrole.length) {
        if (count >= 5) {
            i2 = myrole.length
            deletingRole()
            return
        } else if (count % 2 == 0) {
            cursor.innerHTML = "|"
        } else {
            cursor.innerHTML = ""
        }
        count++
        setTimeout(role, 500)
    }
}

nameWriter()