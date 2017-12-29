let name = prompt("please enter your user name", "")
let peerconf = {
    debug: 3,
    config: {"iceServers":
    [
        {url: `stun:${name}@js.perspective3d.online:3478?transport=udp`, credential: name}]},
    host: "js.perspective3d.online",
    port:3478
}
function doNothing(e){
    e.preventDefault();
    e.stopPropagation();
}

let peer = window.peer = new Peer(name, peerconf);
peer.on('open', function(){
    $('.status').css("background-color", "green");
})
